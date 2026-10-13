"use client";

import React from "react";
import { experiencesData, ExperienceItem } from "@/portfolio-content/data/experience";

export function Experience() {
  const sumago = experiencesData.find((e) => e.id === "sumago-infotech") || experiencesData[0];
  const aces = experiencesData.find((e) => e.id === "aces-lead");

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/10 text-xs font-mono text-blue-400">
            <span>INDUSTRY INTERNSHIP & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Real software development internship contributions and collegiate technical leadership.
          </p>
        </div>

        {/* Detailed Sumago Infotech Experience Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0d1017]/85 backdrop-blur-md space-y-6 shadow-xl">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/15 text-blue-300 border border-blue-500/25 font-semibold">
                  {sumago.type}
                </span>
                {sumago.badge && (
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/25 font-semibold">
                    ★ {sumago.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {sumago.role}
              </h3>
              <div className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5">
                <a
                  href={sumago.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {sumago.company} ↗
                </a>{" "}
                • {sumago.location}
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
              <span className="text-xs font-mono text-zinc-400">{sumago.period}</span>
              {sumago.certificateUrl && (
                <a
                  href={sumago.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  <span>Verified Award Certificate</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <p className="text-sm text-zinc-300 leading-relaxed">
            {sumago.summary}
          </p>

          {/* Work / Projects Grid */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Applications & Modules Contributed:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {sumago.projectsContributed?.map((proj) => (
                <div
                  key={proj.title}
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] space-y-1.5 hover:border-white/20 transition-all"
                >
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Applied */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              Technologies Used:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sumago.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              What I Learned:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {sumago.keyLearnings.map((learning, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{learning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collegiate Leadership: ACES */}
        {aces && (
          <div className="p-6 rounded-3xl border border-white/10 bg-[#0d1017]/70 backdrop-blur-sm space-y-3 hover:border-white/20 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                  Collegiate Leadership
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {aces.role} • {aces.company}
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">{aces.period}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {aces.summary} Developed and maintained the department&apos;s digital event portal while helping junior students get started with Git, C++, and DSA problem-solving.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
