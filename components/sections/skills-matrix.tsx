"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsGroups } from "@/lib/data";

/* ═══════════════════════════════════════════════════════
   CDN Icon Map — Devicon brand logos for verified tech
   ═══════════════════════════════════════════════════════ */
const CDN_ICONS: Record<string, string> = {
  // Programming / Languages (includes C, PHP)
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",

  // Software Development / Frameworks (includes Node.js, CodeIgniter)
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "CodeIgniter": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg",
  "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg",
  "WebSockets": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",

  // AI / GenAI (includes LangChain, RAG, Ollama, Gemini)
  "Generative AI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "RAG": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg",
  "LangChain": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Google Gemini API": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  "Ollama": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "ChromaDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

  // Databases
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "SQLAlchemy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
  "Database Design": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "Query Optimization": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",

  // CS Fundamentals
  "Data Structures & Algorithms": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg",
  "OOP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "DBMS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Operating Systems": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Computer Networks": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg",
  "System Design": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",

  // Tools & DevOps
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
};

/* ═══════════════════════════════════════════════════════
   Custom Accurate Vector Icons (LangGraph, Agentic AI, CodeIgniter)
   ═══════════════════════════════════════════════════════ */
const CUSTOM_ICONS: Record<string, React.ReactNode> = {
  // LangGraph: official multi-agent stateful graph orchestration
  "LangGraph": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="6" cy="12" r="3" fill="#22c55e" />
      <circle cx="18" cy="6.5" r="3" fill="#10b981" />
      <circle cx="18" cy="17.5" r="3" fill="#059669" />
      <path d="M8.8 10.8L15.2 7.8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.8 13.2L15.2 16.2" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 9.5V14.5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  ),

  // Agentic AI: autonomous intelligent agent neural core with tool loops
  "Agentic AI": (
    <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 2a4.5 4.5 0 0 1 4.5 4.5c0 1.8-1 3.3-2.5 4.1V12a2 2 0 0 1-2 2H10" />
      <circle cx="12" cy="6.5" r="1.5" fill="#a855f7" />
      <circle cx="5.5" cy="18" r="3" fill="#a855f7" fillOpacity="0.25" />
      <circle cx="18.5" cy="18" r="3" fill="#a855f7" fillOpacity="0.25" />
      <path d="M8.2 16.5L10.8 14h2.4l2.6 2.5" />
      <circle cx="5.5" cy="18" r="1.2" fill="#a855f7" />
      <circle cx="18.5" cy="18" r="1.2" fill="#a855f7" />
      <circle cx="12" cy="14" r="1.2" fill="#a855f7" />
    </svg>
  ),

  // CodeIgniter: official flame mark
  "CodeIgniter": (
    <svg viewBox="0 0 24 24" fill="#ee4326" className="w-full h-full">
      <path d="M12.015 0C10.74 3.015 8.1 4.8 5.76 7.605 3.39 10.455 2.4 13.62 3.12 17.115c.66 3.24 2.85 5.76 6.09 6.645 3.585.99 7.395-.045 9.795-2.73 2.565-2.88 3.045-6.84 1.155-10.2-1.395-2.475-3.81-4.08-5.325-6.525-.375-.615-.69-1.29-.825-1.995-.27-1.425.045-1.995-2.01-2.31zM11.97 7.02c1.785 2.505 4.545 4.14 5.34 7.29.585 2.325-.09 4.74-1.74 6.435-1.995 2.055-5.055 2.535-7.56 1.17-1.875-1.02-3.03-2.925-3.15-5.07-.15-2.685 1.2-4.995 2.955-6.885 1.2-1.29 2.76-2.22 4.155-2.94z" />
    </svg>
  ),
};

/* Category visual configuration */
interface CategoryMetadata {
  key: string;
  displayName: string;
  accent: string;
  glow: string;
  description: string;
  iconSvg: React.ReactNode;
}

