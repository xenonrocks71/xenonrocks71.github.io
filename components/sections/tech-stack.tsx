"use client";

import React from "react";
import { skillsCategories, SkillItem } from "@/portfolio-content/data/skills";
import { IconRenderer } from "@/components/ui/icon-renderer";

export function TechStack() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
            Skills & Fundamentals
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Grouped by engineering domains across programming languages, software development, AI, databases, core CS fundamentals, and tools.
          </p>
        </div>

        {/* 6 Grouped Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-3xl border border-white/10 bg-[#0d1017]/70 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {category.skills.length} Items
                  </span>
                </div>

                {/* Skill List */}
                <div className="grid grid-cols-2 gap-2.5 pt-3">
                  {category.skills.map((skill: SkillItem) => (
                    <div
                      key={skill.name}
                      className="group p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200 flex items-center gap-2.5"
                    >
                      {/* Logo or Neutral Icon Container */}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center p-1.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{
                          backgroundColor: `${skill.brandColor}15`,
                          border: `1px solid ${skill.brandColor}30`
                        }}
                      >
                        <IconRenderer
                          name={skill.iconName || skill.name}
                          color={skill.brandColor}
                          size={18}
                        />
                      </div>

                      {/* Name */}
                      <span className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
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
