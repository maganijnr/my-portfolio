"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

/**
 * Ultra-subtle slanted rain streaks in the background,
 * matching the delicate atmospheric motion in the reference portfolio.
 */
export default function SubtleRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dropCount = Math.min(36, Math.floor(width / 42));
    const drops = Array.from({ length: dropCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 14 + Math.random() * 14,
      speed: 1.2 + Math.random() * 1.4,
      opacity: 0.08 + Math.random() * 0.14,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.lineCap = "round";

      for (const drop of drops) {
        ctx.strokeStyle =
          theme === "dark"
            ? `rgba(148, 163, 184, ${drop.opacity * 0.8})`
            : `rgba(148, 163, 184, ${drop.opacity * 1.35})`;

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 2.2, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += drop.speed * 0.14;

        if (drop.y > height + 20) {
          drop.y = -drop.length - Math.random() * 40;
          drop.x = Math.random() * width;
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
