"use client";

import React from "react";
import { Instagram, Twitter } from "lucide-react"; // インスタなどのアイコン用

const timelineData = [
  { date: "2005.07", title: "誕生", detail: "千葉県にて誕生。" },
  { date: "2015.04", title: "陸上を始める", detail: "短距離走を中心に、スポーツの基礎と精神力を養う。" },
  { date: "2021.04", title: "高校入学", detail: "プログラミングや技術への興味が深まった時期。" },
  { date: "2024.03", title: "高校卒業", detail: "仲間と共に成長した3年間を終える。" },
  { date: "2024.04", title: "千葉工業大学入学", detail: "情報通信システム工学科にて、Web3やAIの研究をスタート。" },
  { date: "2028.03", title: "卒業予定", detail: "技術を武器に社会へ貢献することを目指して邁進中。" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center tracking-tighter">ABOUT ME</h1>

        {/* --- タイムラインセクション --- */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-24 mb-20">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-12 ml-8 relative group">
              {/* 線の上のドット */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-2 border-slate-900 rounded-full group-hover:bg-slate-900 transition-colors duration-300" />
              
              {/* 日付 */}
              <span className="text-sm font-mono text-slate-500 mb-1 block">
                {item.date}
              </span>

              {/* タイトル（常に表示） */}
              <h3 className="text-xl font-bold text-slate-900 cursor-default">
                {item.title}
              </h3>

              {/* 詳細内容（ホバー時にふわっと表示） */}
              <div className="mt-2 text-slate-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <p className="bg-slate-50 p-3 rounded-lg border border-slate-100 shadow-sm">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- SNSセクション（既存のデータはここ以下に配置） --- */}
        <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">CONNECT</h2>
          <div className="flex gap-6">
            {/* ここに既存のSNSリンクをそのまま配置 */}
            <a href="https://instagram.com/..." className="hover:opacity-70 transition-opacity">
              <Instagram size={30} />
            </a>
            <a href="https://twitter.com/..." className="hover:opacity-70 transition-opacity">
              <Twitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
