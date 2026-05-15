// src/lib/horoscope.ts
export const luckyData: Record<number, { kh: string; en: string; type: 'good' | 'neutral' | 'bad' }> = {
  1: { kh: "ជោគជ័យលើគ្រប់វិស័យ", en: "Success in all fields", type: 'good' },
  9: { kh: "មានអំណាច និងបារមីខ្ពស់", en: "High power and prestige", type: 'good' },
  15: { kh: "រាសីឡើងខ្ពស់ មានអ្នកជួយជ្រោមជ្រែង", en: "High luck with great support", type: 'good' },
  24: { kh: "សម្បូរទ្រព្យសម្បត្តិ និងមិត្តភក្តិ", en: "Abundant wealth and friends", type: 'good' },
  34: { kh: "ឧបសគ្គច្រើន និងគ្រោះថ្នាក់", en: "Many obstacles and accidents", type: 'bad' },
  36: { kh: "មានសំណាងល្អក្នុងជំនួញ", en: "Great luck in business", type: 'good' },
  45: { kh: "ជោគជ័យធំធេង និងសន្តិភាព", en: "Great success and peace", type: 'good' },
  // Default for others
};


export const getLuck = (sum: number) => {
  // If sum is greater than 81, we use the remainder or a cap
  const key = sum > 81 ? (sum % 81) + 1 : sum;
  return luckyData[key] || { kh: "រាសីមធ្យម ជីវិតមានក្តីសុខ", en: "Average luck, peaceful life", type: 'neutral' };
};