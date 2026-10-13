"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/portfolio-content/data/projects";

export function ProjectsSlider() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const categories = ["All", "Full-Stack", "AI / GenAI", "Systems", "Mobile"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Production systems, real-time protocols, and intelligent software applications. Move cursor over any card to flip and inspect the full architecture & tech stack.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/25"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cursor Hover Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => {
            const isFlipped = !!flippedCards[project.id];

            return (
              <div
                key={project.id}
                className="group [perspective:1400px] h-[610px] select-none cursor-pointer"
                onClick={() => toggleFlip(project.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                    isFlipped
                      ? "[transform:rotateY(180deg)]"
                      : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* ================= CARD FRONT (PROJECT SHOWCASE) ================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl border border-white/10 bg-[#0d1017]/90 backdrop-blur-md p-6 flex flex-col justify-between shadow-xl transition-all duration-300 group-hover:border-blue-500/40 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                    <div className="space-y-3.5">
                      {/* Window Header Dots + Category + Period */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/25">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            {project.period}
                          </span>
                        </div>
                      </div>

                      {/* Project Visual Thumbnail - Full Logo Visible */}
                      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-black/40 border border-white/10 transition-all flex items-center justify-center p-3 shadow-inner">
                        <img
                          src={project.thumbnailUrl}
                          alt={`${project.title} Preview`}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-xl font-extrabold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-blue-400 mt-1 line-clamp-1">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Metrics Badges */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                          {project.metrics.slice(0, 2).map((m) => (
                            <div
                              key={m.label}
                              className="p-2.5 rounded-xl bg-black/30 border border-white/5"
                            >
                              <div className="text-[9px] text-zinc-400 uppercase tracking-wider">
                                {m.label}
                              </div>
                              <div className="text-xs font-bold text-white mt-0.5 truncate">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills Preview */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-zinc-500">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Classic Action Buttons */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs text-center transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-1.5"
                        >
                          <span>Live App</span>
                          <span className="text-[11px]">↗</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2.5 px-4 rounded-xl border border-white/15 bg-[#131722] hover:bg-[#1a2030] text-white font-medium text-xs text-center transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>GitHub</span>
                          <span className="text-blue-400 text-[11px]">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* ================= CARD BACK (ARCHITECTURE & TECH STACK) ================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl border border-blue-500/40 bg-[#0d1017]/95 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl">
                    <div className="space-y-4">
                      {/* Window Header Dots + Stack Header + Period */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                            Architecture & Stack
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            {project.period}
                          </span>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {project.title}
                        </h4>
                        <p className="text-xs font-mono text-zinc-400 mt-0.5">
                          System Component Breakdown
                        </p>
                      </div>

                      {/* Frontend Stack */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                          Frontend Layer:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.stackBreakdown?.frontend?.map((t: string) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Backend Stack */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                          Backend & Core Logic:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.stackBreakdown?.backend?.map((t: string) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Database & Real-Time */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                          Data & Persistence:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.stackBreakdown?.database?.map((t: string) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Engineering Highlights */}
                      <div className="space-y-1 pt-1">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                          Engineering Highlights:
                        </div>
                        <ul className="space-y-1 text-[11px] text-zinc-300">
                          {project.stackBreakdown?.highlights?.map((h: string, i: number) => (
                            <li key={i} className="flex items-start gap-1.5 leading-snug">
                              <span className="text-blue-400 shrink-0">▹</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Identical Action Buttons on Back */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs text-center transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-1.5"
                        >
                          <span>Live App</span>
                          <span className="text-[11px]">↗</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2.5 px-4 rounded-xl border border-white/15 bg-[#131722] hover:bg-[#1a2030] text-white font-medium text-xs text-center transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>GitHub</span>
                          <span className="text-blue-400 text-[11px]">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
