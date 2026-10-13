"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData, ExperienceItem } from "@/lib/data";
import { IconRenderer } from "@/components/ui/icon-renderer";

interface EnhancedExperience extends ExperienceItem {
  indexNum: string;
  categoryLabel: string;
  metricLabel: string;
  metricValue: string;
  gaugePercent: number;
  gaugeText: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  scoreAccent: string;
  badgeColor: string;
  cardBg: string;
  metricBg: string;
}

export const ExperienceDeck: React.FC = () => {
  const [filterMode, setFilterMode] = useState<"all" | "sumago" | "aces">("all");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const enhancedExperiences: EnhancedExperience[] = [
    {
      ...experienceData[0], // Sumago
      indexNum: "01",
      categoryLabel: "INDUSTRY INTERNSHIP",
      metricLabel: "DELIVERED SYSTEMS",
      metricValue: "4 Core Modules",
      gaugePercent: 100,
      gaugeText: "100%",
      accentColor: "rgb(59, 130, 246)",
      glowColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "hover:border-blue-500/50 hover:shadow-blue-500/10",
      scoreAccent: "from-blue-500 via-indigo-500 to-cyan-400",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-blue",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-blue",
    },
    {
      ...experienceData[1], // ACES
      indexNum: "02",
      categoryLabel: "COLLEGIATE LEADERSHIP",
      metricLabel: "CAMPUS OUTREACH",
      metricValue: "300+ Students",
      gaugePercent: 96,
      gaugeText: "96%",
      accentColor: "rgb(139, 92, 246)",
      glowColor: "rgba(139, 92, 246, 0.15)",
      borderColor: "hover:border-violet-500/50 hover:shadow-violet-500/10",
      scoreAccent: "from-violet-500 via-purple-500 to-fuchsia-400",
      badgeColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/25",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-violet",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-violet",
    },
  ];

  const displayedExperiences =
    filterMode === "all"
      ? enhancedExperiences
      : filterMode === "sumago"
      ? [enhancedExperiences[0]]
      : [enhancedExperiences[1]];

  return (
    <section
      id="experience"
      className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-12 bg-transparent text-[var(--text-strong)] border-t border-slate-200/80 dark:border-white/5 overflow-hidden transition-colors duration-200"
    >
      {/* Dynamic Ambient Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <span>WORK HISTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Experience.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-zinc-400 leading-relaxed">
              Software engineering internship and collegiate technical leadership.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-xs font-mono">
            <button
              type="button"
              onClick={() => setFilterMode("all")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterMode === "all"
                  ? "bg-white dark:bg-white/15 text-slate-900 dark:text-white font-bold shadow-xs"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All (2)
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("sumago")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterMode === "sumago"
                  ? "bg-white dark:bg-white/15 text-slate-900 dark:text-white font-bold shadow-xs"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              01 · Sumago Intern
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("aces")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterMode === "aces"
                  ? "bg-white dark:bg-white/15 text-slate-900 dark:text-white font-bold shadow-xs"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              02 · ACES Lead
            </button>
          </div>
        </div>

        {/* Futuristic Laser Data-Rail across Experiences */}
        <div className="hidden md:block relative p-3 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-xs light-rail">
          <div className="flex items-center justify-between px-4 text-xs font-mono font-semibold">
            {enhancedExperiences.map((exp, idx) => (
              <React.Fragment key={exp.id}>
                <button
                  type="button"
                  onClick={() => setFilterMode(idx === 0 ? "sumago" : "aces")}
                  className={`group flex items-center gap-2.5 transition-all text-left ${
                    hoveredIdx === idx
                      ? "text-slate-900 dark:text-white scale-105"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full transition-all"
                    style={{
                      backgroundColor: exp.accentColor,
                      boxShadow: `0 0 8px ${exp.accentColor}`,
                    }}
                  />
                  <span>
                    <strong className="text-slate-900 dark:text-white">{exp.indexNum}</strong> · {exp.company}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-zinc-300">
                    {exp.metricValue}
                  </span>
                </button>

                {idx < enhancedExperiences.length - 1 && (
                  <div className="flex-1 mx-6 relative h-[2px] bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear",
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Fancy Dual Experience Cockpit Grid (No automatic sliding) */}
        <div
          className={`grid gap-6 ${
            displayedExperiences.length === 1 ? "grid-cols-1 max-w-3xl mx-auto" : "grid-cols-1 lg:grid-cols-2"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {displayedExperiences.map((exp, idx) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                idx={idx}
                isHovered={hoveredIdx === idx}
                onHover={() => setHoveredIdx(idx)}
                onLeave={() => setHoveredIdx(null)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// EXPERIENCE COCKPIT CARD COMPONENT
// ==========================================

interface ExperienceCardProps {
  exp: EnhancedExperience;
  idx: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, idx, isHovered, onHover, onLeave }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Circular gauge math (radius 24 -> circumference ~150.8)
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * exp.gaugePercent) / 100;

  return (
    <motion.div
      ref={cardRef}
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-3xl ${exp.cardBg} border border-slate-200/90 dark:border-white/10 ${exp.borderColor} p-6 sm:p-8 shadow-lg dark:shadow-2xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 backdrop-blur-xl overflow-hidden`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${exp.glowColor}, transparent 70%)`,
        }}
      />

      {/* Card Header & Content */}
      <div className="space-y-5 relative z-10">
        {/* Step Indicator & Role Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/10 text-slate-800 dark:text-white">
              {exp.indexNum}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
              {exp.categoryLabel}
            </span>
          </div>

          {exp.badge && (
            <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
              ★ {exp.badge}
            </span>
          )}
        </div>

        {/* DOMINANT HERO COMPANY / ORGANIZATION BLOCK - EYE CATCHER #1 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-2 group-hover:border-blue-500/40 transition-all">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span className="text-xs">{exp.orgIcon || (exp.id === "sumago-infotech" ? "🏢" : "🏛️")}</span>
              <span>{exp.categoryLabel}</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 font-medium">
              📍 {exp.location}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-space-grotesk tracking-tight text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {exp.company}
          </h3>
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs sm:text-sm font-bold">
              <span>💼</span>
              <span>{exp.role}</span>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-600 dark:text-zinc-400">
              • {exp.period}
            </span>
            {exp.companyType && (
              <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 hidden sm:inline">
                • {exp.companyType}
              </span>
            )}
          </div>
        </div>

        {/* Circular Telemetry / Key Metric Banner */}
        <div className={`p-3.5 rounded-2xl ${exp.metricBg} border flex items-center justify-between shadow-xs`}>
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block">
              {exp.metricLabel}
            </span>
            <span className={`text-xl sm:text-2xl font-extrabold font-space-grotesk tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${exp.scoreAccent}`}>
              {exp.metricValue}
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 block">
              Tenure: {exp.period} · {exp.location}
            </span>
          </div>

          {/* Precision SVG Ring Gauge */}
          <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
            <svg className="w-14 h-14 -rotate-90 transform" viewBox="0 0 60 60">
              <circle
                cx="30"
                cy="30"
                r={radius}
                className="stroke-slate-200 dark:stroke-white/10"
                strokeWidth="4.5"
                fill="transparent"
              />
              <motion.circle
                cx="30"
                cy="30"
                r={radius}
                stroke={exp.accentColor}
                strokeWidth="4.5"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <span className="absolute font-mono text-[10px] font-bold text-slate-700 dark:text-zinc-200">
              {exp.gaugeText}
            </span>
          </div>
        </div>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
          {exp.summary}
        </p>

        {/* Delivered Systems & Modules Grid */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-semibold block">
            Delivered Modules & Key Initiatives
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {exp.modules.map((mod, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all space-y-1 group/mod"
              >
                <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-semibold text-xs group-hover/mod:text-blue-600 dark:group-hover/mod:text-blue-400 transition-colors">
                  <IconRenderer name={mod.iconName} className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="truncate">{mod.title}</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-snug line-clamp-2">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Learnings */}
        {exp.learnings && exp.learnings.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-semibold block">
              Core Engineering Learnings
            </span>
            <div className="space-y-1">
              {exp.learnings.slice(0, 3).map((learning, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">{learning}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: Technologies & Certificate Button */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/5 relative z-10 flex flex-wrap items-center justify-between gap-3">
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/5"
            >
              <IconRenderer name={tech} size={11} className="w-2.5 h-2.5" />
              <span>{tech}</span>
            </span>
          ))}
          {exp.technologies.length > 4 && (
            <span className="text-[9px] font-mono text-slate-400 dark:text-zinc-500 self-center pl-1 font-semibold">
              +{exp.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Certificate Proof Action Button */}
        {exp.certificateUrl && (
          <a
            href={exp.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/25 text-xs font-mono font-semibold transition-all shadow-xs cursor-pointer active:scale-95 ml-auto"
          >
            <span>Verified Proof</span>
            <span className="text-xs">↗</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

