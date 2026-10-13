import React from "react";

interface IconRendererProps {
  name: string;
  className?: string;
  color?: string;
  size?: number;
}

/* ═══════════════════════════════════════════════════════════════
   OFFICIAL DEVICON BRAND SVG MAP
   Authentic, undistorted brand vectors direct from Devicon CDN
   ═══════════════════════════════════════════════════════════════ */
const BRAND_ICON_URLS: Record<string, string> = {
  // Languages
  "python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "cpp": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "ts": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "php": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "sql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "html & css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "html": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",

  // Frameworks & Libraries
  "next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "nextjs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "react": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "fastapi": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "android": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  "android sdk": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  "firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  "tailwindcss": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "nodejs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

  // Databases & Infrastructure
  "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "postgres": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "mongodb": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "apache": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg",
  "docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "github": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "vscode": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",

  // AI & Specialized
  "chromadb": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "google gemini api": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  "gemini": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  "langchain": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "ollama": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "websockets": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  "socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  "rest apis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg",
};

export const IconRenderer: React.FC<IconRendererProps> = ({
  name,
  className = "w-4 h-4",
  color,
  size = 18
}) => {
  const n = name.toLowerCase().trim();

  // 1. Direct match in Official Devicon Brand Map
  const brandUrl = BRAND_ICON_URLS[n];
  if (brandUrl) {
    const isNext = n === "next.js" || n === "nextjs";
    const isGithub = n === "github";

    return (
      <img
        src={brandUrl}
        alt={name}
        width={size}
        height={size}
        className={`inline-block object-contain shrink-0 ${isNext || isGithub ? "dark:invert" : ""} ${className}`}
        loading="lazy"
      />
    );
  }

  // 2. GitHub SVG
  if (n === "github") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: color || "currentColor" }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  // 3. LinkedIn SVG
  if (n === "linkedin") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: color || "currentColor" }}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }

  // 4. LeetCode SVG
  if (n === "leetcode") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: color || "currentColor" }}>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.864c.354.047.706.047 1.06 0a6.24 6.24 0 0 0 2.287-.735l4.043-2.58 4.382-2.8a1.373 1.373 0 0 0 .25-1.909 1.373 1.373 0 0 0-1.91-.25l-4.381 2.8-4.044 2.58a3.504 3.504 0 0 1-1.284.412 3.486 3.486 0 0 1-.595 0 3.334 3.334 0 0 1-2.709-2.17 3.328 3.328 0 0 1-.196-.57 3.104 3.104 0 0 1-.035-1.326 3.004 3.004 0 0 1 .68-1.182l3.854-4.125 5.405-5.787a1.374 1.374 0 0 0-.962-2.338zM16.517 7.644a1.374 1.374 0 0 0-.961.438l-4.136 4.428a1.373 1.373 0 0 0 1.91 1.909l4.135-4.428a1.373 1.373 0 0 0-.948-2.347z" />
      </svg>
    );
  }

  // 5. X (Twitter) SVG
  if (n === "x" || n === "twitter" || n.includes("twitter")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: color || "currentColor" }}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }

  // 6. Instagram SVG
  if (n === "instagram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: color || "currentColor" }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }

  // 7. Email / Mail SVG
  if (n === "mail" || n === "email") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: color || "currentColor" }}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }

  // 8. WebSockets / Real-Time Data Wire
  if (n.includes("socket")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: color || "#38bdf8" }}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    );
  }

  // 9. Clean Architecture / Software Engineering
  if (n.includes("software") || n.includes("architecture")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: color || "#3b82f6" }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }

  // 10. Default Clean Bracket Fallback
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: color || "currentColor" }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
