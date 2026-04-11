"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Trophy, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false); // マウント状態を管理
  const [animationProps, setAnimationProps] = useState<{
    initial: any;
    animate: any;
  } | null>(null);

  useEffect(() => {
    setMounted(true); // ブラウザで読み込まれたことを確認

    // window（画面サイズ）は useEffect の中だけで使う
    const height = typeof window !== "undefined" ? window.innerHeight * 1.5 : 1000;
    const width = typeof window !== "undefined" ? window.innerWidth * 1.5 : 2000;

    const animationVariants = [
      // 1. 左から右
      { initial: { x: "-100vw", y: 0 }, animate: { x: "100vw", y: 0 } },
      // 2. 右から左
      { initial: { x: "100vw", y: 0 }, animate: { x: "-100vw", y: 0 } },
      // 3. 上から下
      { initial: { x: 0, y: -height }, animate: { x: 0, y: height } },
      // 4. 下から上
      { initial: { x: 0, y: height }, animate: { x: 0, y: -height } },
    ];

    const randomIndex = Math.floor(Math.random() * animationVariants.length);
    setAnimationProps(animationVariants[randomIndex]);

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      title: "About Me",
      gridClass: "md:col-span-2",
      bgClass: "bg-gradient-to-br from-blue-50/50 to-white",
      icon: <Globe className="text-blue-600" size={24} />,
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
      gridClass: "md:col-span-1",
      bgClass: "bg-white",
      icon: <Cpu className="text-red-600" size={24} />,
      link: "/othello"
    },
    {
      title: "Vision",
      gridClass: "md:col-span-2",
      bgClass: "bg-red-50/50",
      icon: <ExternalLink className="text-red-500" size={24} />,
      link: "/vision"
    }
  ];

  // マウントされる前、またはアニメーション設定が決まる前は何も出さない（エラー防止）
  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden relative">
      <AnimatePresence>
        {showIntro && animationProps && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
          >
            <motion.div
              initial={animationProps.initial}
              animate={animationProps.animate}
              transition={{ duration: 5, ease: "linear" }}
              className="whitespace-nowrap"
            >
              <h1 
                className="text-[18vw] md:text-[12vw] font-black tracking-tighter uppercase animate-rainbow-shimmer text-center"
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
        )}
      </AnimatePresence>

      {/* メインコンテンツ */}
      {!showIntro && (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-20 lg:p-24 max-w-6xl mx-auto"
        >
          <header className="mb-12 md:mb-20 space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8]">
              KANAI<span className="text-red-600">.</span>YUTA
            </h1>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <span className="px-2 py-0.5 bg-red-50 border border-red-200 text-red-600 text-[10px] font-bold rounded-full">
                CIT 2027
              </span>
              <p className="text-xs md:text-lg tracking-[0.15em] md:tracking-[0.2em] uppercase text-slate-400 font-medium">
                Motorsport / Web3 / AI
              </p>
            </div>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {cards.map((card, index) => (
              <Link href={card.link} key={index} className={`${card.gridClass} w-full`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, borderColor: "#dc2626" }}
                  className={`p-8 md:p-10 rounded-3xl border border-slate-100 flex flex-col justify-between transition-all min-h-[200px] md:min-h-[280px] h-full cursor-pointer shadow-sm hover:shadow-md ${card.bgClass}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-2 md:p-3 bg-white/80 rounded-2xl shadow-sm">{card.icon}</div>
                    <ExternalLink size={16} className="text-slate-300" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-[0.9] break-words">
                    {card.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </main>

          <footer className="mt-16 md:mt-24 pt-8 border-t border-slate-100 text-center text-[10px] md:text-xs tracking-widest uppercase text-slate-400">
            &copy; 2026 Yuta Kanai. All Rights Reserved.
          </footer>
        </motion.div>
      )}

      <style jsx global>{`
        @keyframes rainbow-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-rainbow-shimmer {
          animation: rainbow-shimmer 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
