"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cpu, ShieldCheck } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Vehicle Inspection NFT",
      description: "ERC721とIPFSを活用し、車検証や資産情報を改ざん不可能な形で安全に管理するシステム。Web3技術を実社会のインフラに統合する試みです。",
      icon: <ShieldCheck className="text-blue-600" size={32} />,
      tags: ["Solidity", "Next.js", "IPFS", "ERC721"]
    },
    {
      title: "Deep Learning Othello AI",
      description: "ディープラーニングを活用した思考エンジンを搭載したWebオセロゲーム。強化学習のアルゴリズムを用い、精度の高い次の一手を算出します。",
      icon: <Cpu className="text-red-600" size={32} />,
      tags: ["Python", "TensorFlow", "React", "AI"]
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
          Main<br/>Projects
        </h1>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 md:p-12 border border-slate-100 bg-slate-50/30 rounded-[2rem] space-y-6 hover:border-red-100 transition-colors"
            >
              <div className="p-4 bg-white rounded-2xl w-fit shadow-sm">
                {project.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
                {project.title}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.article>
    </div>
  );
}