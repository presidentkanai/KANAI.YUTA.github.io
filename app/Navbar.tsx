"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Class", href: "/class" },
    // 今後増えるプロジェクトなどもここに追加可能
  ];

  return (
    <>
      {/* 右上のハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-[60] p-3 bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl shadow-sm hover:border-red-500 transition-colors"
      >
        <Menu size={24} className="text-slate-900" />
      </button>

      {/* メニュー画面のオーバーレイ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-white flex flex-col p-8 md:p-24"
          >
            {/* 閉じるボタン */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-slate-50 rounded-2xl hover:bg-red-50 transition-colors"
              >
                <X size={24} className="text-red-600" />
              </button>
            </div>

            {/* メニューリンク集 */}
            <nav className="mt-20 space-y-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)} // クリックしたら閉じる
                    className="group flex items-center justify-between py-4 border-b border-slate-100"
                  >
                    <span className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter uppercase group-hover:text-red-600 transition-colors">
                      {item.name}
                    </span>
                    <ArrowRight size={32} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-red-600" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* メニュー下部のクレジット */}
            <div className="mt-auto">
              <p className="text-xs tracking-widest uppercase text-slate-400 font-bold">
                KANAI.YUTA PORTFOLIO 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
