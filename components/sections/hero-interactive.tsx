"use client";

import React, { useState, useEffect } from "react";

interface TelemetryNode {
  id: string;
  name: string;
  role: string;
  status: "idle" | "active" | "streaming";
  metric: string;
}

export function HeroInteractive() {
  const [activeTab, setActiveTab] = useState<"architecture" | "telemetry">("architecture");
  const [nodes, setNodes] = useState<TelemetryNode[]>([
    { id: "client", name: "Client / Browser", role: "Next.js 16 + React 19", status: "active", metric: "30-60 FPS UI" },
    { id: "gateway", name: "Edge Gateway", role: "WSS / TLS Termination", status: "streaming", metric: "HTTP/2 + WS" },
    { id: "core", name: "FastAPI Engine", role: "Async Python Core", status: "active", metric: "<18ms Event Loop" },
    { id: "broker", name: "Redis Pub/Sub", role: "Message Synchronization", status: "streaming", metric: "0.8ms Broadcast" },
    { id: "db", name: "PostgreSQL", role: "ACID Relational Storage", status: "idle", metric: "Indexed B-Tree" }
  ]);
  const [ping, setPing] = useState(38);
  const [simulating, setSimulating] = useState(false);
  const [eventsCount, setEventsCount] = useState(1482);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(35 + Math.floor(Math.random() * 9));
      setEventsCount((prev) => prev + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const triggerPulse = () => {
    setSimulating(true);
    setEventsCount((prev) => prev + 12);
    setTimeout(() => setSimulating(false), 900);
  };

  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-2xl border border-white/10 bg-[#0d0f17]/90 backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden group">
      {/* Decorative gradient corner glow */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal / Monitor Header */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="font-mono text-[11px] text-zinc-400 pl-2">
            system_telemetry.sock
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {ping}ms Latency
          </span>
          <button
            onClick={triggerPulse}
            disabled={simulating}
            className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 transition-all"
            title="Simulate Event Broadcast"
          >
            {simulating ? "Transmitting..." : "Pulse Event"}
          </button>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-white/[0.03] p-1 rounded-lg border border-white/5 mb-4 text-xs font-mono">
        <button
          onClick={() => setActiveTab("architecture")}
          className={`flex-1 py-1.5 px-3 rounded-md transition-all ${
            activeTab === "architecture"
              ? "bg-white/10 text-white shadow-sm font-semibold"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Topological Pipeline
        </button>
        <button
          onClick={() => setActiveTab("telemetry")}
          className={`flex-1 py-1.5 px-3 rounded-md transition-all ${
            activeTab === "telemetry"
              ? "bg-white/10 text-white shadow-sm font-semibold"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Real-Time Metrics
        </button>
      </div>

      {/* Tab 1: Architecture Pipeline */}
      {activeTab === "architecture" && (
        <div className="space-y-2 font-mono text-xs">
          {nodes.map((node, i) => (
            <div
              key={node.id}
              className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                simulating
                  ? "border-blue-500/40 bg-blue-500/[0.04]"
                  : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-white/5 text-[10px] text-zinc-400 font-bold">
                  0{i + 1}
                </span>
                <div>
                  <div className="font-semibold text-zinc-200 text-xs flex items-center gap-2">
                    {node.name}
                    {node.status === "streaming" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <div className="text-[10px] text-zinc-400">{node.role}</div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-white/5">
                  {node.metric}
                </span>
              </div>
            </div>
          ))}

          {/* Connection status line */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Event Stream: <strong className="text-zinc-200">{eventsCount.toLocaleString()}</strong> frames
            </span>
            <span className="text-zinc-400">Zero Frame Drops</span>
          </div>
        </div>
      )}

      {/* Tab 2: Real-Time Metrics */}
      {activeTab === "telemetry" && (
        <div className="space-y-3 font-mono text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <div className="text-[10px] text-zinc-400">WS Concurrency</div>
              <div className="text-lg font-bold text-white mt-0.5">50+ Active</div>
              <div className="text-[10px] text-emerald-400 mt-1">✓ Tribely Production</div>
            </div>
            <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <div className="text-[10px] text-zinc-400">Redis Fanout</div>
              <div className="text-lg font-bold text-white mt-0.5">&lt; 0.8ms</div>
              <div className="text-[10px] text-blue-400 mt-1">Pub/Sub Partitioned</div>
            </div>
            <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <div className="text-[10px] text-zinc-400">Async Event Loop</div>
              <div className="text-lg font-bold text-white mt-0.5">uvloop</div>
              <div className="text-[10px] text-cyan-400 mt-1">Non-blocking I/O</div>
            </div>
            <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <div className="text-[10px] text-zinc-400">Streak Consistency</div>
              <div className="text-lg font-bold text-white mt-0.5">100% ACID</div>
              <div className="text-[10px] text-purple-400 mt-1">Row-level Locks</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg border border-white/5 bg-black/40 text-[11px] text-zinc-400">
            <div className="flex items-center gap-1.5 text-zinc-300 mb-1">
              <span className="text-emerald-400 font-bold">&gt;</span> health_check: status=OPTIMAL
            </div>
            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Real-time synchronization verified across distributed sessions with exponential reconnect backoff.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
