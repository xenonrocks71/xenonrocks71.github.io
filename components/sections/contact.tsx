"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/lib/data";
import { IconRenderer } from "@/components/ui/icon-renderer";
import { MagneticButton } from "@/components/ui/magnetic-button";

const QUICK_TOPICS = [
  { id: "hiring", label: "💼 Job Opportunity", defaultSubject: "Software Engineering Role Inquiry" },
  { id: "project", label: "🚀 Project Collaboration", defaultSubject: "Project Collaboration Proposal" },
  { id: "technical", label: "⚡ Technical Discussion", defaultSubject: "Technical Discussion & Architecture" },
  { id: "general", label: "💬 Quick Hello", defaultSubject: "Connecting with Mayur Patil" },
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("hiring");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: QUICK_TOPICS[0].defaultSubject,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTopicClick = (topicId: string, defaultSubject: string) => {
    setSelectedTopic(topicId);
    setFormData((prev) => ({
      ...prev,
      subject: defaultSubject,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please write a message before sending.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Direct submission via FormSubmit (compatible with static GitHub Pages hosting)
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personalData.email)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio] ${formData.subject}`,
          message: formData.message,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Failed to deliver message.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Could not send right now. You can also use the 'Open in Gmail' button below!"
      );
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: QUICK_TOPICS[0].defaultSubject,
      message: "",
    });
    setSelectedTopic("hiring");
    setStatus("idle");
    setErrorMessage("");
  };

  // Pre-formatted web mail links
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalData.email
  )}&su=${encodeURIComponent(formData.subject || "Message from Portfolio")}&body=${encodeURIComponent(
    `From: ${formData.name || "[Your Name]"}\nEmail: ${formData.email || "[Your Email]"}\n\n${formData.message || ""}`
  )}`;

  const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
    formData.subject || "Message from Portfolio"
  )}&body=${encodeURIComponent(
    `From: ${formData.name || "[Your Name]"}\nEmail: ${formData.email || "[Your Email]"}\n\n${formData.message || ""}`
  )}`;

  return (
    <section
      id="contact"
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-transparent text-[var(--text-strong)] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 dark:bg-indigo-600/15 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon" />
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-300 font-semibold uppercase tracking-wider">
              GET IN TOUCH · {personalData.status}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-space-grotesk text-slate-900 dark:text-white">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300">
              Connect.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-mono leading-relaxed max-w-xl mx-auto">
            Have a project in mind, an engineering role, or just want to connect? Drop a message below or reach out directly.
          </p>
        </div>

        {/* 2-Column Responsive Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN: Profile Card, Contact Channels & Status
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Profile Summary Card */}
            <div className="p-6 rounded-3xl bg-white/95 dark:bg-[#0d101a]/90 light-card-blue backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-lg space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg font-space-grotesk shadow-md shadow-blue-500/25 shrink-0">
                  MP
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {personalData.name}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                    {personalData.role}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
                {personalData.tagline}
              </p>

              {/* Status indicators */}
              <div className="pt-2 border-t border-slate-100 dark:border-white/5 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">
                  <span className="text-blue-500">📍</span>
                  <span>{personalData.location} (IST / UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">
                  <span className="text-emerald-500">⚡</span>
                  <span>Typical response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* 1-Click Copy Email Pill Card */}
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#0d101a]/80 border border-slate-200/90 dark:border-white/10 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-semibold">
                  Direct Email Address
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  Verified Inbox
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200/70 dark:border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2 truncate text-slate-800 dark:text-zinc-200 font-medium select-all">
                  <span className="text-blue-500">✉</span>
                  <span className="truncate">{personalData.email}</span>
                </div>

                <MagneticButton strength={0.25}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/25 text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <span>📋</span>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Social & Professional Platforms Grid */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-semibold">
                  Professional Profiles & Socials
                </span>
                <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                  Direct External Links
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {/* LinkedIn */}
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 dark:bg-[#0d101a]/80 hover:bg-blue-50/60 dark:hover:bg-blue-950/20 border border-slate-200/90 dark:border-white/10 hover:border-blue-500/40 text-slate-800 dark:text-white transition-all shadow-xs flex flex-col items-center justify-center gap-1.5 group text-center hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconRenderer name="linkedin" className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold">LinkedIn</span>
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-blue-500 transition-colors truncate max-w-full px-1">
                    Connect ↗
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 dark:bg-[#0d101a]/80 hover:bg-slate-50 dark:hover:bg-white/[0.05] border border-slate-200/90 dark:border-white/10 hover:border-slate-400/40 text-slate-800 dark:text-white transition-all shadow-xs flex flex-col items-center justify-center gap-1.5 group text-center hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconRenderer name="github" className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold">GitHub</span>
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate max-w-full px-1">
                    @xenonrocks71 ↗
                  </span>
                </a>

                {/* LeetCode */}
                <a
                  href={personalData.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 dark:bg-[#0d101a]/80 hover:bg-amber-50/60 dark:hover:bg-amber-950/20 border border-slate-200/90 dark:border-white/10 hover:border-amber-500/40 text-slate-800 dark:text-white transition-all shadow-xs flex flex-col items-center justify-center gap-1.5 group text-center hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FFA116]/10 text-[#FFA116] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconRenderer name="leetcode" className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold">LeetCode</span>
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-[#FFA116] transition-colors truncate max-w-full px-1">
                    xenonrocks_71 ↗
                  </span>
                </a>

                {/* X (Twitter) */}
                <a
                  href={personalData.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 dark:bg-[#0d101a]/80 hover:bg-slate-50 dark:hover:bg-white/[0.05] border border-slate-200/90 dark:border-white/10 hover:border-slate-400/40 text-slate-800 dark:text-white transition-all shadow-xs flex flex-col items-center justify-center gap-1.5 group text-center hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-900/5 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconRenderer name="x" className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold">X (Twitter)</span>
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate max-w-full px-1">
                    @MayurPa... ↗
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href={personalData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 dark:bg-[#0d101a]/80 hover:bg-pink-50/60 dark:hover:bg-pink-950/20 border border-slate-200/90 dark:border-white/10 hover:border-pink-500/40 text-slate-800 dark:text-white transition-all shadow-xs flex flex-col items-center justify-center gap-1.5 group text-center hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500/15 via-rose-500/15 to-purple-500/15 text-[#E4405F] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconRenderer name="instagram" className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold">Instagram</span>
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-[#E4405F] transition-colors truncate max-w-full px-1">
                    @xenonrocks_71 ↗
                  </span>
                </a>

                {/* Resume */}
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 dark:bg-[#0d101a]/80 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/20 border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/40 text-slate-800 dark:text-white transition-all shadow-xs flex flex-col items-center justify-center gap-1.5 group text-center hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono font-semibold">Resume</span>
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-emerald-500 transition-colors truncate max-w-full px-1">
                    Drive PDF ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN: Interactive Message Cockpit Form
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white/95 dark:bg-[#0d101a]/90 light-card-blue backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 shadow-xl">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* Success Feedback State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="py-10 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl mx-auto shadow-lg shadow-emerald-500/15">
                      ✓
                    </div>
                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="text-2xl font-black font-space-grotesk text-slate-900 dark:text-white">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-sm font-mono text-slate-600 dark:text-zinc-300 leading-relaxed">
                        Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Your note has been received. I will review it and reply to <span className="text-blue-600 dark:text-blue-400 font-semibold">{formData.email}</span> within 24 hours.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white transition-all border border-slate-200 dark:border-white/15 cursor-pointer"
                      >
                        Send Another Note
                      </button>

                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/25 flex items-center gap-1.5"
                      >
                        <span>Open Copy in Gmail</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* Main Interactive Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-space-grotesk text-slate-900 dark:text-white">
                          Drop a Message
                        </h3>
                        <p className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                          Directly sent to Mayur&apos;s personal inbox
                        </p>
                      </div>

                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
                        Instant Delivery
                      </span>
                    </div>

                    {/* Quick Topic Chips */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-600 dark:text-zinc-300 block">
                        Select Inquiring Topic:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {QUICK_TOPICS.map((topic) => {
                          const isSelected = selectedTopic === topic.id;
                          return (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => handleTopicClick(topic.id, topic.defaultSubject)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                                isSelected
                                  ? "bg-blue-600 text-white font-bold border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]"
                                  : "bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                              }`}
                            >
                              {topic.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Two-Column Inputs: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-semibold text-slate-700 dark:text-zinc-200 flex items-center gap-1">
                          <span>Your Name</span>
                          <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Morgan"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-black/40 border border-slate-200/90 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-semibold text-slate-700 dark:text-zinc-200 flex items-center gap-1">
                          <span>Your Email</span>
                          <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. alex@company.com"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-black/40 border border-slate-200/90 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-zinc-200 flex items-center gap-1">
                        <span>Subject</span>
                        <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject line"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-black/40 border border-slate-200/90 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono font-semibold text-slate-700 dark:text-zinc-200 flex items-center gap-1">
                          <span>Your Message</span>
                          <span className="text-blue-500">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                          {formData.message.length} chars
                        </span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Write your message here... tell me about your project, team, or opportunity."
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-black/40 border border-slate-200/90 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all resize-y min-h-[100px]"
                      />
                    </div>

                    {/* Error Banner if any */}
                    {status === "error" && errorMessage && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2">
                        <span>⚠</span>
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Action Hub Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      {/* Primary Send Button */}
                      <MagneticButton strength={0.2} className="w-full sm:w-auto">
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95 disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                        >
                          {status === "submitting" ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                              </svg>
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <span>🚀</span>
                            </>
                          )}
                        </button>
                      </MagneticButton>

                      {/* Secondary Direct Web Launchers */}
                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        {/* Open in Gmail Web */}
                        <a
                          href={gmailComposeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                          title="Open pre-drafted message directly in Gmail web"
                        >
                          <span>Gmail Web</span>
                          <span className="text-[10px]">↗</span>
                        </a>

                        {/* Open Default Mail Client */}
                        <a
                          href={mailtoUrl}
                          className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                          title="Open default desktop mail application"
                        >
                          <span>Mail App</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
