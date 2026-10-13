"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";

export const ExperienceDeck: React.FC = () => {
  const exp = experienceData[0]; // Sumago Infotech Pvt. Ltd. (Dominant Industry Experience)
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

  const projectsDelivered = [
    {
      id: "crm",
      icon: "👥",
      title: "Customer Relationship Management (CRM)",
      category: "Enterprise System",
      accent: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
      description:
        "Engineered end-to-end customer lead pipelines, sales stage workflows, and database CRUD operations for enterprise client relationship management.",
      highlights: [
        "Lead status pipeline and customer lifecycle transitions",
        "Full CRUD operations with relational MySQL foreign keys",
        "Role-based access for sales reps and administrators",
      ],
      technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
    },
    {
      id: "hospital-system",
      icon: "🏥",
      title: "Hospital Relationship System",
      category: "Healthcare Portal",
      accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description:
        "Built doctor-patient appointment scheduling logic, patient records, and relational database interactions for healthcare administration.",
      highlights: [
        "Doctor appointment booking and schedule conflict handling",
        "Patient medical history lookup and relational indexing",
        "Administrative dashboard for hospital staff workflows",
      ],
      technologies: ["PHP", "CodeIgniter", "MySQL", "MVC"],
    },
    {
      id: "hospital-locator",
      icon: "🗺️",
      title: "Hospital Locator System",
      category: "Geolocation Service",
      accent: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
      description:
        "Integrated Google Maps JavaScript API for real-time location coordinate mapping, geolocation queries, and radius-based facility discovery.",
      highlights: [
        "Google Maps API integration with dynamic pin markers",
        "Distance radius querying to locate nearest healthcare facilities",
        "Interactive client-side coordinate lookup and mapping",
      ],
      technologies: ["Google Maps API", "JavaScript", "PHP", "MySQL"],
    },
    {
      id: "pms",
      icon: "📊",
      title: "Project Management System",
      category: "Workflow Engine",
      accent: "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20",
      description:
        "Developed task lifecycle management, status transition workflows, team assignments, and normalized MySQL schemas for project tracking.",
      highlights: [
        "Task lifecycle state machine (Backlog → In Progress → Review → Done)",
        "Team member task allocation and progress tracking",
        "Normalized database schemas with indexed query performance",
      ],
      technologies: ["PHP", "CodeIgniter", "MySQL", "MVC"],
    },
  ];

  const impactAchievements = [
    {
      metric: "4 Modules",
      label: "Production Systems Delivered",
      description: "Full-cycle engineering from database design to controller logic & UI views.",
      icon: "🚀",
    },
    {
      metric: "100% MVC",
      label: "CodeIgniter Architecture",
      description: "Strict Model-View-Controller separation for maintainable, clean codebases.",
      icon: "📐",
    },
    {
      metric: "Live Geolocation",
      label: "Google Maps Integration",
      description: "Spatial coordinate mapping and radius searching for facility locators.",
      icon: "📍",
    },
    {
      metric: "ACID Compliant",
      label: "MySQL Relational Schemas",
      description: "Normalized relational schemas with indexed primary & composite keys.",
      icon: "⚡",
    },
  ];

  const technologiesUsed = [
    "PHP",
    "CodeIgniter (MVC)",
    "MySQL",
    "JavaScript",
    "Google Maps API",
    "REST APIs",
    "HTML5 & CSS3",
    "CRUD Architecture",
    "Relational Schema Design",
    "Apache Server",
  ];

  const coreLearnings = [
    "Enterprise MVC web architecture patterns and controller routing",
    "Relational database normalization, foreign-key constraints, and SQL joins",
    "Third-party REST API & SDK integration (Google Maps JavaScript API)",
    "Production debugging, error handling, and collaborative software delivery",
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-[var(--text-strong)] border-t border-slate-200/80 dark:border-white/5 overflow-hidden transition-colors duration-200"
    >
      {/* Dynamic Ambient Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200/70 dark:border-white/5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>INDUSTRY TRACK RECORD · SOFTWARE DEVELOPMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-space-grotesk text-slate-900 dark:text-white tracking-tight">
              Work Experience.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Enterprise software development internship delivering production web applications and relational database systems.
          </p>
        </div>

        {/* DOMINANT INDUSTRY EXPERIENCE MASTER CARD */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-3xl bg-white/95 dark:bg-[#0c0f18]/90 border border-slate-200/90 dark:border-white/10 hover:border-blue-500/50 p-6 sm:p-9 shadow-xl dark:shadow-2xl transition-all duration-300 space-y-8 backdrop-blur-xl overflow-hidden"
        >
          {/* Interactive Cursor Spotlight Glow */}
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 70%)`,
            }}
          />

          {/* Master Card Top: DOMINANT COMPANY HERO BLOCK */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-2xl sm:text-3xl">🏢</span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/25">
                  {exp.companyType}
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                  ★ {exp.badge}
                </span>
              </div>

              {/* Dominant Company Name (Eye Catcher #1) */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-space-grotesk tracking-tight text-slate-900 dark:text-white leading-tight">
                {exp.company}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-600 dark:text-zinc-300">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  💼 {exp.role}
                </span>
                <span>•</span>
                <span>📅 {exp.period}</span>
                <span>•</span>
                <span>📍 {exp.location}</span>
              </div>
            </div>

            {/* Direct Certificate Link CTA */}
            {exp.certificateUrl && (
              <div className="shrink-0">
                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-mono font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 cursor-pointer"
                >
                  <span>View Verified Certificate</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Executive Overview Narrative */}
          <div className="relative z-10 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
            {exp.summary}
          </div>

          {/* KEY ACHIEVEMENTS & IMPACT TILES */}
          <div className="relative z-10 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold flex items-center gap-1.5">
              <span>🏆</span>
              <span>Key Achievements & Deliverables During Internship</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {impactAchievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 space-y-1.5 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{ach.icon}</span>
                    <span className="text-xs font-mono font-black text-blue-600 dark:text-blue-400">
                      {ach.metric}
                    </span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {ach.label}
                  </h5>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS DELIVERED GRID (Dominantly Showcasing the 4 Assigned Systems) */}
          <div className="relative z-10 space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold flex items-center gap-1.5">
                <span>💻</span>
                <span>Production Projects & Modules Engineered</span>
              </h4>
              <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                4 End-to-End Enterprise Applications
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsDelivered.map((proj) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 hover:border-blue-500/40 transition-all space-y-3.5 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{proj.icon}</span>
                        <h5 className="text-base font-bold text-slate-900 dark:text-white">
                          {proj.title}
                        </h5>
                      </div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${proj.accent}`}>
                        {proj.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="space-y-1 pt-1">
                      {proj.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-zinc-300">
                          <span className="text-blue-500 font-bold">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-white/5">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNOLOGIES WORKED ON (Interactive Stack Ecosystem) */}
          <div className="relative z-10 space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold flex items-center gap-1.5">
              <span>⚡</span>
              <span>Technologies & Engineering Stack Applied</span>
            </h4>

            <div className="flex flex-wrap gap-2">
              {technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/10 shadow-2xs hover:border-blue-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CORE ENGINEERING LEARNINGS */}
          <div className="relative z-10 space-y-3 pt-2 border-t border-slate-200/70 dark:border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold flex items-center gap-1.5">
              <span>🎯</span>
              <span>Practical Software Engineering Takeaways</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {coreLearnings.map((learning, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 text-xs text-slate-700 dark:text-zinc-300 flex items-center gap-2.5 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{learning}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
