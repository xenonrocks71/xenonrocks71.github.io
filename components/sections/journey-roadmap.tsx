"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journeyMilestones } from "@/lib/data";

interface MilestoneCardData {
  stepNum: string;
  stepLabel: string;
  status: string;
  year: string;
  title: string;
  institution: string;
  institutionType?: string;
  location: string;
  score: string;
  scoreType: string;
  scorePercent: number; // For circular SVG gauge (0 - 100)
  scoreAccent: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  pillBadge: string;
  description: string;
  honors: string[];
  skillsGained: string[];
  keyCourses: string[];
  cardBg: string;
  metricBg: string;
}

export const JourneyRoadmap: React.FC = () => {
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const cardsData: MilestoneCardData[] = [
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
      borderColor: "hover:border-blue-500/50",
      pillBadge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25",
      description:
        "Deepening engineering capabilities across scalable backend systems, algorithmic rigor in C++, distributed state, and modern GenAI/RAG pipelines.",
      honors: [
        "2nd Prize — ACES Project Competition (2024)",
        "Technical Hackathon Organizer at DBATU (2024)",
      ],
      skillsGained: ["System Design", "DSA in C++", "FastAPI & Next.js", "RAG & GenAI", "WebSockets"],
      keyCourses: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Software Engineering"],
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-blue",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-blue",
    },
    {
      stepNum: "02",
      stepLabel: "POLYTECHNIC",
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
      borderColor: "hover:border-cyan-500/50",
      pillBadge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25",
      description:
        "Built concrete programming fundamentals through hands-on system building, competitive SQL querying, Java/Android development, and winning state-level exhibitions.",
      honors: [
        "1st Prize — State-Level Project Exhibition (Atten, 2023)",
        "1st Prize — State-Level SQL Query Competition (2022)",
      ],
      skillsGained: ["C & C++ Systems", "Java & Android", "Relational SQL", "OOP Foundations"],
      keyCourses: ["Object Oriented Programming with C++", "Relational Database Management", "Java Programming", "Data Structures using C", "Client Side Scripting"],
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-cyan",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-cyan",
    },
    {
      stepNum: "03",
      stepLabel: "SECONDARY SCHOOL",
      status: "Academic Distinction",
      year: "2020",
      title: "Secondary School Certificate (SSC)",
      institution: "N. P. Patil Vidyalaya",
      institutionType: "Maharashtra State Board of Secondary Education",
      location: "Jalgaon, Maharashtra",
      score: "92.40%",
      scoreType: "Percentage",
      scorePercent: 92.4,
      scoreAccent: "from-violet-500 via-purple-500 to-fuchsia-400",
      accentColor: "rgb(139, 92, 246)",
      glowColor: "rgba(139, 92, 246, 0.15)",
      borderColor: "hover:border-violet-500/50",
      pillBadge: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/25",
      description:
        "Graduated with top academic honors, establishing the strong mathematical discipline, analytical mindset, and curiosity that inspired a career in computer engineering.",
      honors: [
        "Top Honors in Mathematics & Quantitative Sciences",
        "Consistent Academic Merit Standing",
      ],
      skillsGained: ["Advanced Mathematics", "Physical Sciences", "Quantitative Analysis"],
      keyCourses: ["Mathematics Part I & II (Algebra & Geometry)", "Science & Technology", "Logical Reasoning"],
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/90 light-card-violet",
      metricBg: "bg-slate-50/90 border-slate-200/70 dark:bg-white/[0.03] dark:border-white/5 light-metric-violet",
    },
  ];

  return (
    <section
      id="education"
      className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-12 bg-transparent text-[var(--text-strong)] overflow-hidden border-t border-slate-200/80 dark:border-white/5 transition-colors duration-200"
    >
      {/* Anchor alias for #journey */}
      <div id="journey" className="absolute -top-24 pointer-events-none" />

      {/* Dynamic Ambient Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-purple-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <span>ACADEMIC JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Education.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Undergraduate degree, polytechnic diploma, and secondary school foundations.
          </p>
        </div>

        {/* Futuristic Laser Data-Rail (Replaces the vertical rod with high-tech animated horizontal laser flow) */}
        <div className="hidden md:block relative p-3 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-xs light-rail">
          <div className="flex items-center justify-between px-4 text-xs font-mono font-semibold">
            {cardsData.map((stage, idx) => (
              <React.Fragment key={stage.stepNum}>
                <button
                  type="button"
                  onClick={() => setActiveModalIdx(idx)}
                  className={`group flex items-center gap-2.5 transition-all text-left ${
                    hoveredIdx === idx
                      ? "text-slate-900 dark:text-white scale-105"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === 0
                        ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                        : idx === 1
                        ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                        : "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                    }`}
                  />
                  <span>
                    <strong className="text-slate-900 dark:text-white">{stage.stepNum}</strong> · {idx === 0 ? "DBATU University" : idx === 1 ? "Govt. Polytechnic" : "N. P. Patil Vidyalaya"}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-700 dark:text-zinc-300">
                    {stage.score}
                  </span>
                </button>

                {idx < cardsData.length - 1 && (
                  <div className="flex-1 mx-4 relative h-[2px] bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
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

        {/* 3 Interactive Hologram Milestone Cards (Single Desktop Row, Zero-Scroll Footprint) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardsData.map((card, idx) => (
            <SpotlightCard
              key={card.stepNum}
              card={card}
              idx={idx}
              isHovered={hoveredIdx === idx}
              onHover={() => setHoveredIdx(idx)}
              onLeave={() => setHoveredIdx(null)}
              onOpenModal={() => setActiveModalIdx(idx)}
            />
          ))}
        </div>
      </div>

      {/* Transcript & Coursework Modal (Detailed inspection with zero page height expansion) */}
      <AnimatePresence>
        {activeModalIdx !== null && (
          <TranscriptModal
            card={cardsData[activeModalIdx]}
            onClose={() => setActiveModalIdx(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// ==========================================
// SPOTLIGHT CARD COMPONENT WITH CIRCULAR GAUGE
// ==========================================

interface SpotlightCardProps {
  card: MilestoneCardData;
  idx: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onOpenModal: () => void;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  card,
  idx,
  isHovered,
  onHover,
  onLeave,
  onOpenModal,
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

  // Circular gauge math (radius 28 -> circumference ~175.9)
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * card.scorePercent) / 100;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.1 }}
      className={`group relative rounded-3xl ${card.cardBg} border border-slate-200/90 dark:border-white/10 ${card.borderColor} p-6 sm:p-7 shadow-lg dark:shadow-2xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 backdrop-blur-xl overflow-hidden`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${card.glowColor}, transparent 70%)`,
        }}
      />

      {/* Card Content Top */}
      <div className="space-y-4 relative z-10">
        {/* Step Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/10 text-slate-800 dark:text-white">
              {card.stepNum}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
              {card.stepLabel}
            </span>
          </div>

          <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${card.pillBadge}`}>
            {card.status}
          </span>
        </div>

        {/* DOMINANT HERO INSTITUTION BLOCK - EYE CATCHER #1 */}
        <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-2 group-hover:border-blue-500/40 transition-all">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span className="text-xs">🏛️</span>
              <span>ACADEMIC INSTITUTION</span>
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
            {card.institutionType && (
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-zinc-400 font-medium">
                • {card.institutionType}
              </span>
            )}
          </div>
        </div>

        {/* Circular Gauge Score Widget */}
        <div className={`p-3.5 rounded-2xl ${card.metricBg} border flex items-center justify-between shadow-xs`}>
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block">
              {card.scoreType} ACHIEVEMENT
            </span>
            <span className={`text-2xl sm:text-3xl font-extrabold font-space-grotesk tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${card.scoreAccent}`}>
              {card.score}
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 block">
              Session: {card.year}
            </span>
          </div>

          {/* Precision SVG Ring Gauge */}
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 68 68">
              {/* Background Ring */}
              <circle
                cx="34"
                cy="34"
                r={radius}
                className="stroke-slate-200 dark:stroke-white/10"
                strokeWidth="5"
                fill="transparent"
              />
              {/* Progress Ring with Glow */}
              <motion.circle
                cx="34"
                cy="34"
                r={radius}
                stroke={card.accentColor}
                strokeWidth="5"
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
              {Math.round(card.scorePercent)}%
            </span>
          </div>
        </div>

        {/* Concise Description */}
        <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
          {card.description}
        </p>

        {/* Honors Highlights */}
        {card.honors && card.honors.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-semibold block">
              Honors & Recognition
            </span>
            <div className="space-y-1">
              {card.honors.map((h, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-zinc-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="truncate">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: Skills & Inspect Modal Trigger */}
      <div className="pt-3 border-t border-slate-100 dark:border-white/5 relative z-10 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {card.skillsGained.slice(0, 2).map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-zinc-300 border border-slate-200/80 dark:border-white/5"
            >
              {skill}
            </span>
          ))}
          {card.skillsGained.length > 2 && (
            <span className="text-[9px] font-mono text-slate-400 dark:text-zinc-500 self-center pl-1 font-semibold">
              +{card.skillsGained.length - 2}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onOpenModal}
          className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 shrink-0 transition-colors"
        >
          <span>Deep Dive</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </motion.div>
  );
};

// ==========================================
// TRANSCRIPT & COURSEWORK MODAL
// ==========================================

interface TranscriptModalProps {
  card: MilestoneCardData;
  onClose: () => void;
}

const TranscriptModal: React.FC<TranscriptModalProps> = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-slate-900 dark:text-white"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
                {card.stepNum} · {card.stepLabel}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                {card.year}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 pt-1">
              <span>🏛️ ACADEMIC INSTITUTION</span>
              <span>•</span>
              <span>{card.location}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-space-grotesk tracking-tight text-slate-900 dark:text-white leading-tight">
              {card.institution}
            </h3>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-bold">
              <span>🎓</span>
              <span>{card.title}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-500 dark:text-zinc-300 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Score & Standing Banner */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-zinc-400 block">
              Official Standing / Score
            </span>
            <span className={`text-2xl font-extrabold font-space-grotesk tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${card.scoreAccent}`}>
              {card.score}
            </span>
          </div>
          <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${card.pillBadge}`}>
            {card.status}
          </span>
        </div>

        {/* Key Coursework & Curricular Foundations */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
            Key Coursework & Curriculum
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {card.keyCourses.map((course) => (
              <span
                key={course}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-zinc-200 border border-slate-200/60 dark:border-white/5"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Honors & Milestones */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
            Honors & Achievements
          </h4>
          <div className="space-y-1.5">
            {card.honors.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies Acquired */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
            Competencies & Tooling
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {card.skillsGained.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Close Button */}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
          >
            Close Deep Dive
          </button>
        </div>
      </motion.div>
    </div>
  );
};

