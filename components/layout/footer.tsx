"use client";

import React from "react";
import { personalData } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 md:px-12 border-t border-slate-200 dark:border-white/5 bg-slate-100/80 dark:bg-[#07080c]/80 backdrop-blur-md text-slate-500 dark:text-white/50 font-mono text-xs transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <div className="text-slate-900 dark:text-white font-bold text-sm tracking-wide font-space-grotesk">
            {personalData.fullName}
          </div>
          <p className="text-slate-600 dark:text-white/60 text-xs mt-1 font-mono">
            Software Engineer · Problem Solver · Systems & AI Builder
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs font-mono">
          <a
            href={personalData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={personalData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-white/60 hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personalData.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-white/60 hover:text-amber-500 transition-colors"
          >
            LeetCode
          </a>
          <span>·</span>
          <a
            href={personalData.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-white/60 hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            X (Twitter)
          </a>
          <span>·</span>
          <a
            href={personalData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-white/60 hover:text-pink-500 transition-colors"
          >
            Instagram
          </a>
          <span>·</span>
          <a
            href={`mailto:${personalData.email}`}
            className="text-slate-600 dark:text-white/60 hover:text-rose-500 transition-colors"
          >
            Email
          </a>
          <span>·</span>
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-white/60 hover:text-emerald-500 transition-colors"
          >
            Resume
          </a>
          <span>·</span>
          <button
            onClick={scrollToTop}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer flex items-center gap-1 font-medium"
          >
            <span>Back to top ↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
