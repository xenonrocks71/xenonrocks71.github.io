"use client";

import React from "react";
import { personalData } from "@/portfolio-content/data/personal";

export function CurrentlyBuilding() {
  return (
    <section id="now" className="py-20 px-4 sm:px-6 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ACTIVE PURSUITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I&apos;m Working On
          </h2>
          <p className="text-zinc-400 text-sm">
            Core areas I am actively studying, practicing, and building applications with today.
          </p>
        </div>

        {/* 4 Cards Matching Section 15 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {personalData.currentFocus.map((focus, index) => (
            <div
              key={focus.title}
              className="p-5 rounded-2xl border border-white/10 bg-[#0d1017]/70 backdrop-blur-sm space-y-3 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">0{index + 1}</span>
                  <span className="text-[10px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active Focus
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">
                  {focus.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {focus.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 font-mono text-xs border-t border-white/5">
                {focus.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] bg-white/[0.03] text-zinc-400 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
