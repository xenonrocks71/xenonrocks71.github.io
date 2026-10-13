"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const NAV_ITEMS = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Achievements", href: "#achievements", id: "achievements" },
  { name: "Contact", href: "#contact", id: "contact" }
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Smart navbar hide on scroll down, show on scroll up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active Section Spy
      const scrollPos = currentScrollY + 160;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 sm:top-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-full bg-white/90 dark:bg-[#0d0f17]/90 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg dark:shadow-2xl transition-all">
        {/* Monogram Brand Mark */}
        <a
          href="#hero"
          className="flex items-center gap-2 pl-2 pr-3 py-1 font-mono text-xs font-bold text-slate-800 dark:text-white tracking-wider hover:opacity-90 transition-opacity"
        >
          <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 flex items-center justify-center text-[11px] font-extrabold text-white shadow-sm shadow-blue-500/50">
            M
          </span>
          <span className="hidden sm:inline font-sans text-sm tracking-tight font-bold">
            Mayur Patil
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive ? "text-blue-600 dark:text-white font-semibold" : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-slate-100 dark:bg-white/[0.08] border border-slate-200 dark:border-white/15"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1.5 pl-1">
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-blue-600/90 hover:bg-blue-500 text-white transition-all shadow-sm shadow-blue-600/25"
          >
            <span>Resume</span>
            <span className="text-[10px]">↗</span>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto p-4 rounded-3xl bg-white/95 dark:bg-[#0d0f17]/95 border border-slate-200 dark:border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 md:hidden z-50"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-500/30"
                    : "text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-semibold text-center"
              >
                Download Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

  );
}
