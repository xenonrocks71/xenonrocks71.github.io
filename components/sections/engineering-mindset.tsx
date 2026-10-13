"use client";

import React, { useState } from "react";

interface Step {
  number: string;
  title: string;
  summary: string;
  details: string;
}

const PROBLEM_SOLVING_STEPS: Step[] = [
  {
    number: "01",
    title: "Understand",
    summary: "Understand the problem, requirements and constraints.",
    details:
      "Clarify what is really being asked before touching code. Identify the operational boundaries, input constraints, and user expectations to avoid solving the wrong problem."
  },
  {
    number: "02",
    title: "Break Down",
    summary: "Divide the problem into smaller, manageable components.",
    details:
      "Decompose a large, ambiguous challenge into isolated modules: data ingestion, state management, core algorithmic processing, and client presentation."
  },
  {
    number: "03",
    title: "Design",
    summary: "Choose appropriate data structures, architecture, APIs and data models.",
    details:
      "Select data structures and relational schemas that best match access patterns. Define clean API contracts and data models before building logic."
  },
  {
    number: "04",
    title: "Build",
    summary: "Implement, test and connect the pieces into a working solution.",
    details:
      "Write clean, readable code with modular boundaries. Assemble and connect the components step by step, validating each interface with test cases."
  },
  {
    number: "05",
    title: "Improve",
    summary: "Handle edge cases, debug failures and improve the solution.",
    details:
      "Anticipate invalid inputs, connection drops, and race conditions. Refactor for readability, profile bottlenecks, and iterate to improve robustness."
  }
];

export function EngineeringMindset() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="engineering" className="py-24 px-4 sm:px-6 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
            Engineering Mindset
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How I Think About Problems
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            A disciplined, step-by-step problem-solving framework I apply across algorithms, backend systems, and application architecture.
          </p>
        </div>

        {/* 5 Compact Visual Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {PROBLEM_SOLVING_STEPS.map((step, index) => {
            const isExpanded = activeStep === index;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(isExpanded ? null : index)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isExpanded
                    ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/10 md:col-span-5"
                    : "border-white/10 bg-[#0d1017]/70 hover:border-white/20 hover:bg-[#131722]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-blue-400 font-bold text-sm">
                      {step.number}
                    </span>
                    <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300">
                      {isExpanded ? "− Close" : "+ Read"}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-zinc-300 leading-relaxed animate-fadeIn">
                    <span className="text-cyan-300 block mb-1 font-semibold">Practical Mindset:</span>
                    {step.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