const CATEGORY_METADATA: Record<string, CategoryMetadata> = {
  "Programming": {
    key: "Programming",
    displayName: "Languages",
    accent: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.35)",
    description: "Core computational dialects for algorithms, systems engineering, backend logic, and data.",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  "Software Development": {
    key: "Software Development",
    displayName: "Frameworks & Web",
    accent: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.35)",
    description: "Modern full-stack engines, asynchronous APIs, MVC frameworks, and real-time WebSockets.",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  "AI / GenAI": {
    key: "AI / GenAI",
    displayName: "AI & GenAI",
    accent: "#10b981",
    glow: "rgba(16, 185, 129, 0.35)",
    description: "Agentic AI workflows, LangGraph graphs, RAG pipelines, LangChain orchestration, and LLMs.",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  "Databases": {
    key: "Databases",
    displayName: "Databases",
    accent: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.35)",
    description: "ACID transactions, relational schemas, in-memory caching, and query optimization.",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  "CS Fundamentals": {
    key: "CS Fundamentals",
    displayName: "Core CS",
    accent: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.35)",
    description: "DSA problem solving, OOP paradigms, Operating Systems, Networks, and System Design.",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  "Tools": {
    key: "Tools",
    displayName: "Tools & DevOps",
    accent: "#0ea5e9",
    glow: "rgba(14, 165, 233, 0.35)",
    description: "Version control workflows, container virtualization, Linux environments, and API tooling.",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
};

/* Skill metadata for interactive inspection pills */
const SKILL_PROFILES: Record<string, { tag: string; level: string }> = {
  "C": { tag: "Pointers & Memory Architecture", level: "Foundation" },
  "C++": { tag: "High-Performance DSA & OOP", level: "Advanced" },
  "Python": { tag: "Async FastAPI & GenAI Pipelines", level: "Production" },
  "Java": { tag: "Enterprise OOP & Clean Coding", level: "Core" },
  "TypeScript": { tag: "Strict Types & React 19 Ecosystem", level: "Production" },
  "JavaScript": { tag: "ESNext Asynchronous Run-times", level: "Production" },
  "PHP": { tag: "Server-Side Scripting & Relational Web Apps", level: "Production" },
  "SQL": { tag: "Complex Joins & Analytical Views", level: "Award-Winning" },
  "React": { tag: "State Primitives & Component Systems", level: "Production" },
  "Next.js": { tag: "Server Components & App Router", level: "Production" },
  "FastAPI": { tag: "Async Workers & Connection Pools", level: "Production" },
  "Node.js": { tag: "Asynchronous JavaScript Engine & APIs", level: "Production" },
  "CodeIgniter": { tag: "Lightweight MVC PHP Framework & REST Endpoints", level: "Production" },
  "REST APIs": { tag: "OpenAPI Specs & Scalable Endpoints", level: "Production" },
  "WebSockets": { tag: "Real-time Pub/Sub & Heartbeat Mesh", level: "Production" },
  "Generative AI": { tag: "Prompt Engineering & Embedding Space", level: "Production" },
  "Agentic AI": { tag: "Autonomous Tool Calling, Multi-Agent Logic & Memory", level: "Advanced" },
  "RAG": { tag: "Dense Vector Similarity & Chunking", level: "Production" },
  "LangChain": { tag: "LCEL Chains & Multi-Agent Logic", level: "Production" },
  "LangGraph": { tag: "Cyclic Stateful Multi-Agent Workflows & Graph State", level: "Production" },
  "Google Gemini API": { tag: "Multimodal Structured Inference", level: "Production" },
  "Ollama": { tag: "Local Offline Model Serving", level: "Self-Hosted" },
  "ChromaDB": { tag: "Persistent High-Density Vector Stores", level: "Production" },
  "PostgreSQL": { tag: "ACID Concurrency & Row-Level Locking", level: "Production" },
  "MySQL": { tag: "Relational Indexing & Foreign Keys", level: "Core" },
  "Redis": { tag: "In-Memory Pub/Sub & Fast Key Caching", level: "Production" },
  "SQLAlchemy": { tag: "Async ORM & Declarative Models", level: "Production" },
  "Database Design": { tag: "3NF Normalization & Entity Diagrams", level: "Core" },
  "Query Optimization": { tag: "EXPLAIN ANALYZE & Indexing", level: "Award-Winning" },
  "Data Structures & Algorithms": { tag: "Trees, Graphs & Dynamic Programming", level: "Competitive" },
  "OOP": { tag: "Polymorphism, Design Patterns & SOLID", level: "Core" },
  "DBMS": { tag: "WAL, MVCC & Transaction Isolation", level: "Core" },
  "Operating Systems": { tag: "Threads, IPC & Memory Paging", level: "Core" },
  "Computer Networks": { tag: "TCP/IP, OSI, Sockets & Handshakes", level: "Core" },
  "System Design": { tag: "Load Balancing, Caching & Resilience", level: "Core" },
  "Git": { tag: "Feature Branching, Rebase & Interactive Log", level: "Daily Driver" },
  "GitHub": { tag: "Actions CI/CD & Open-Source Collaboration", level: "Daily Driver" },
  "Docker": { tag: "Multi-Stage Builds & Compose Stacks", level: "Production" },
  "Linux": { tag: "Shell Scripting & System Administration", level: "Daily Driver" },
  "Postman": { tag: "Automated Suite Tests & Mock Servers", level: "Production" },
};

/* ═══════════════════════════════════════════════════════
   Main Technical Skills & Ecosystem Component
   ═══════════════════════════════════════════════════════ */
export const SkillsMatrix: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Total skills calculation
  const totalSkills = useMemo(() => {
    return skillsGroups.reduce((acc, g) => acc + g.skills.length, 0);
  }, []);

  // Filtered categories
  const displayedGroups = useMemo(() => {
    if (selectedFilter === "All") return skillsGroups;
    return skillsGroups.filter((g) => g.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section
      id="skills"
      className="relative w-full py-10 sm:py-14 overflow-hidden select-none bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase
              border-slate-200/80 dark:border-white/10
              bg-white/80 dark:bg-white/[0.04]
              text-slate-800 dark:text-slate-200 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              SKILLS MATRIX
            </span>
            <span className="text-slate-400 dark:text-white/30">·</span>
            <span>{totalSkills} TECHNOLOGIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-space-grotesk"
          >
            Technical{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
              Skills.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300/80 leading-relaxed font-sans"
          >
            Core languages, modern frameworks, AI pipelines, databases, and computer systems.
          </motion.p>
        </div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none px-1"
        >
          <button
            onClick={() => setSelectedFilter("All")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition-all duration-300 cursor-pointer border ${
              selectedFilter === "All"
                ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25 font-bold"
                : "bg-white/70 dark:bg-white/[0.03] text-slate-700 dark:text-white/70 border-slate-200/80 dark:border-white/10 hover:border-blue-400 hover:text-slate-950 dark:hover:text-white"
            }`}
          >
            All Domains ({totalSkills})
          </button>

          {skillsGroups.map((group) => {
            const meta = CATEGORY_METADATA[group.category] || CATEGORY_METADATA["Programming"];
            const isSelected = selectedFilter === group.category;

            return (
              <button
                key={`tab-${group.category}`}
                onClick={() => setSelectedFilter(group.category)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "text-white font-bold shadow-md"
                    : "bg-white/70 dark:bg-white/[0.03] text-slate-700 dark:text-white/70 border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-950 dark:hover:text-white"
                }`}
                style={{
                  backgroundColor: isSelected ? meta.accent : undefined,
                  borderColor: isSelected ? meta.accent : undefined,
                  boxShadow: isSelected ? `0 4px 18px ${meta.glow}` : undefined,
                }}
              >
                <span className="w-3.5 h-3.5 flex items-center justify-center">{meta.iconSvg}</span>
                <span>{meta.displayName}</span>
                <span className="text-[10px] opacity-75">({group.skills.length})</span>
              </button>
            );
          })}
        </motion.div>

        {/* ── 6 Domain Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {displayedGroups.map((group, groupIdx) => {
              const meta = CATEGORY_METADATA[group.category] || CATEGORY_METADATA["Programming"];

              return (
                <motion.div
                  key={`card-${group.category}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
                  className="relative p-5 sm:p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 bg-white/75 dark:bg-[#0c1222]/90 border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 shadow-md hover:shadow-xl group"
                  style={{
                    boxShadow: `0 8px 30px ${meta.glow}`,
                  }}
                >
                  {/* Subtle top accent bar */}
                  <div
                    className="absolute top-0 left-6 right-6 h-1 rounded-b-md opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: meta.accent }}
                  />

                  {/* Header: Icon, Title, and Count */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md p-2 transition-transform group-hover:scale-105 duration-300"
                        style={{ backgroundColor: meta.accent }}
                      >
                        {meta.iconSvg}
                      </div>
                      <div>
                        <h3 className="font-space-grotesk font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                          {meta.displayName}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-white/50">
                          {group.skills.length} Technologies
                        </span>
                      </div>
                    </div>

                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        backgroundColor: `${meta.accent}15`,
                        color: meta.accent,
                      }}
                    >
                      {group.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mb-4 leading-relaxed">
                    {meta.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const customIcon = CUSTOM_ICONS[skill.name];
                      const iconUrl = CDN_ICONS[skill.name];
                      const isHovered = hoveredSkill === skill.name;
                      const profile = SKILL_PROFILES[skill.name] || {
                        tag: "Production Ready",
                        level: "Core",
                      };

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default ${
                            isHovered
                              ? "bg-white dark:bg-[#151d30] border-slate-300 dark:border-white/30 shadow-md scale-105 z-20"
                              : "bg-white/80 dark:bg-white/[0.04] border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20"
                          }`}
                          style={{
                            borderColor: isHovered ? skill.brandColor || meta.accent : undefined,
                            boxShadow: isHovered
                              ? `0 4px 14px ${skill.brandColor ? `${skill.brandColor}30` : meta.glow}`
                              : undefined,
                          }}
                        >
                          {/* Accurate Brand Icon */}
                          <div className="w-4 h-4 flex items-center justify-center shrink-0">
                            {customIcon ? (
                              customIcon
                            ) : iconUrl ? (
                              <img
                                src={iconUrl}
                                alt={skill.name}
                                className="w-3.5 h-3.5 object-contain"
                                loading="lazy"
                              />
                            ) : (
                              <span
                                className="text-[10px] font-bold font-mono"
                                style={{ color: skill.brandColor || meta.accent }}
                              >
                                {skill.name.slice(0, 2)}
                              </span>
                            )}
                          </div>

                          {/* Skill Name */}
                          <span className="font-space-grotesk font-semibold text-xs text-slate-800 dark:text-white/90">
                            {skill.name}
                          </span>

                          {/* ── Tooltip on Hover ── */}
                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-xl border border-slate-200/90 dark:border-white/15 bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-xl shadow-2xl z-50 pointer-events-none text-left"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-space-grotesk font-bold text-xs text-slate-900 dark:text-white truncate">
                                    {skill.name}
                                  </span>
                                  <span
                                    className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full shrink-0"
                                    style={{
                                      backgroundColor: `${skill.brandColor || meta.accent}20`,
                                      color: skill.brandColor || meta.accent,
                                    }}
                                  >
                                    {profile.level}
                                  </span>
                                </div>
                                <p className="text-[10px] text-slate-600 dark:text-white/70 font-sans leading-snug">
                                  {profile.tag}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── Decorative Footer Line ── */}
        <div className="flex items-center justify-center pt-14">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/15 to-transparent" />
          <div className="mx-3 text-slate-400 dark:text-white/30 text-xs font-mono">
            ✦ VERIFIED STACK &amp; CAPABILITIES ✦
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/15 to-transparent" />
        </div>
      </div>
    </section>
  );
};
