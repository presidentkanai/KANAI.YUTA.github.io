"use client";
import { motion } from "framer-motion";
import { ExternalLink, Cpu, Trophy, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// --- アニメーション設定 ---

// ランダムな範囲の数値を生成する関数
const getRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;

// アニメーションするテキストコンポーネント
const FloatingNameText = ({ index }: { index: number }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [animationConfig, setAnimationConfig] = useState<any>(null);

  useEffect(() => {
    // クライアントサイドでのみ実行（画面サイズを取得）
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // 方向、初期位置、目標位置、速度、遅延をランダムに設定
    const directions = ['leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const buffer = 300; // 画面外に出すバッファ（テキストが完全に消えるように）

    let initialX = 0;
    let initialY = 0;
    let targetX = 0;
    let targetY = 0;

    // 方向に基づいて初期位置と目標位置を決定
    switch (direction) {
      case 'leftToRight':
        initialX = -buffer;
        initialY = getRandomValue(0, window.innerHeight);
        targetX = window.innerWidth + buffer;
        targetY = getRandomValue(0, window.innerHeight);
        break;
      case 'rightToLeft':
        initialX = window.innerWidth + buffer;
        initialY = getRandomValue(0, window.innerHeight);
        targetX = -buffer;
        targetY = getRandomValue(0, window.innerHeight);
        break;
      case 'topToBottom':
        initialX = getRandomValue(0, window.innerWidth);
        initialY = -buffer;
        targetX = getRandomValue(0, window.innerWidth);
        targetY = window.innerHeight + buffer;
        break;
      case 'bottomToTop':
        initialX = getRandomValue(0, window.innerWidth);
        initialY = window.innerHeight + buffer;
        targetX = getRandomValue(0, window.innerWidth);
        targetY = -buffer;
        break;
    }

    // Framer Motionのアニメーション設定
    setAnimationConfig({
      initial: { x: initialX, y: initialY, opacity: 0 },
      animate: { 
        x: targetX, 
        y: targetY, 
        opacity: [0, getRandomValue(0.03, 0.1), getRandomValue(0.03, 0.1), 0] // 現れて、薄く流れて、消える
      },
      transition: {
        duration: getRandomValue(15, 30), // ゆっくり流れる（15〜30秒）
        delay: getRandomValue(0, 20), // ランダムな遅延（0〜20秒）
        ease: "linear", // 一定の速度
        repeat: Infinity, // 無限ループ
        repeatType: "loop",
      },
      style: {
        // ランダムなサイズと太さ、たまに赤
        fontSize: `${getRandomValue(30, 80)}px`, 
        fontWeight: getRandomValue(700, 900), 
        color: Math.random() > 0.9 ? "#dc2626" : "#e2e8f0", // 10%の確率で赤
      }
    });
  }, []);

  if (!animationConfig) return null; // クライアントサイドでのみレンダリング

  return (
    <motion.div
      className="absolute whitespace-nowrap z-[-1] pointer-events-none font-black tracking-tighter"
      {...animationConfig}
    >
      KANAI<span className={animationConfig.style.color === "#dc2626" ? "text-red-600" : "text-slate-200"}>.</span>YUTA
    </motion.div>
  );
};

// 背景アニメーションコンポーネント
const BackgroundAnimation = () => {
  const numTexts = 15; // 生成するテキストの数（画面の賑やかさ）

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {[...Array(numTexts)].map((_, i) => (
        <FloatingNameText key={i} index={i} />
      ))}
    </div>
  );
};

// --- メインページコンポーネント ---

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
    // relative overflow-hidden を追加してアニメーションがはみ出ないように
    <div className="min-h-screen bg-white text-slate-800 p-6 md:p-24 font-sans relative overflow-hidden">
      
      {/* 1. 背景アニメーションを配置（z-[-1]） */}
      <BackgroundAnimation />

      {/* 2. 本来のコンテンツ（z-10） */}
      <div className="relative z-10 space-y-16 max-w-5xl mx-auto">
        
        {/* ヒーローセクション */}
        <motion.header {...fadeIn} className="space-y-4 relative">
          {/* 名前：font-black, tracking-tighter */}
          <h1 className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter relative">
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
                
                {/* 各項目のタイトル：名前と同じ font-black, tracking-tighter を適用 */}
                <h3 className="text-slate-950 font-black text-4xl md:text-5xl tracking-tighter">
                  {card.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </main>

        <footer className="pt-8 border-t border-slate-100 text-center text-xs tracking-widest uppercase text-slate-400">
          &copy; 2026 Yuta Kanai. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
