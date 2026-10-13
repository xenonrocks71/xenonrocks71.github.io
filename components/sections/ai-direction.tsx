"use client";

import React from "react";
import { IconRenderer } from "@/components/ui/icon-renderer";

interface AIFocusItem {
  name: string;
  category: string;
  description: string;
  badge: string;
}

const AI_FOCUS_ITEMS: AIFocusItem[] = [
  {
    name: "RAG & Vector Retrieval",
    category: "Retrieval Architecture",
    description: "Semantic chunking, dense embeddings, and ChromaDB vector indexing to produce grounded, hallucination-resistant answers.",
    badge: "Active in NeuroNexus"
  },
  {
    name: "LLM Applications & Pipelines",
    category: "System Integration",
    description: "Deterministic prompt engineering, structured JSON outputs, and chaining model calls into dependable software workflows.",
    badge: "Production APIs"
  },
  {
    name: "LangChain & LangGraph",
    category: "Orchestration & State",
    description: "Constructing cyclical, stateful AI workflows, agentic decision loops, and multi-step tool executions.",
    badge: "Exploring"
  },
  {
    name: "Model Context Protocol (MCP)",
    category: "Interoperability",
    description: "Integrating standardized context protocols to connect language models with local databases, development tools, and APIs.",
    badge: "Standards"
  },
  {
    name: "Google Gemini & Ollama",
    category: "Inference Engines",
    description: "Balancing powerful cloud multimodal reasoning (Gemini API) with fast, private local inference via Ollama.",
    badge: "Hybrid Stack"
  }
];

export function AIDirection() {
  return (
    <section id="ai-direction" className="py-24 px-4 sm:px-6 relative border-t border-white/5 bg-[#080B12]/40">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 text-xs font-mono text-purple-400">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>AI DIRECTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Exploring AI Engineering
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            I&apos;m exploring how modern AI models can be integrated into useful software applications — from RAG and semantic retrieval to LLM-powered workflows and agentic systems.
          </p>

          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 font-mono text-xs text-zinc-400">
            Positioning: <span className="text-purple-300 font-semibold">Software engineer building AI-powered applications</span>
          </div>
        </div>

        {/* AI Focus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {AI_FOCUS_ITEMS.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl border border-white/10 bg-[#0d1017]/70 backdrop-blur-sm space-y-3 hover:border-purple-500/30 transition-all flex flex-col justify-between group hover:-translate-y-0.5 shadow-lg"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-purple-400 font-medium">{item.category}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
