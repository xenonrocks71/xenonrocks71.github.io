"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/lib/data";

interface ActionItem {
  id: string;
  title: string;
  category: "Navigation" | "Social & Links" | "Quick Action";
  shortcut?: string;
  perform: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const jumpTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  const actions: ActionItem[] = [
    { id: "home", title: "Home / Hero", category: "Navigation", shortcut: "H", perform: () => jumpTo("hero") },
    { id: "about", title: "About Me & Focus", category: "Navigation", shortcut: "A", perform: () => jumpTo("about") },
    { id: "work", title: "Work & Tribely Flagship", category: "Navigation", shortcut: "W", perform: () => jumpTo("work") },
    { id: "engineering", title: "How I Think About Problems", category: "Navigation", shortcut: "M", perform: () => jumpTo("engineering") },
    { id: "journey", title: "My Journey Roadmap", category: "Navigation", shortcut: "J", perform: () => jumpTo("journey") },
    { id: "experience", title: "Experience (Sumago & ACES)", category: "Navigation", shortcut: "E", perform: () => jumpTo("experience") },
    { id: "skills", title: "Technical Skills Matrix", category: "Navigation", shortcut: "S", perform: () => jumpTo("skills") },
    { id: "achievements", title: "Honors & Achievements", category: "Navigation", shortcut: "V", perform: () => jumpTo("achievements") },
    { id: "contact", title: "Contact Mayur", category: "Navigation", shortcut: "C", perform: () => jumpTo("contact") },
    { id: "linkedin", title: "LinkedIn Profile (Mayur Patil)", category: "Social & Links", shortcut: "↗", perform: () => window.open(personalData.linkedinUrl, "_blank") },
    { id: "github", title: "GitHub Profile (@xenonrocks71)", category: "Social & Links", shortcut: "↗", perform: () => window.open(personalData.githubUrl, "_blank") },
    { id: "leetcode", title: "LeetCode Profile (xenonrocks_71)", category: "Social & Links", shortcut: "↗", perform: () => window.open(personalData.leetcodeUrl, "_blank") },
    { id: "twitter", title: "X / Twitter (@MayurPa23149443)", category: "Social & Links", shortcut: "↗", perform: () => window.open(personalData.twitterUrl, "_blank") },
    { id: "instagram", title: "Instagram Profile (@xenonrocks_71)", category: "Social & Links", shortcut: "↗", perform: () => window.open(personalData.instagramUrl, "_blank") },
    { id: "resume", title: "Download Resume (Drive PDF)", category: "Social & Links", shortcut: "PDF", perform: () => window.open(personalData.resumeUrl, "_blank") },
    { id: "copy-email", title: copied ? "✓ Email Copied!" : "Copy Email (mayurkp71@gmail.com)", category: "Quick Action", shortcut: "Enter", perform: copyEmail }
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Trigger Button Floating Prompt (desktop) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0f17]/90 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white hover:border-white/25 transition-all shadow-xl backdrop-blur-md"
        data-cursor="Command"
        aria-label="Open Command Palette"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span>Menu</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-zinc-300">⌘K</kbd>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-2xl bg-[#0d0f17] border border-white/15 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]"
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
                <svg className="w-4 h-4 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Type a command or jump to section..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
                />
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-400">ESC</kbd>
              </div>

              {/* Action List */}
              <div className="overflow-y-auto p-2 divide-y divide-white/5 space-y-1">
                {filtered.length === 0 ? (
                  <div className="p-4 text-center text-xs font-mono text-zinc-500">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  filtered.map((action) => (
                    <button
                      key={action.id}
                      onClick={action.perform}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 group-hover:text-blue-300">
                          {action.category}
                        </span>
                        <span className="text-sm text-zinc-200 group-hover:text-white font-medium">
                          {action.title}
                        </span>
                      </div>
                      {action.shortcut && (
                        <kbd className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300">
                          {action.shortcut}
                        </kbd>
                      )}
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
