"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface EducationEntry {
  stepNum: string;
  stepLabel: string;
  status: string;
  year: string;
  title: string;
  institution: string;
  institutionType: string;
  location: string;
  score: string;
  scoreType: string;
  scorePercent: number;
  scoreAccent: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  pillBadge: string;
  logoUrl?: string;
  websiteUrl?: string;
  description: string;
  honors: string[];
  skillsGained: string[];
  keyCourses: string[];
  cardBg: string;
  metricBg: string;
}

export function About() {
  const [selectedDegree, setSelectedDegree] = useState<EducationEntry | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const pillars = [
    {
      id: "architecture",
      icon: "⚡",
      title: "Software Engineering",
      badge: "Architecture",
      accent: "text-blue-700 dark:text-blue-400 bg-blue-500/15 border-blue-500/30",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/85 light-card-blue",
      borderTheme: "border-blue-200/90 dark:border-white/10 hover:border-blue-500/50 hover:shadow-blue-500/10",
      glowBg: "bg-blue-500/20 dark:bg-blue-500/10",
      intention:
        "Designing modular backend services, clean API contracts, and reliable relational schemas built for long-term maintainability.",
      tags: ["Modular Architecture", "FastAPI & Next.js", "PostgreSQL"],
    },
    {
      id: "dsa",
      icon: "📐",
      title: "Algorithmic Rigor",
      badge: "Problem Solving",
      accent: "text-violet-700 dark:text-violet-400 bg-violet-500/15 border-violet-500/30",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/85 light-card-violet",
      borderTheme: "border-violet-200/90 dark:border-white/10 hover:border-violet-500/50 hover:shadow-violet-500/10",
      glowBg: "bg-violet-500/20 dark:bg-violet-500/10",
      intention:
        "Applying core data structures and algorithmic depth in C++ to write efficient, time- and space-optimized solutions.",
      tags: ["DSA in C++", "Graph Traversal", "O(log N) Optimization"],
    },
    {
      id: "genai",
      icon: "🧠",
      title: "GenAI Applications",
      badge: "AI Engineering",
      accent: "text-emerald-700 dark:text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/85 light-card-emerald",
      borderTheme: "border-emerald-200/90 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-emerald-500/10",
      glowBg: "bg-emerald-500/20 dark:bg-emerald-500/10",
      intention:
        "Building practical RAG pipelines with dense vector embeddings in ChromaDB and context-grounded LLM synthesis.",
      tags: ["RAG Pipelines", "ChromaDB", "LangChain & Gemini"],
    },
    {
      id: "realtime",
      icon: "🌐",
      title: "Real-Time Systems",
      badge: "Event-Driven",
      accent: "text-amber-700 dark:text-amber-400 bg-amber-500/15 border-amber-500/30",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/85 light-card-amber",
      borderTheme: "border-amber-200/90 dark:border-white/10 hover:border-amber-500/50 hover:shadow-amber-500/10",
      glowBg: "bg-amber-500/20 dark:bg-amber-500/10",
      intention:
        "Constructing low-latency WebSocket communication layers, Redis Pub/Sub message brokers, and synchronized state.",
      tags: ["WebSockets", "Redis Pub/Sub", "Reactive State"],
    },
  ];

  // Strictly ONLY B.Tech and Diploma — NO SSC / 10th grade
  const educationList: EducationEntry[] = [
    {
      stepNum: "01",
      stepLabel: "CURRENT DEGREE",
      status: "Active Undergrad",
      year: "2024 – 2027",
      title: "B.Tech in Computer Engineering",
      institution: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
      institutionType: "State Technological University of Maharashtra",
      location: "Lonere, Maharashtra",
      score: "7.71 / 10",
      scoreType: "CGPA",
      scorePercent: 77.1,
      scoreAccent: "from-blue-500 via-indigo-500 to-cyan-400",
      accentColor: "rgb(59, 130, 246)",
      glowColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "hover:border-blue-500/50 hover:shadow-blue-500/10",
      pillBadge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25",
      logoUrl: "/portfolio-content/images/achievements/dbatu.jpeg",
      websiteUrl: "https://dbatu.ac.in/",
      description:
        "Deepening computer science capabilities across scalable backend systems, algorithmic rigor in C++, distributed architectures, and modern GenAI/RAG pipelines.",
      honors: [
        "2nd Prize — ACES Project Competition (2024)",
        "Technical Hackathon Organizer at DBATU (2024)",
      ],
      skillsGained: ["System Design", "DSA in C++", "FastAPI & Next.js", "RAG & GenAI", "WebSockets"],
      keyCourses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering",
      ],
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-blue",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-blue",
    },
    {
      stepNum: "02",
      stepLabel: "TECHNICAL DIPLOMA",
      status: "First Class Distinction",
      year: "2021 – 2023",
      title: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Jalgaon",
      institutionType: "Directorate of Technical Education (DTE Maharashtra)",
      location: "Jalgaon, Maharashtra",
      score: "85.09%",
      scoreType: "Aggregate",
      scorePercent: 85.1,
      scoreAccent: "from-cyan-500 via-teal-500 to-emerald-400",
      accentColor: "rgb(6, 182, 212)",
      glowColor: "rgba(6, 182, 212, 0.15)",
      borderColor: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
      pillBadge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25",
      logoUrl: "/portfolio-content/images/achievements/gpja.jpeg",
      websiteUrl: "http://gpjalgaon.org.in/",
      description:
        "Built core programming fundamentals through hands-on system building, competitive SQL querying, Java/Android development, and winning state-level technical exhibitions.",
      honors: [
        "1st Prize — State-Level Project Exhibition (Atten, 2023)",
        "1st Prize — State-Level SQL Query Competition (2022)",
      ],
      skillsGained: ["C & C++ Systems", "Java & Android", "Relational SQL", "OOP Foundations"],
      keyCourses: [
        "Object Oriented Programming with C++",
        "Relational Database Management",
        "Java Programming",
        "Data Structures using C",
        "Client Side Scripting",
      ],
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-cyan",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-cyan",
    },
  ];

  return (
    <section
      id="about"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative border-t border-slate-200/80 dark:border-white/5 bg-transparent transition-colors duration-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-200/70 dark:border-white/5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>PROFILE & ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-space-grotesk text-slate-900 dark:text-white tracking-tight">
              About Me.
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            Final-year Computer Engineering undergrad building robust backend services, algorithmic problem-solving in C++, and AI/RAG-driven applications.
          </p>
        </div>

        {/* 4 Core Focus Strengths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl ${item.cardBg} border ${item.borderTheme} p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-3 hover:-translate-y-1 backdrop-blur-md overflow-hidden`}
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-full ${item.glowBg} blur-2xl pointer-events-none -mr-8 -mt-8 opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              <div className="space-y-2.5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border font-semibold ${item.accent}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.intention}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 relative z-10 border-t border-slate-200/60 dark:border-white/5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/50 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PROMINENT EDUCATION SUBSECTION */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <span>🎓</span>
                <span>ACADEMIC BACKGROUND</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-space-grotesk tracking-tight text-slate-900 dark:text-white">
                Formal Computer Engineering Education.
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
              Verified Technical Credentials · Maharashtra
            </span>
          </div>

          {/* 2 Dominant Cards: DBATU & GP Jalgaon */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <EducationCockpitCard
                key={edu.stepNum}
                card={edu}
                idx={idx}
                isHovered={hoveredIdx === idx}
                onHover={() => setHoveredIdx(idx)}
                onLeave={() => setHoveredIdx(null)}
                onSelect={() => setSelectedDegree(edu)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Modal / Bottom Sheet on Click */}
      <AnimatePresence>
        {selectedDegree && (
          <EducationDetailModal
            degree={selectedDegree}
            onClose={() => setSelectedDegree(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// ==========================================
// PROMINENT EDUCATION COCKPIT CARD
// ==========================================

interface EducationCockpitCardProps {
  card: EducationEntry;
  idx: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
}

function EducationCockpitCard({
  card,
  isHovered,
  onHover,
  onLeave,
  onSelect,
}: EducationCockpitCardProps) {
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

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (circumference * card.scorePercent) / 100;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-3xl ${card.cardBg} border border-slate-200/90 dark:border-white/10 ${card.borderColor} p-6 sm:p-7 shadow-lg dark:shadow-2xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 hover:-translate-y-1.5 backdrop-blur-xl overflow-hidden`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${card.glowColor}, transparent 70%)`,
        }}
      />

      <div className="space-y-4 relative z-10">
        {/* Step Indicator & Status Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/10 text-slate-800 dark:text-white">
              {card.stepNum}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
              {card.stepLabel}
            </span>
          </div>

          <span
            className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${card.pillBadge}`}
          >
            ★ {card.status}
          </span>
        </div>

        {/* DOMINANT HERO INSTITUTION BLOCK - EYE CATCHER #1 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-2.5 group-hover:border-blue-500/40 transition-all">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {card.logoUrl ? (
                <div className="relative w-5 h-5 rounded-full overflow-hidden border border-blue-500/30 shrink-0">
                  <Image
                    src={card.logoUrl}
                    alt={card.institution}
                    fill
                    sizes="20px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <span className="text-xs">🏛️</span>
              )}
              <span>UNIVERSITY / INSTITUTION</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 font-medium">
              📍 {card.location}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-space-grotesk tracking-tight text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {card.institution}
          </h3>

          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-bold">
              <span>🎓</span>
              <span>{card.title}</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-zinc-400 font-medium">
              • {card.institutionType}
            </span>
          </div>
        </div>

        {/* Circular Gauge Score Telemetry */}
        <div
          className={`p-3.5 rounded-2xl ${card.metricBg} border flex items-center justify-between shadow-xs`}
        >
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
              {card.scoreType} ACHIEVEMENT
            </span>
            <span
              className={`text-2xl sm:text-3xl font-black font-space-grotesk tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${card.scoreAccent}`}
            >
              {card.score}
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 block">
              Session: {card.year}
            </span>
          </div>

          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 68 68">
              <circle
                cx="34"
                cy="34"
                r={radius}
                className="stroke-slate-200 dark:stroke-white/10"
                strokeWidth="5"
                fill="transparent"
              />
              <motion.circle
                cx="34"
                cy="34"
                r={radius}
                stroke={card.accentColor}
                strokeWidth="5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-white">
                {Math.round(card.scorePercent)}%
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
          {card.description}
        </p>

        {/* Honors & Accolades */}
        {card.honors.length > 0 && (
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold block">
              Verified Honors:
            </span>
            <div className="space-y-1">
              {card.honors.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-zinc-200"
                >
                  <span className="text-amber-500 font-bold text-xs">★</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: Skills & View Syllabus Button */}
      <div className="pt-3 border-t border-slate-200/70 dark:border-white/10 space-y-3 relative z-10">
        <div className="flex flex-wrap gap-1.5">
          {card.skillsGained.map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/50 dark:border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>

        <button
          onClick={onSelect}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-xs font-mono font-semibold text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>View Curriculum & Details</span>
          <span className="text-blue-500 dark:text-blue-400">→</span>
        </button>
      </div>
    </motion.div>
  );
}

// ==========================================
// EDUCATION DETAIL MODAL
// ==========================================

function EducationDetailModal({
  degree,
  onClose,
}: {
  degree: EducationEntry;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#0d111a] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Top Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              {degree.stepLabel} · {degree.year}
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${degree.pillBadge}`}
            >
              {degree.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-space-grotesk text-slate-900 dark:text-white">
            {degree.institution}
          </h3>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {degree.title}
          </p>
          <p className="text-xs font-mono text-slate-500 dark:text-zinc-400">
            📍 {degree.location} • {degree.institutionType}
          </p>
        </div>

        {/* Score & Telemetry */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block">
              Graduation Record / Evaluation
            </span>
            <span
              className={`text-3xl font-black font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r ${degree.scoreAccent}`}
            >
              {degree.score}
            </span>
          </div>
          {degree.websiteUrl && (
            <a
              href={degree.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Visit Portal</span>
              <span>↗</span>
            </a>
          )}
        </div>

        {/* Key Coursework */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold">
            Core Curriculum & Coursework
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {degree.keyCourses.map((course, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-xs font-medium text-slate-800 dark:text-zinc-200 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Accolades */}
        {degree.honors.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold">
              Key Recognitions & Awards
            </h4>
            <div className="space-y-2">
              {degree.honors.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-slate-800 dark:text-zinc-200 flex items-center gap-2.5"
                >
                  <span className="text-amber-500 font-bold text-sm">★</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-slate-900 text-xs font-mono font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
