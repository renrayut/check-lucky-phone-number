"use client";
import { useState } from 'react';
import { getLuck } from '@/lib/horoscope';

export default function Home() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = number.replace(/\D/g, '');
    if (digits.length < 9) return alert("សូមបញ្ចូលលេខទូរស័ព្ទឲ្យត្រឹមត្រូវ");

    const sum = digits.split('').reduce((a, b) => a + parseInt(b), 0);
    setResult({ ...getLuck(sum), sum });
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 antialiased">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
        <h1 className="text-3xl font-bold text-center mb-2 text-indigo-600">
          ហុងស៊ុយលេខទូរស័ព្ទ
        </h1>
        <p className="text-center text-slate-500 mb-8 font-light">Check your Khmer Lucky Number</p>

        <form onSubmit={handleCheck} className="space-y-4">
          <input
            type="tel"
            placeholder="បញ្ចូលលេខទូរស័ព្ទ (ឧទាហរណ៍: 012345678)"
            className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-center text-xl tracking-widest"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
            ពិនិត្យមើលរាសី
          </button>
        </form>

        {result && (
          <div className={`mt-8 p-6 rounded-2xl border-2 animate-in fade-in zoom-in duration-300 ${
            result.type === 'good' ? 'bg-green-50 border-green-200' : 
            result.type === 'bad' ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">ផលបូកសរុប: {result.sum}</span>
              <h2 className="text-2xl font-bold mt-2 text-slate-800">{result.kh}</h2>
              <p className="text-slate-600 italic mt-1">{result.en}</p>
            </div>
          </div>
        )}
      </div>
      
      <footer className="mt-8 text-slate-400 text-sm">
        Built for Vercel • Khmer Horoscope 2026
      </footer>
    </main>
  );
}