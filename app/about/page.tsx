"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-800 p-8 md:p-24 max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-red-600 font-bold hover:underline mb-8 inline-block">← Back to Home</Link>
      
      <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-950 mb-8 tracking-tighter">About Me</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          <p>
            千葉工業大学 情報通信システム工学科に在籍。幼少期からモータースポーツのスピードと技術に魅了され、現在はエンジニアリングの視点からその未来を創ることを目標にしています。
          </p>
          <p>
            特にブロックチェーン（Web3）技術を用いた、車両の個体識別やスポンサーシップの新しい形に興味を持っており、技術とビジネスの両輪で活動しています。
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 italic">
            "Technology is the bridge between passion and the next generation of motorsport."
          </div>
        </div>
      </motion.article>
    </div>
  );
}