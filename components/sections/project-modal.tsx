"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/lib/data";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { useSmoothScroll } from "@/components/layout/smooth-scroll-provider";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lenis } = useSmoothScroll();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "solution" | "architecture" | "highlights">("overview");

  // Handle scroll lock & Lenis stop/start so mouse wheel scrolls inside modal effortlessly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      lenis?.start();
      document.body.style.overflow = "unset";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, lenis]);

  const scrollToSection = (sectionId: string, tab: "overview" | "solution" | "architecture" | "highlights") => {
    setActiveTab(tab);
    if (!scrollContainerRef.current) return;
    const target = scrollContainerRef.current.querySelector(`#${sectionId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Ambient Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Dialog Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            onWheel={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#ffffff] dark:bg-[#090c15] border border-slate-200/90 dark:border-white/10 shadow-[0_25px_90px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_100px_rgba(0,0,0,0.9)] text-slate-900 dark:text-white overflow-hidden transition-colors duration-200 backdrop-blur-2xl"
          >
            {/* Ambient Background Glow inside modal */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />

            {/* STICKY TOP FROSTED BAR */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-7 py-3.5 bg-white/90 dark:bg-[#090c15]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold hidden sm:inline-block">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Navigation Quick Jump Pills */}
              <div className="hidden md:flex items-center gap-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => scrollToSection("modal-overview", "overview")}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    activeTab === "overview"
                      ? "bg-slate-200 dark:bg-white/15 text-slate-900 dark:text-white font-bold"
                      : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("modal-solution", "solution")}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    activeTab === "solution"
                      ? "bg-slate-200 dark:bg-white/15 text-slate-900 dark:text-white font-bold"
                      : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Solution
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("modal-architecture", "architecture")}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    activeTab === "architecture"
                      ? "bg-slate-200 dark:bg-white/15 text-slate-900 dark:text-white font-bold"
                      : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("modal-highlights", "highlights")}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    activeTab === "highlights"
                      ? "bg-slate-200 dark:bg-white/15 text-slate-900 dark:text-white font-bold"
                      : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Highlights
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-300/80 dark:border-white/15 flex items-center justify-center text-slate-700 dark:text-white transition-all cursor-pointer hover:rotate-90"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* SCROLLABLE INNER CONTAINER (Custom Theme Scrollbar & Lenis Proof) */}
            <div
              ref={scrollContainerRef}
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              onWheel={(e) => e.stopPropagation()}
              className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8 space-y-8 relative z-10 [scrollbar-width:thin] [scrollbar-color:rgba(59,130,246,0.35)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-blue-500/30 dark:[&::-webkit-scrollbar-thumb]:bg-blue-500/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-blue-500/60"
            >
              {/* SECTION: HERO & OUTCOME */}
              <div id="modal-overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left Hero Details */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                          {project.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                        {project.period}
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        <span>{project.orgIcon || "🏛️"}</span>
                        <span>{project.institution ? "ACADEMIC INSTITUTION" : "ORGANIZATION / PLATFORM"}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black font-space-grotesk tracking-tight text-slate-900 dark:text-white leading-tight">
                        {project.organization || project.institution}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs sm:text-sm font-bold">
                          <span>⚡</span>
                          <span>{project.title}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-600 dark:text-zinc-400">
                          • {project.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* One Line Outcome Pill */}
                    <div className="p-4 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/25 text-blue-900 dark:text-blue-200 text-sm leading-relaxed flex items-start gap-3 shadow-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-base mt-0.5">⚡</span>
                      <span className="font-medium">{project.oneLineOutcome}</span>
                    </div>

                    {/* Metric Banner if available */}
                    {project.metric && (
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10">
                        <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-space-grotesk">
                          {project.metric.value}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                          {project.metric.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Showcase Preview Frame */}
                  <div className="md:col-span-5 relative aspect-[16/11] rounded-2xl bg-slate-950 overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-xl group">
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                      <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15">
                        Verified Architecture
                      </span>
                      <span className="text-blue-400 font-semibold">Active Build</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: PROBLEM VS SOLUTION */}
              <div id="modal-solution" className="space-y-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    Challenge & Architectural Resolution
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Problem Card */}
                  <div className="p-5 rounded-2xl bg-rose-500/[0.04] dark:bg-rose-500/[0.06] border border-rose-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>Problem Identified</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-sans">
                      {project.details.problem}
                    </p>
                  </div>

                  {/* Solution Card */}
                  <div className="p-5 rounded-2xl bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Engineered Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-sans">
                      {project.details.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION: ARCHITECTURE & DATA FLOW */}
              {project.details.architectureDescription && (
                <div id="modal-architecture" className="space-y-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      System Topology & Data Pipeline
                    </h3>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-400 pb-2 border-b border-slate-200/60 dark:border-white/5">
                      <div className="flex items-center gap-2">
                        <IconRenderer name="software-engineering" className="w-4 h-4 text-blue-500" />
                        <span className="font-bold text-slate-900 dark:text-white">Architecture Contract</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        Modular Core
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-sans">
                      {project.details.architectureDescription}
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION: TECHNICAL HIGHLIGHTS */}
              <div id="modal-highlights" className="space-y-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    Key Technical Highlights & Implementation Feats
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {project.details.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 hover:border-blue-500/30 transition-colors"
                    >
                      <span className="w-6 h-6 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 border border-blue-500/25">
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-sans">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: TECH STACK PILLS */}
              <div className="space-y-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    Technologies & Ecosystem
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-zinc-200 hover:border-blue-500/40 transition-colors"
                    >
                      <IconRenderer name={tech} size={14} className="w-3.5 h-3.5" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM PADDING SO USER HAS ROOM TO SCROLL COMFORTABLY */}
              <div className="h-6" />
            </div>

            {/* STICKY BOTTOM ACTIONS FOOTER */}
            <div className="sticky bottom-0 z-30 px-5 sm:px-7 py-4 bg-white/95 dark:bg-[#090c15]/95 backdrop-blur-xl border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white font-mono text-xs font-bold shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    <span>Visit Live Platform</span>
                    <span className="text-sm">↗</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white border border-slate-200 dark:border-white/15 font-mono text-xs font-semibold transition-all cursor-pointer"
                  >
                    <IconRenderer name="github" size={14} className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 hidden sm:inline">
                  ESC or click outside to dismiss
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-mono font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

