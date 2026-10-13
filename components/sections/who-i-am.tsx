"use client";

import React from "react";

export function WhoIAm() {
  const intentions = [
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
        "Designing modular backend services, clean API contracts, and reliable relational schemas built for maintainability.",
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
        "Constructing low-latency WebSocket communication layers, Redis Pub/Sub message brokers, and synchronized client state.",
      tags: ["WebSockets", "Redis Pub/Sub", "Reactive State"],
    },
  ];

  return (
    <section
      id="about"
      className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 relative border-t border-slate-200/80 dark:border-white/5 bg-transparent transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto space-y-7">
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>ENGINEERING PROFILE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About Me.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Focusing on scalable backend systems, algorithmic problem solving, and modern AI applications.
          </p>
        </div>

        {/* 4 Compact Intention Cards in a Single Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {intentions.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl ${item.cardBg} border ${item.borderTheme} p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-3 hover:-translate-y-1 backdrop-blur-md overflow-hidden`}
            >
              {/* Subtle Corner Glow */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-full ${item.glowBg} blur-2xl pointer-events-none -mr-8 -mt-8 opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              {/* Card Top: Icon + Badge */}
              <div className="space-y-2.5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border font-semibold ${item.accent}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Concise Intention Statement */}
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
                  {item.intention}
                </p>
              </div>

              {/* Card Bottom: Core Skill Tags */}
              <div className="pt-2 border-t border-slate-200/80 dark:border-white/5 relative z-10">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/90 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-400 border border-slate-200/80 dark:border-white/5 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

