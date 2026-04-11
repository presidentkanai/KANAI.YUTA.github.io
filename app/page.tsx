"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Trophy, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // 3.5秒後にイントロを終了してメインコンテンツを表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      title: "About Me",
      className: "md:col-span-2 bg-gradient-to-br from-blue-50/50 to-white",
      icon: <Globe className="text-blue-600" />,
      link: "/about"
    },
    {
      title: "Class",
      className: "md:col-span-1 bg-white",
      icon: <Trophy className="text-yellow-600" />,
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
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      <AnimatePresence>
        {showIntro ? (
          /* --- 条件1: イントロアニメーション --- */
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden"
          >
            {/* 条件2: 右から左へ流れる、虹色のキラキラテキスト */}
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{ duration: 3, ease: "linear" }}
              className="whitespace-nowrap"
            >
              <h1 
                className="text-[12vw] font-black tracking-tighter uppercase animate-rainbow-shimmer"
                style={{
                  background: "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff, #ff0000)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                KANAI.YUTA
              </h1>
            </motion.div>
          </motion.div>
        ) : (
          /* --- 条件3: メインコンテンツ --- */
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-24 max-w-5xl mx-auto"
          >
            {/* ヒーローセクション */}
            <header className="mb-16 space-y-4">
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
            </header>

            {/* 弁当箱（Bento Grid） */}
            <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <h3 className="text-slate-950 font-black text-4xl md:text-5xl tracking-tighter uppercase">
                      {card.title}
                    </h3>
                  </motion.div>
                </Link>
              ))}
            </main>

            <footer className="mt-20 pt-8 border-t border-slate-100 text-center text-xs tracking-widest uppercase text-slate-400">
              &copy; 2026 Yuta Kanai. All Rights Reserved.
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes rainbow-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-rainbow-shimmer {
          animation: rainbow-shimmer 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
