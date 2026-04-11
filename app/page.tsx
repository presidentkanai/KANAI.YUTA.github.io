"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Trophy, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cards = [
    {
      title: "About Me",
      className: "md:col-span-2 bg-gradient-to-br from-blue-50/50 to-white",
      icon: <Globe className="text-blue-600" />,
      link: "/about"
    },
    {
      title: "Class",
      gridClass: "md:col-span-1",
      bgClass: "bg-white",
      icon: <Trophy className="text-yellow-600" size={24} />,
      link: "/class"
    },
    {
      title: "Main Project",
      className: "md:col-span-1 bg-white",
      icon: <Cpu className="text-red-600" />,
      link: "/othello"
    },
    {
      title: "Vision",
      className: "md:col-span-2 bg-red-50/50",
      icon: <ExternalLink className="text-red-500" />,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 p-6 md:p-24 font-sans">
      {/* ヒーローセクション */}
      <motion.header {...fadeIn} className="max-w-5xl mx-auto mb-16 space-y-4">
        {/* 名前：font-black, tracking-tighter */}
        <h1 className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter">
          KANAI<span className="text-red-600">.</span>YUTA
        </h1>
        <div className="flex items-center gap-4">
          <span className="px-2 py-0.5 bg-red-50 border border-red-200 text-red-600 text-[10px] font-bold rounded-full">
            CIT 2027
          </span>
          <p className="text-sm md:text-lg tracking-[0.2em] uppercase text-slate-400 font-medium">
            Motorsport / Web3 / AI
          </p>
        </div>
      </motion.header>

      {/* 弁当箱（Bento Grid） */}
      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Link href={card.link} key={index} className={card.className}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "#dc2626" }}
              className={`p-10 rounded-3xl border border-slate-100 flex flex-col justify-between transition-all min-h-[250px] h-full cursor-pointer shadow-sm hover:shadow-md ${card.className}`}
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-slate-50 rounded-2xl">{card.icon}</div>
                <ExternalLink size={16} className="text-slate-200" />
              </div>
              
              {/* 各項目のタイトル：名前と同じ font-black, tracking-tighter を適用 */}
              <h3 className="text-slate-950 font-black text-4xl md:text-5xl tracking-tighter">
                {card.title}
              </h3>
            </motion.div>
          </Link>
        ))}
      </main>

      <footer className="max-w-5xl mx-auto mt-20 pt-8 border-t border-slate-100 text-center text-xs tracking-widest uppercase text-slate-400">
        &copy; 2026 Yuta Kanai. All Rights Reserved.
      </footer>
    </div>
  );
}
