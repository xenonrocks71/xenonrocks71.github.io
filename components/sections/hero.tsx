"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProfileAvatar } from "@/components/ui/profile-avatar";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const nameLetters = personalData.name.split("");

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col justify-center items-center pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-6 overflow-hidden text-center selection:bg-blue-600/30"
    >
      {/* Interactive Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-70 z-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x || "50%"}px ${mousePos.y || "40%"}px, rgba(59, 130, 246, 0.16), transparent 75%)`
        }}
      />

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 grain-overlay opacity-25 pointer-events-none z-0" />

      {/* Distant ambient glow orbs with vibrant light-mode saturation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-violet-500/25 dark:from-blue-600/15 dark:via-indigo-600/10 dark:to-violet-600/15 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center space-y-6">
        {/* Profile Avatar with Moving Orbital Ring */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <ProfileAvatar
            size={185}
            showBadge={true}
            src={personalData.avatarUrl}
          />
        </motion.div>

        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/15 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
          <span>{personalData.eyebrow}</span>
        </motion.div>

        {/* Huge Kinetic Name: Per-Letter Stagger Reveal */}
        <div className="space-y-1">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none flex items-center justify-center overflow-hidden">
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.12 + index * 0.03,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block ${char === " " ? "w-4 sm:w-6" : ""}`}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Cycling Morphing Role Switcher */}
          <div className="h-9 sm:h-11 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 font-mono tracking-tight"
              >
                {personalData.rotatingRoles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Short, Punchy Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="text-sm sm:text-base lg:text-lg text-slate-700 dark:text-zinc-300 max-w-2xl leading-relaxed font-sans"
        >
          {personalData.tagline}
        </motion.p>

        {/* 3 Floating Glass Parallax Stat Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl pt-1"
        >
          {personalData.statChips.map((chip) => (
            <div
              key={chip.value}
              className={`p-3 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                chip.highlight
                  ? "bg-blue-50/80 dark:bg-blue-500/10 light-card-blue border-blue-500/35 text-slate-900 dark:text-white shadow-md shadow-blue-500/10"
                  : "bg-white/95 dark:bg-white/[0.02] border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-blue-400/50 shadow-sm dark:shadow-none"
              }`}
            >
              <div className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {chip.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5">
                {chip.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Action CTAs with Magnetic Physics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <MagneticButton>
            <a
              href="#work"
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group cursor-pointer"
              data-cursor="Explore"
            >
              <span>View My Work</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-medium text-sm transition-all flex items-center gap-2 shadow-sm dark:shadow-none cursor-pointer"
              data-cursor="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all flex items-center gap-2 shadow-sm dark:shadow-none cursor-pointer"
              data-cursor="Resume"
            >
              <svg className="w-4 h-4 text-slate-600 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
