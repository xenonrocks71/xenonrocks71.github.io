"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if session has already seen loader
    const hasSeenLoader = sessionStorage.getItem("mp_intro_seen");
    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("mp_intro_seen", "true");
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080c] select-none pointer-events-auto"
        >
          {/* Ambient center glow */}
          <div className="absolute w-[360px] h-[360px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Animated MP Monogram */}
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <svg
              width="88"
              height="88"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white drop-shadow-[0_0_24px_rgba(59,130,246,0.5)]"
            >
              {/* Outer Hex / Shield Frame */}
              <motion.polygon
                points="50,5 92,27 92,73 50,95 8,73 8,27"
                stroke="url(#blueVioletGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* M & P Interlocking Monogram Path */}
              <motion.path
                d="M26 68V34L40 52L54 34V68 M54 34H68C74 34 78 38 78 44C78 50 74 54 68 54H54"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />

              <defs>
                <linearGradient id="blueVioletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Subtitle label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-400"
            >
              Mayur Patil
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
