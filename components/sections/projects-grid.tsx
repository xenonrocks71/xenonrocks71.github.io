"use client";

import React from "react";
import Image from "next/image";
import { projectsData, Project } from "@/portfolio-content/data/projects";

export function ProjectsGrid() {
  const otherProjects = projectsData.filter((p) => p.id !== "tribely");

  return (
    <section className="py-24 px-4 sm:px-6 relative border-t border-white/5 bg-[#080B12]/20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 text-xs font-mono text-purple-400">
            <span>ENGINEERING DIVERSITY • AI, WEB & SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            More Selected Work
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Demonstrating different dimensions of software engineering — from dense RAG document retrieval to relational student records and native mobile systems.
          </p>
        </div>

        {/* Selected Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {otherProjects.map((project: Project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-white/10 bg-[#0d1017]/80 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Thumbnail Display with unclipped image */}
                <div className="relative w-full aspect-[16/10] bg-black/60 border-b border-white/10 flex items-center justify-center p-4">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                    {project.period}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Engineering Concepts or Highlights */}
                  {project.concepts && (
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        Core Concepts:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.concepts.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Highlights */}
                  {project.engineeringHighlights && (
                    <ul className="space-y-1 text-xs text-zinc-400 pt-1">
                      {project.engineeringHighlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                          <span className="line-clamp-2 leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Footer Stack & Actions */}
              <div className="p-6 pt-0 space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-3 pt-1 text-xs font-medium">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center gap-1.5 shadow-sm shadow-blue-600/20"
                    >
                      <span>Live App</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                      <span className="text-zinc-400">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
