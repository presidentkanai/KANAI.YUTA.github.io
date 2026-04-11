"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Class() {
  return (
    <div className="min-h-screen bg-white text-slate-800 p-8 md:p-24 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-red-600 font-bold hover:underline mb-8 inline-block">← Back to Home</Link>
      
      <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-950 mb-8 tracking-tighter">Academic & Class</h1>
        
        <div className="grid gap-8">
          <section className="border-l-4 border-red-600 pl-6">
            <h2 className="text-xl font-bold text-slate-900">千葉工業大学 (CIT)</h2>
            <p className="text-slate-500 italic">2024 - 2024 (Expected)</p>
            <p className="mt-2 text-slate-600">情報通信システム工学科。ネットワーク、データ通信、人工知能の基礎を幅広く学んでいます。</p>
          </section>

          <section className="bg-slate-50 p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Current Focus</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>機械学習を用いたゲームエンジンの構築</li>
              <li>Web3技術による車両 inspection NFT の試作</li>
              <li>次世代モータースポーツビジネスのロードマップ作成</li>
            </ul>
          </section>
        </div>
      </motion.article>
    </div>
  );
}
