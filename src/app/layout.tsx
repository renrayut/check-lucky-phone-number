import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";

const khmerFont = Kantumruy_Pro({ subsets: ["khmer"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body className={khmerFont.className}>{children}</body>
    </html>
  );
}