import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

// app フォルダ内の favicon.ico を画像としてインポートします
import Favicon from ".public/IMG_1039.jpeg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KANAI.YUTA",
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
        {/* 左上のリセットボタン */}
        <div className="fixed top-5 left-5 z-[60]">
          <Link href="/" scroll={true}>
            <Image
              src={Favicon}
              alt="Reset"
              width={40}
              height={40}
              className="cursor-pointer hover:rotate-12 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* 全ページ共通のナビゲーションメニュー */}
        <Navbar />

        {/* 各ページの内容が表示される場所 */}
        {children}
      </body>
    </html>
  );
}
