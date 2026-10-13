"use client";

import React from "react";
import { motion } from "framer-motion";
import { achievementsData, AchievementItem } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative w-full py-10 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-20 bg-transparent text-[var(--text-strong)] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-200"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-amber-500/15 dark:bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
            <span>HONORS & RECOGNITION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-space-grotesk text-slate-900 dark:text-white">
            Achievements.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-white/70 font-mono">
            State-level project exhibitions, database competitions, and collegiate leadership.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item: AchievementItem, idx: number) => {
            const isFirst = item.place.includes("1st");
            const isSecond = item.place.includes("2nd");

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-[#0d101a]/90 light-card-amber backdrop-blur-xl border border-amber-200/80 dark:border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between gap-6 shadow-lg hover:shadow-xl dark:shadow-xl overflow-hidden hover:-translate-y-1"
              >
                {/* Light sweep hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.02] dark:via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div className="space-y-4">
                  {/* Top Row: Place & Year */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                        isFirst
                          ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/40"
                          : isSecond
                          ? "bg-slate-200/60 dark:bg-slate-300/20 text-slate-800 dark:text-slate-200 border-slate-300/50 dark:border-slate-300/30"
                          : "bg-blue-500/15 text-blue-800 dark:text-blue-300 border-blue-500/30"
                      }`}
                    >
                      <span>{isFirst ? "🥇" : isSecond ? "🥈" : item.place.includes("Lead") ? "🏛️" : "🎖️"}</span>
                      <span>{item.place}</span>
                    </span>

                    <span className="text-xs font-mono text-slate-500 dark:text-white/50">{item.year}</span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-xl font-bold font-space-grotesk text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-white/60 mt-1">
                      {item.issuer}
                    </p>
                  </div>

                  {/* Details */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                    {item.details}
                  </p>

                  {/* Skill Tags (e.g. Leadership & Management) */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 dark:bg-white/5 text-amber-800 dark:text-amber-300 border border-amber-500/20 dark:border-white/10 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Certificate Link if available */}
                {item.certificateUrl && (
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <MagneticButton>
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors font-semibold"
                      >
                        <span>Verified Certificate Proof</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </MagneticButton>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-white/40">Credential Link</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
