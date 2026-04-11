"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Rocket, Flag } from "lucide-react";

export default function Vision() {
  const goals = [
    {
      title: "BUILD THE WORLD'S NO.1 COMPANY",
      subtitle: "世界で一番有名な起業を作成する",
      description: "既存の枠組みに捉われず、テクノロジーと情熱を武器に、世界中の人々が知る革新的な企業を立ち上げます。",
      icon: <Rocket size={40} className="text-red-600" />
    },
    {
      title: "F1 MOTORSPORT TEAM",
      subtitle: "Formula Oneへの挑戦",
      description: "自らのチームでモータースポーツの最高峰、F1へ参戦。勝負の世界で最速を証明するチームを構築します。",
      icon: <Flag size={40} className="text-slate-950" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 p-8 md:p-24 max-w-5xl mx-auto font-sans">
      <Link href="/" className="group flex items-center gap-2 text-sm text-red-600 font-bold mb-12 hover:opacity-70 transition-all w-fit">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>
      
      <motion.article 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="space-y-16"
      >
        <h1 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter uppercase leading-none">
          My<br/>Vision
        </h1>

        <div className="space-y-24 pt-12">
          {goals.map((goal, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="group border-l-4 border-slate-100 pl-8 md:pl-16 space-y-4 hover:border-red-600 transition-colors"
            >
              <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                {goal.icon}
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight">
                {goal.title}
              </h2>
              <p className="text-red-600 font-bold text-lg md:text-xl tracking-wider">
                {goal.subtitle}
              </p>
              <p className="text-slate-500 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed">
                {goal.description}
              </p>
            </motion.section>
          ))}
        </div>
      </motion.article>
    </div>
  );
}