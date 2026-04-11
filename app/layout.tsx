import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"; // Navbarコンポーネントをインポート

// フォントの設定（Next.js標準）
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- タブ名とサイト情報の設定 ---
export const metadata: Metadata = {
  title: "KANAI.YUTA", // ブラウザのタブに表示される名前
  description: "Yuta Kanai Portfolio - Motorsport / Web3 / AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {/* 全ページ共通のナビゲーションメニュー（右上の三本線） */}
        <Navbar />

        {/* 各ページ（Home, About, Class）の中身が表示される場所 */}
        {children}
      </body>
    </html>
  );
}
