"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// すべての頭文字を大文字、hなどは小文字に統一
import {  Code } from "lucide-react";
import { Camera } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send} from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function About() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/kanaiyuta_07/",
      icon: <Camera className="text-pink-600" />,
      id: "@kanaiyuta_07"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/kanaiyuuta",
      icon: <Send className="text-sky-500" />,
      id: "@kanaiyuuta"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100074776384590",
      icon: <MessageCircle className="text-blue-700" />,
      id: "Yuta Kanai"
    },
    {
      name: "GitHub",
      url: "https://github.com/presidentkanai",
      icon: <Code className="text-slate-900" />,
      id: "presidentkanai"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 p-8 md:p-24 max-w-4xl mx-auto font-sans">
      <Link href="/" className="group flex items-center gap-2 text-sm text-red-600 font-bold mb-12 hover:opacity-70 transition-all">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>
      
      <motion.article 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter">
          About Me
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl">
          <p>
            千葉工業大学 情報通信システム工学科。
            モータースポーツの「速さ」とWeb3の「透明性」を融合させ、次世代のビジネスモデルを構築することに情熱を注いでいます。
          </p>
        </div>

        <section className="pt-12 border-t border-slate-100">
          <h2 className="text-2xl font-black text-slate-950 mb-8 tracking-tighter uppercase">Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-red-200 hover:bg-red-50/30 transition-all group"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{link.name}</p>
                  <p className="text-slate-950 font-bold">{link.id}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </motion.article>
    </div>
  );
}
