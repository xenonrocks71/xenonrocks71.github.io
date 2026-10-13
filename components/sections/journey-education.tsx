"use client";

import React from "react";
import { journeyData, JourneyStage } from "@/portfolio-content/data/education";

export function JourneyEducation() {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 relative border-t border-white/5 bg-[#080B12]/20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/10 text-xs font-mono text-blue-400">
            <span>CAREER & ACADEMIC PROGRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Journey
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            From foundational school sciences to polytechnic computer engineering, leading to deep software engineering and AI exploration at DBATU.
          </p>

          {/* Visual Progression Banner */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/10 font-semibold">School</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/10 font-semibold">Diploma</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/10 font-semibold">Engineering</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold">Software Engineer</span>
          </div>
        </div>

        {/* Visually Strong Timeline */}
        <div className="relative border-l-2 border-white/10 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
          {journeyData.map((stage: JourneyStage, idx: number) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#080B12] group-hover:bg-blue-400 transition-colors shadow-sm shadow-blue-500/30" />

              <div className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-[#0d1017]/80 backdrop-blur-md space-y-4 hover:border-white/20 transition-all shadow-xl">
                {/* Year & Score Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/25">
                      {stage.year}
                    </span>
                    {stage.badge && (
                      <span className="text-[11px] font-mono text-zinc-400">
                        • {stage.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-zinc-400">{stage.scoreType}:</span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/20 text-sm">
                      {stage.score}
                    </span>
                  </div>
                </div>

                {/* Institution & Stage */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {stage.stageTitle}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5">
                    {stage.websiteUrl ? (
                      <a
                        href={stage.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 transition-colors"
                      >
                        {stage.institution} ↗
                      </a>
                    ) : (
                      <span>{stage.institution}</span>
                    )}{" "}
                    • {stage.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {stage.description}
                </p>

                {/* Focus Areas Pills */}
                {stage.focusAreas && (
                  <div className="pt-2 border-t border-white/5">
                    <div className="text-[11px] font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Key Focus Areas:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
