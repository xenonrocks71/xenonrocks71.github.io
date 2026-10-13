"use client";

import React, { useState, useEffect } from "react";

interface RoadmapStep {
  step: string;
  title: string;
  badge: string;
  metric: string;
  tagline: string;
  description: string;
  rules: string[];
  tech: string[];
}

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: "01",
    title: "Contract-First API & Systems Architecture",
    badge: "Stage 01",
    metric: "Strict Schemas",
    tagline: "Define clear boundaries before writing a line of implementation.",
    description:
      "I prioritize non-blocking async architecture, Pydantic type safety, and clean OpenAPI specifications. Backend endpoints must fail fast with descriptive error envelopes rather than silent drops.",
    rules: [
      "Strict request/response contract validation at the gateway",
      "Asynchronous non-blocking I/O routines using FastAPI & Python coroutines",
      "Explicit idempotency keys for mutable operations"
    ],
    tech: ["FastAPI", "Python", "Pydantic", "OpenAPI", "REST"]
  },
  {
    step: "02",
    title: "Real-Time Event Pipelines & Pub/Sub",
    badge: "Stage 02",
    metric: "<45ms Fanout",
    tagline: "Eliminate polling overhead through persistent multiplexed channels.",
    description:
      "Engineered real-time synchronization in Tribely using Redis Pub/Sub message brokers and WebSocket connection lifecycles. Every connection is tracked, heartbeated, and gracefully reconnected.",
    rules: [
      "In-memory Redis message queues for instant broadcast fanout",
      "Resilient WebSocket heartbeat ping/pong protocol with automatic reconnection backoff",
      "Deduplication layer to avoid duplicate message deliveries"
    ],
    tech: ["WebSockets", "Redis Pub/Sub", "Asyncio", "FastAPI"]
  },
  {
    step: "03",
    title: "Algorithmic Rigor & Data Structures",
    badge: "Stage 03",
    metric: "O(log N) Rigor",
    tagline: "Systems scale predictably when algorithmic complexity is strictly bounded.",
    description:
      "Daily problem solving in C++ across graph traversals, dynamic programming, and memory-aware data structures. I dissect time and space bottlenecks before they hit production.",
    rules: [
      "Optimal spatial and temporal trade-offs evaluated via first principles",
      "Cache locality and contiguous memory structures over pointer chasing",
      "Disciplined competitive programming practice on LeetCode & CodeChef"
    ],
    tech: ["C++", "STL", "DSA", "Problem Solving", "Graph Algorithms"]
  },
  {
    step: "04",
    title: "Normalized Relational Storage & Caching",
    badge: "Stage 04",
    metric: "ACID Guaranteed",
    tagline: "Data integrity is non-negotiable; caching is a deliberate design layer.",
    description:
      "Designing normalized PostgreSQL schemas with strict foreign key constraints, connection pooling, and multi-tier Redis caching to protect persistence layers under concurrent traffic.",
    rules: [
      "Third Normal Form (3NF) relational models for canonical truth",
      "Indexed query profiling with EXPLAIN ANALYZE to eliminate sequential table scans",
      "Cache-aside pattern with defined TTL invalidation"
    ],
    tech: ["PostgreSQL", "SQLAlchemy", "Redis Caching", "Docker"]
  },
  {
    step: "05",
    title: "Fluid Edge UI & Optimistic Mutation",
    badge: "Stage 05",
    metric: "Sub-100ms FCP",
    tagline: "The fastest interface is the one that responds before the server returns.",
    description:
      "Crafting type-safe user interfaces with Next.js App Router and React Server Components. State updates immediately via optimistic UI patterns, synchronizing seamlessly with backend WebSockets.",
    rules: [
      "Optimistic UI state updates for immediate user feedback",
      "End-to-end TypeScript interfaces shared across backend and frontend models",
      "Strict accessibility standards, responsive layouts, and zero visual jank"
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"]
  }
];

export function EngineeringRoadmap() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Simulation animation pulse
  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < ROADMAP_STEPS.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 600);
  };

  const current = ROADMAP_STEPS[activeStep];

  return (
    <section id="mindset" className="py-24 px-4 sm:px-6 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>INTERACTIVE ARCHITECTURE ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How I Build Software
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            An interactive 5-stage systems pipeline from API contracts to low-latency edge delivery.
          </p>
        </div>

        {/* Visual Roadmap Pipeline Stepper */}
        <div className="relative">
          {/* Connecting Track Line */}
          <div className="hidden md:block absolute top-7 left-8 right-8 h-[2px] bg-white/10 -z-0">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-500"
              style={{
                width: `${(activeStep / (ROADMAP_STEPS.length - 1)) * 100}%`
              }}
            />
          </div>

          {/* Stepper Buttons Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
            {ROADMAP_STEPS.map((s, index) => {
              const isActive = activeStep === index;
              const isPast = activeStep >= index;

              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between ${
                    isActive
                      ? "border-blue-500 bg-blue-500/15 shadow-xl shadow-blue-500/15 scale-[1.02]"
                      : isPast
                      ? "border-blue-500/30 bg-[#0d1017]/80 text-zinc-300 hover:border-blue-400/50"
                      : "border-white/10 bg-[#0d1017]/70 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/50"
                          : isPast
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                          : "bg-white/5 text-zinc-400 border border-white/10"
                      }`}
                    >
                      {s.step}
                    </span>
                    <span className="text-[10px] font-mono text-blue-400">
                      {s.metric}
                    </span>
                  </div>

                  <div className="font-bold text-xs text-white line-clamp-1">
                    {s.title.split(" ")[0]} {s.title.split(" ")[1]}
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    {s.badge}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="rounded-3xl border border-white/10 bg-[#0d1017]/85 backdrop-blur-md p-6 sm:p-9 shadow-2xl space-y-6 animate-fadeIn">
          {/* Stage Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  {current.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Target: {current.metric}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-blue-300/90 mt-1">
                &ldquo;{current.tagline}&rdquo;
              </p>
            </div>

            {/* Simulation CTA */}
            <button
              onClick={triggerSimulation}
              disabled={isSimulating}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 shrink-0 ${
                isSimulating
                  ? "bg-blue-600/30 text-blue-200 cursor-wait animate-pulse"
                  : "border border-white/15 bg-white/5 hover:bg-white/10 text-white"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isSimulating ? "Running Packet Flow..." : "Simulate Pipeline"}</span>
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
            {current.description}
          </p>

          {/* Core Engineering Principles Checklist */}
          <div className="space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 block">
              Architectural Constraints & Rules:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {current.rules.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-zinc-300 flex items-start gap-2.5"
                >
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack for this stage */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 mr-2">Tools & Standards:</span>
            {current.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
