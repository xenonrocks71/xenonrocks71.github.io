"use client";

import React, { useEffect, useRef } from "react";

interface NetworkGraphBackgroundProps {
  className?: string;
  nodeCount?: number;
  maxDistance?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorLight: string;
  colorDark: string;
}

export const NetworkGraphBackground: React.FC<NetworkGraphBackgroundProps> = ({
  className = "fixed inset-0 pointer-events-none z-0",
  nodeCount,
  maxDistance = 140,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isLightMode = !document.documentElement.classList.contains("dark");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Watch for theme toggles dynamically
    const themeObserver = new MutationObserver(() => {
      isLightMode = !document.documentElement.classList.contains("dark");
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Performance-optimized node count for full-screen fixed view
    const count =
      nodeCount ||
      Math.min(65, Math.max(35, Math.floor((width * height) / 22000)));

    // Rich vibrant multi-color palette for light mode vs dark mode
    const lightColors = ["#2563eb", "#7c3aed", "#0284c7", "#059669", "#4f46e5", "#0891b2"];
    const darkColors = ["#38bdf8", "#3b82f6", "#60a5fa", "#818cf8", "#06b6d4", "#a78bfa"];

    const nodes: Node[] = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 1.5,
        colorLight: lightColors[Math.floor(Math.random() * lightColors.length)],
        colorDark: darkColors[Math.floor(Math.random() * darkColors.length)],
      });
    }

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Pause rendering when browser tab is inactive to preserve battery / GPU
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Interactive mouse connection
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.03;
          node.x += dxMouse * force;
          node.y += dyMouse * force;

          const alpha = (1 - distMouse / mouse.radius) * (isLightMode ? 0.75 : 0.45);
          ctx.strokeStyle = isLightMode
            ? `rgba(37, 99, 235, ${alpha})`
            : `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = isLightMode ? 1.4 : 0.95;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }

        // Draw node with subtle glow in light mode
        ctx.fillStyle = isLightMode ? node.colorLight : node.colorDark;
        if (isLightMode) {
          ctx.shadowColor = node.colorLight;
          ctx.shadowBlur = 4;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, isLightMode ? node.radius * 1.2 : node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw connecting edges with enhanced opacity and contrast in Light Mode
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const ratio = 1 - dist / maxDistance;
            const alpha = ratio * (isLightMode ? 0.65 : 0.25);
            if (isLightMode) {
              ctx.globalAlpha = Math.min(0.85, alpha * 1.3);
              ctx.strokeStyle = nodeA.colorLight;
              ctx.lineWidth = 1.25;
            } else {
              ctx.globalAlpha = 1;
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
              ctx.lineWidth = 0.75;
            }
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [nodeCount, maxDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`opacity-90 dark:opacity-60 transition-opacity duration-700 ${className}`}
      style={{ willChange: "transform" }}
    />
  );
};

