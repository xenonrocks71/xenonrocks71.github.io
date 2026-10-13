"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface ProfileAvatarProps {
  size?: number;
  showBadge?: boolean;
  src?: string;
  className?: string;
}

export function ProfileAvatar({
  size = 200,
  showBadge = true,
  src = "/portfolio-content/images/profile/profile.png",
  className = "",
}: ProfileAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -14;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center cursor-pointer select-none ${className}`}
      style={{
        perspective: 1000,
        width: size + 56,
        height: size + 56,
      }}
      data-cursor="Mayur"
    >
      {/* 3D Orbiting Ambient Glow Ring */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/35 via-indigo-500/25 to-cyan-400/35 blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 0.95 : 0.5,
          transform: `scale(${isHovered ? 1.1 : 1})`,
        }}
      />

      {/* Outer Rotating Tech Border Ring (Clockwise Dashed) */}
      <div
        className="absolute rounded-full border border-dashed border-blue-500/40 pointer-events-none animate-spin-slow"
        style={{
          width: size + 40,
          height: size + 40,
        }}
      />

      {/* Counter-Rotating Fine Tech Ring (Counter-Clockwise) */}
      <div
        className="absolute rounded-full border border-indigo-500/25 pointer-events-none animate-spin-reverse-slow"
        style={{
          width: size + 24,
          height: size + 24,
          borderStyle: "dotted",
        }}
      />

      {/* Orbiting Satellite Dot 1 (Revolving Orbit) */}
      <div
        className="absolute pointer-events-none animate-orbit"
        style={{
          width: size + 40,
          height: size + 40,
        }}
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-white shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
      </div>

      {/* Orbiting Satellite Dot 2 (Counter-Revolving Secondary Satellite) */}
      <div
        className="absolute pointer-events-none animate-orbit-reverse"
        style={{
          width: size + 24,
          height: size + 24,
        }}
      >
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
      </div>

      {/* 3D Tilted Main Circular Avatar Frame */}
      <div
        className="relative rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-violet-500 to-cyan-400 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-transform duration-200 ease-out"
        style={{
          width: size,
          height: size,
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.04 : 1})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Inner Circle Image Container */}
        <div className="w-full h-full rounded-full overflow-hidden bg-[#07080c] relative shadow-inner">
          <Image
            src={src}
            alt="Mayur Patil"
            fill
            sizes="(max-width: 768px) 190px, 220px"
            className="object-cover object-top transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${isHovered ? 1.08 : 1.02})`,
            }}
            priority
          />
          {/* Subtle vignette shadow overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating 3D Badge */}
        {showBadge && (
          <div
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#0d0f17]/95 backdrop-blur-md border border-white/15 text-[11px] font-mono font-medium text-zinc-200 flex items-center gap-2 shadow-xl whitespace-nowrap transition-transform duration-300 pointer-events-none"
            style={{
              transform: "translateZ(30px) translateX(-50%)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon shadow-sm shadow-emerald-400/50" />
            <span className="font-semibold text-zinc-200">Open to Roles</span>
          </div>
        )}
      </div>
    </div>
  );
}
