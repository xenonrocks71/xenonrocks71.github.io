"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
  const pillars = [
    {
      id: "architecture",
      icon: "⚡",
      title: "Software Engineering",
      badge: "ARCHITECTURE",
      accent: "text-blue-700 dark:text-blue-400 bg-blue-500/15 border-blue-500/30",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/85 light-card-blue",
      borderTheme: "border-slate-200/90 dark:border-white/10 hover:border-blue-500/50 hover:shadow-blue-500/10",
      glowBg: "bg-blue-500/20 dark:bg-blue-500/10",
      intention:
        "Designing modular backend services, clean API contracts, and reliable relational schemas built for long-term maintainability.",
      tags: ["Modular Architecture", "FastAPI & Next.js", "PostgreSQL"],
    },
    {
      id: "dsa",
      icon: "📐",
      title: "Algorithmic Rigor",
      badge: "PROBLEM SOLVING",
      accent: "text-violet-700 dark:text-violet-400 bg-violet-500/15 border-violet-500/30",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/85 light-card-violet",
      borderTheme: "border-slate-200/90 dark:border-white/10 hover:border-violet-500/50 hover:shadow-violet-500/10",
      glowBg: "bg-violet-500/20 dark:bg-violet-500/10",
      intention:
        "Applying core data structures and algorithmic depth in C++ to write efficient, time- and space-optimized solutions.",
      tags: ["DSA in C++", "Graph Traversal", "O(log N) Optimization"],
    },
    {
      id: "genai",
      icon: "🧠",
      title: "GenAI Applications",
      badge: "AI ENGINEERING",
      accent: "text-emerald-700 dark:text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/85 light-card-emerald",
      borderTheme: "border-slate-200/90 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-emerald-500/10",
      glowBg: "bg-emerald-500/20 dark:bg-emerald-500/10",
      intention:
        "Building practical RAG pipelines with dense vector embeddings in ChromaDB and context-grounded LLM synthesis.",
      tags: ["RAG Pipelines", "ChromaDB", "LangChain & Gemini"],
    },
    {
      id: "realtime",
      icon: "🌐",
      title: "Real-Time Systems",
      badge: "EVENT-DRIVEN",
      accent: "text-amber-700 dark:text-amber-400 bg-amber-500/15 border-amber-500/30",
      cardBg: "bg-white/95 dark:bg-[#0c0f18]/85 light-card-amber",
      borderTheme: "border-slate-200/90 dark:border-white/10 hover:border-amber-500/50 hover:shadow-amber-500/10",
      glowBg: "bg-amber-500/20 dark:bg-amber-500/10",
      intention:
        "Constructing low-latency WebSocket communication layers, Redis Pub/Sub message brokers, and synchronized state.",
      tags: ["WebSockets", "Redis Pub/Sub", "Reactive State"],
    },
  ];

  // Strictly ONLY B.Tech and Diploma — NO SSC / 10th grade
  const educationDetails = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
      duration: "2024 – 2027",
      score: "7.71 / 10 CGPA",
      status: "Active Undergrad",
      location: "Lonere, Maharashtra",
      accent: "from-blue-500 to-indigo-500",
      badgeBorder: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Jalgaon",
      duration: "2021 – 2023",
      score: "85.09% Aggregate",
      status: "First Class Distinction",
      location: "Jalgaon, Maharashtra",
      accent: "from-cyan-500 to-teal-500",
      badgeBorder: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative border-t border-slate-200/80 dark:border-white/5 bg-transparent transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-Column Responsive Layout: Left (Textual Summary + Education) | Right (4 Focus Boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Textual Summary + Embedded Education */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>PROFILE & BACKGROUND</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-space-grotesk text-slate-900 dark:text-white tracking-tight">
                About Me
              </h2>
            </div>

            {/* Narrative Paragraphs (Matching Template Style) */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
              <p>
                I am a{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Software Engineer & Problem Solver
                </strong>{" "}
                focused on building scalable backend architectures, high-performance web systems, and practical AI/GenAI-powered applications.
              </p>

              <p>
                On the{" "}
                <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                  Backend & Systems
                </strong>{" "}
                front, I engineer reliable web applications using{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">Next.js</strong>,{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">React</strong>, and{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">TypeScript</strong>, backed by resilient{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">FastAPI</strong> and{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">Python / Node.js</strong> services. I prioritize low-latency{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">WebSockets</strong> for real-time document and activity sync, distributed message queues, and ACID-compliant relational modeling with{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">PostgreSQL & MySQL</strong>.
              </p>

              <p>
                On the{" "}
                <strong className="text-violet-600 dark:text-violet-400 font-semibold">
                  Problem Solving & DSA
                </strong>{" "}
                front, I have forged strong algorithmic depth through rigorous practice in{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">C++</strong>, focusing on graph traversal, recursion, and optimized time/space complexity fundamentals.
              </p>

              <p>
                On the{" "}
                <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  AI Engineering
                </strong>{" "}
                front, I build Retrieval-Augmented Generation (
                <strong className="text-slate-900 dark:text-white font-semibold">RAG</strong>) pipelines using{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">LangChain</strong>, dense vector embeddings in{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">ChromaDB</strong>, and context-grounded LLM synthesis across cloud Gemini and local models.
              </p>
            </div>

            {/* EMBEDDED EDUCATIONAL DETAILS (Directly Inside Textual Flow - No Separate Section) */}
            <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <span>🎓</span>
                  <span>Education & Academic Credentials</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                  Engineering Track
                </span>
              </div>

              {/* Dominant Education Cards */}
              <div className="space-y-3">
                {educationDetails.map((edu, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl p-4 sm:p-4.5 bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 hover:border-blue-500/40 transition-all shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:-translate-y-0.5"
                  >
                    <div className="space-y-1">
                      {/* University / College Name Dominant */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {edu.institution}
                        </h4>
                        <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${edu.badgeBorder}`}>
                          {edu.status}
                        </span>
                      </div>

                      {/* Course / Degree & Location */}
                      <p className="text-xs text-slate-600 dark:text-zinc-300 font-medium">
                        {edu.degree} · <span className="font-mono text-slate-500 dark:text-zinc-400">{edu.duration}</span>
                      </p>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                        📍 {edu.location}
                      </p>
                    </div>

                    {/* CGPA / Percentage Pill */}
                    <div className="shrink-0 text-left sm:text-right">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">
                        Score
                      </span>
                      <span className={`text-base sm:text-lg font-black font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r ${edu.accent}`}>
                        {edu.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 4 Focus Boxes (Stacked Vertically) */}
          <div className="lg:col-span-5 space-y-4 pt-2 lg:pt-0">
            {pillars.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-2xl ${item.cardBg} border ${item.borderTheme} p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-3 hover:-translate-y-1 backdrop-blur-md overflow-hidden`}
              >
                {/* Subtle Corner Glow */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full ${item.glowBg} blur-2xl pointer-events-none -mr-8 -mt-8 opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                {/* Card Top: Icon + Title + Badge */}
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border font-semibold ${item.accent}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {item.intention}
                  </p>
                </div>

                {/* Tech Pills */}
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
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
