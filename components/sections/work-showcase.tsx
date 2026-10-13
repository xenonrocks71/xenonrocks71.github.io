"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData, ProjectItem } from "@/lib/data";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { ProjectModal } from "@/components/sections/project-modal";

interface EnrichedProjectCard extends ProjectItem {
  indexNum: string;
  categoryTag: string;
  roleBadge: string;
  shortSummary: string;
  metricLabel: string;
  metricValue: string;
  gaugePercent: number; // For circular SVG ring (0 - 100)
  gaugeText: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  accentTag: string;
  scoreAccent: string;
  liveText: string | null;
  liveColor: string;
  honorTag: string | null;
  cardBg: string;
  metricBg: string;
}

export const WorkShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const tribely = projectsData.find((p) => p.id === "tribely") || projectsData[0];
  const neuronexus = projectsData.find((p) => p.id === "neuronexus") || projectsData[1];
  const dbatu = projectsData.find((p) => p.id === "dbatu-results") || projectsData[2];
  const atten = projectsData.find((p) => p.id === "atten-attendance") || projectsData[3];

  const projects: EnrichedProjectCard[] = [
    {
      ...tribely,
      indexNum: "01",
      categoryTag: "Flagship Real-Time",
      roleBadge: "Solo Architecture",
      shortSummary: "Social accountability platform with synchronized deadlines, resilient WebSocket heartbeat, and ACID streak protection.",
      metricLabel: "LIVE RELIABILITY",
      metricValue: "50+ Users",
      gaugePercent: 99,
      gaugeText: "99%",
      accentColor: "rgb(59, 130, 246)",
      glowColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "hover:border-blue-500/50 hover:shadow-blue-500/10",
      accentTag: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25",
      scoreAccent: "from-blue-500 via-indigo-500 to-cyan-400",
      liveText: "Live Demo",
      liveColor: "bg-emerald-500/15 hover:bg-emerald-500 text-emerald-700 dark:text-emerald-300 hover:text-white border-emerald-500/30",
      honorTag: null,
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-blue",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-blue",
    },
    {
      ...neuronexus,
      indexNum: "02",
      categoryTag: "AI & GenAI RAG",
      roleBadge: "AI Pipeline Engineer",
      shortSummary: "Dense vector document retrieval and context-grounded synthesis with ChromaDB and Gemini/Ollama with zero hallucination.",
      metricLabel: "QUERY LATENCY",
      metricValue: "<150ms",
      gaugePercent: 98,
      gaugeText: "98%",
      accentColor: "rgb(6, 182, 212)",
      glowColor: "rgba(6, 182, 212, 0.15)",
      borderColor: "border-cyan-200/80 dark:border-white/10 hover:border-cyan-500/60 hover:shadow-cyan-500/10",
      accentTag: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/30",
      scoreAccent: "from-cyan-500 via-teal-500 to-emerald-400",
      liveText: null,
      liveColor: "",
      honorTag: null,
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-cyan",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-cyan",
    },
    {
      ...dbatu,
      indexNum: "03",
      categoryTag: "Academic Portal",
      roleBadge: "Relational Modeling",
      shortSummary: "Automated university GPA evaluation, transcript generation, and normalized relational records with strict SQL integrity.",
      metricLabel: "DATA INTEGRITY",
      metricValue: "100% ACID",
      gaugePercent: 100,
      gaugeText: "100%",
      accentColor: "rgb(139, 92, 246)",
      glowColor: "rgba(139, 92, 246, 0.15)",
      borderColor: "border-violet-200/80 dark:border-white/10 hover:border-violet-500/60 hover:shadow-violet-500/10",
      accentTag: "bg-violet-500/15 text-violet-700 dark:text-violet-400 border-violet-500/30",
      scoreAccent: "from-violet-500 via-purple-500 to-fuchsia-400",
      liveText: null,
      liveColor: "",
      honorTag: null,
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-violet",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-violet",
    },
    {
      ...atten,
      indexNum: "04",
      categoryTag: "Diploma Final Year",
      roleBadge: "Group Capstone · Team Contributor",
      shortSummary: "Contributed as part of our final-year diploma team to build the Android attendance suite, QR pairing, and detainment alerts.",
      metricLabel: "HONORS & ACCOLADES",
      metricValue: "1st Prize",
      gaugePercent: 95,
      gaugeText: "95%",
      accentColor: "rgb(245, 158, 11)",
      glowColor: "rgba(245, 158, 11, 0.15)",
      borderColor: "border-amber-200/80 dark:border-white/10 hover:border-amber-500/60 hover:shadow-amber-500/10",
      accentTag: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30",
      scoreAccent: "from-amber-500 via-orange-500 to-yellow-400",
      liveText: "Play Store",
      liveColor: "bg-amber-500/15 hover:bg-amber-500 text-amber-700 dark:text-amber-300 hover:text-white border-amber-500/30",
      honorTag: "🏆 1st Prize Winner",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-amber",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-amber",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full bg-transparent text-[var(--text-strong)] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 transition-colors duration-200 overflow-hidden border-t border-slate-200/80 dark:border-white/5"
    >
      {/* Anchor alias for #work */}
      <div id="work" className="absolute -top-24 pointer-events-none" />

      {/* Background atmospheric dynamic glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-500/15 dark:bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] rounded-full bg-violet-500/15 dark:bg-violet-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <span>FEATURED SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Projects.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Production habit platform, GenAI RAG engine, academic portal, and award-winning mobile software.
          </p>
        </div>

        {/* 4 Fancy Spotlight Cards in a Single Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, idx) => (
            <SpotlightProjectCard
              key={project.id}
              project={project}
              idx={idx}
              isHovered={hoveredIdx === idx}
              onHover={() => setHoveredIdx(idx)}
              onLeave={() => setHoveredIdx(null)}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Shared Detail Modal (Full Workflows, Topologies & Challenges) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

// ==========================================
// SPOTLIGHT PROJECT CARD WITH CIRCULAR GAUGE
// ==========================================

interface SpotlightProjectCardProps {
  project: EnrichedProjectCard;
  idx: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
}

const SpotlightProjectCard: React.FC<SpotlightProjectCardProps> = ({
  project,
  idx,
  isHovered,
  onHover,
  onLeave,
  onSelect,
}) => {
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

  // Circular gauge math (radius 22 -> circumference ~138.2)
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * project.gaugePercent) / 100;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onSelect}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      className={`group relative rounded-3xl ${project.cardBg} border border-slate-200/90 dark:border-white/10 ${project.borderColor} shadow-lg dark:shadow-2xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5 backdrop-blur-xl`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${project.glowColor}, transparent 70%)`,
        }}
      />

      {/* Top: Properly Displayed Image Viewport */}
      <div className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-200/80 dark:border-white/10 z-10">
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/20 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Badges on Image - Dominant Institution / Platform */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
          <div className="flex items-center gap-1.5 font-mono text-[10px] font-extrabold px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md text-white border border-white/20 shadow-md max-w-[210px] truncate">
            <span className="text-xs">{project.orgIcon}</span>
            <span className="truncate">{project.organization}</span>
          </div>

          {project.honorTag ? (
            <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/90 text-white backdrop-blur-md shadow-xs truncate">
              {project.honorTag}
            </span>
          ) : project.badge ? (
            <span className="font-mono text-[9px] font-semibold px-2 py-0.5 rounded-lg bg-emerald-500/90 text-white backdrop-blur-md shadow-xs truncate max-w-[120px]">
              {project.badge}
            </span>
          ) : null}
        </div>

        {/* Hover Inspect Cue */}
        <div className="absolute bottom-2 right-2 text-[10px] font-mono font-medium text-white/95 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/15 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Architecture</span>
          <span className="text-blue-400 font-bold">↗</span>
        </div>
      </div>

      {/* Middle: Content Body */}
      <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between relative z-10">
        <div className="space-y-3">
          {/* DOMINANT HERO INSTITUTION / PLATFORM BLOCK - EYE CATCHER #1 */}
          <div className="p-3 rounded-2xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-1.5 group-hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <span>{project.orgIcon}</span>
                <span className="truncate">{project.institution ? "ACADEMIC INSTITUTION" : "PLATFORM / LAB"}</span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 dark:text-zinc-500 shrink-0">
                {project.period}
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-black font-space-grotesk tracking-tight text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.organization}
            </h4>
            <div className="flex items-center gap-1.5 pt-0.5">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-[11px] font-bold">
                <span>⚡</span>
                <span className="truncate">{project.title}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 truncate">
                • {project.roleBadge}
              </span>
            </div>
          </div>

          {/* Circular Telemetry / Key Metric Banner (Matching Education Card styling) */}
          <div className={`p-3 rounded-2xl ${project.metricBg} border flex items-center justify-between shadow-xs`}>
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block">
                {project.metricLabel}
              </span>
              <span className={`text-lg sm:text-xl font-extrabold font-space-grotesk tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${project.scoreAccent}`}>
                {project.metricValue}
              </span>
            </div>

            {/* Precision SVG Ring Gauge */}
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg className="w-12 h-12 -rotate-90 transform" viewBox="0 0 54 54">
                <circle
                  cx="27"
                  cy="27"
                  r={radius}
                  className="stroke-slate-200 dark:stroke-white/10"
                  strokeWidth="4"
                  fill="transparent"
                />
                <motion.circle
                  cx="27"
                  cy="27"
                  r={radius}
                  stroke={project.accentColor}
                  strokeWidth="4"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <span className="absolute font-mono text-[9px] font-bold text-slate-700 dark:text-zinc-200">
                {project.gaugeText}
              </span>
            </div>
          </div>

          {/* 1-2 line concise problem/contribution summary */}
          <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-sans line-clamp-3">
            {project.shortSummary}
          </p>
        </div>

        {/* Bottom: Tech Stack Icons + Actions */}
        <div className="pt-2.5 border-t border-slate-100 dark:border-white/5 space-y-2.5">
          {/* Tech stack row with authentic Devicon CDN brand icons */}
          <div className="flex flex-wrap items-center gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-300"
                title={tech}
              >
                <IconRenderer name={tech} size={11} className="w-2.5 h-2.5" />
                <span>{tech}</span>
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[9px] font-mono text-slate-400 dark:text-zinc-500 self-center pl-0.5 font-semibold">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Action buttons row */}
          <div className="flex items-center justify-between pt-0.5 gap-1.5">
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {/* Direct Live Text Button */}
              {project.liveUrl && project.liveText && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all shadow-xs active:scale-95 cursor-pointer border ${project.liveColor}`}
                  title={project.liveText}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{project.liveText}</span>
                  <span className="text-[9px]">↗</span>
                </a>
              )}

              {/* GitHub Code link */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-mono font-medium bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-white/10 transition-all cursor-pointer shadow-xs active:scale-95"
                  title="Source Code on GitHub"
                >
                  <IconRenderer name="github" size={11} className="w-2.5 h-2.5" />
                  <span>Code</span>
                </a>
              )}
            </div>

            {/* Architecture / Deep Dive button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/btn cursor-pointer ml-auto"
            >
              <span>Deep Dive</span>
              <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

