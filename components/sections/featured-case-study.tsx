"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/portfolio-content/data/projects";

export function FeaturedCaseStudy() {
  const tribely = projectsData.find((p) => p.id === "tribely")!;
  const caseStudy = tribely.caseStudy!;
  const [selectedArchNode, setSelectedArchNode] = useState(0);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 relative border-t border-white/5 bg-[#080B12]/40">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header: Things I've Built */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>THINGS I&apos;VE BUILT • FEATURED PROJECT</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {tribely.title}
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg mt-1 font-medium">
                {tribely.subtitle}
              </p>
            </div>

            {/* Quick Action Links */}
            <div className="flex items-center gap-3 shrink-0">
              {tribely.liveUrl && (
                <a
                  href={tribely.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  <span>Live Demo</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {tribely.githubUrl && (
                <a
                  href={tribely.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-1.5 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                  <span className="text-zinc-400">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Large Product Visual */}
        <div className="relative rounded-3xl border border-white/10 bg-[#0d1017] overflow-hidden shadow-2xl group">
          <div className="relative w-full aspect-[16/9] max-h-[480px]">
            <Image
              src={tribely.thumbnailUrl}
              alt="Tribely Product Showcase"
              fill
              className="object-contain object-center p-3 sm:p-5 group-hover:scale-[1.01] transition-transform duration-500"
              priority
            />
          </div>

          {/* Factual Metric Badge */}
          <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 font-mono text-xs text-white flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-300">50+ Real Users</span>
          </div>
        </div>

        {/* Case Study Container */}
        <div className="rounded-3xl border border-white/10 bg-[#0d1017]/80 backdrop-blur-md p-6 sm:p-9 shadow-xl space-y-10">
          {/* Factual Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tribely.metrics?.map((m) => (
              <div key={m.label} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-mono">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">{m.label}</div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{m.value}</div>
              </div>
            ))}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-mono">
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Status</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">Live Production</div>
            </div>
          </div>

          {/* Core Problem & Product Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.02] space-y-2">
              <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider block">
                The Problem
              </span>
              <h4 className="text-base font-bold text-white">
                Solo Goal Abandonment & Lack of Social Friction
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] space-y-2">
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                The Product
              </span>
              <h4 className="text-base font-bold text-white">
                Synchronized Tribes & Verified Proof Deadlines
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {caseStudy.productSolution}
              </p>
            </div>
          </div>

          {/* Engineering Highlights */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block">
              Key Engineering Highlights:
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-300">
              {tribely.engineeringHighlights.map((highlight, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Product Concepts */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block">
              Core Mechanics & Concepts
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.coreConcepts.map((concept) => (
                <div
                  key={concept.name}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1.5"
                >
                  <h5 className="text-sm font-bold text-white">
                    {concept.name}
                  </h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Real System Architecture Topology */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                System Topology & Service Flow
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                Click a component to inspect
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {caseStudy?.architectureDiagram?.map((node, i) => {
                const active = selectedArchNode === i;
                return (
                  <button
                    key={node.title}
                    onClick={() => setSelectedArchNode(i)}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      active
                        ? "border-blue-500 bg-blue-500/10 text-white shadow-md shadow-blue-500/10"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20 text-zinc-300"
                    }`}
                  >
                    <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                      {node.category}
                    </div>
                    <div className="text-xs font-bold mt-1 truncate">
                      {node.title}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-black/50 font-mono text-xs text-zinc-300 flex items-start gap-3">
              <span className="text-blue-400 font-bold text-sm">ℹ</span>
              <div>
                <span className="text-white font-semibold">
                  {caseStudy?.architectureDiagram?.[selectedArchNode]?.title}:
                </span>{" "}
                <span className="text-zinc-400">
                  {caseStudy?.architectureDiagram?.[selectedArchNode]?.description}
                </span>
              </div>
            </div>
          </div>

          {/* Hard Engineering Challenges */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block">
              Engineering Hurdles & Solutions
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy?.technicalChallenges?.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] space-y-2.5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">
                      Challenge 0{idx + 1}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      {item.challenge}
                    </h5>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs font-mono text-zinc-300 leading-relaxed">
                    <span className="text-emerald-400 font-semibold block mb-1">Implementation:</span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 mr-2">Core Technologies:</span>
            {tribely.technologies?.map((tech: string) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
