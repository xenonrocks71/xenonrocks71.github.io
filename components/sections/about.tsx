"use client";

import React from "react";
import { personalData } from "@/portfolio-content/data/personal";
import { IconRenderer } from "@/components/ui/icon-renderer";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative border-t border-white/5 bg-[#080B12]/30">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
            Profile & Direction
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A little about me.
          </h2>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
          {personalData.aboutParagraphs.map((para, idx) => (
            <p key={idx} className="leading-relaxed text-zinc-300">
              {para}
            </p>
          ))}
        </div>

        {/* 4 Compact Identity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {personalData.identityCards.map((card) => (
            <div
              key={card.title}
              className="p-5 rounded-2xl border border-white/10 bg-[#0d1017]/70 backdrop-blur-sm space-y-3 hover:border-blue-500/30 transition-all flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center p-2 text-blue-400 group-hover:scale-105 transition-transform">
                  <IconRenderer name={card.iconName} size={20} color="#60a5fa" />
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
