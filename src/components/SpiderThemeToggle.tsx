"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";

/**
 * Minimal top-right corner cobweb & hanging spider theme toggle.
 * Pull the spider downward (or click it) to switch between light and dark theme.
 */
export default function SpiderThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [pullY, setPullY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hovered, setHovered] = useState(false);

  const startYRef = useRef<number | null>(null);
  const hasTriggeredRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  const BASE_THREAD = 62;
  const TRIGGER_THRESHOLD = 42;
  const MAX_PULL = 120;

  const springBack = useCallback((initialOffset: number) => {
    let displacement = initialOffset;
    let velocity = 0;
    const stiffness = 0.22;
    const damping = 0.72;

    const step = () => {
      const force = -stiffness * displacement;
      velocity = (velocity + force) * damping;
      displacement += velocity;

      if (Math.abs(displacement) < 0.4 && Math.abs(velocity) < 0.4) {
        setPullY(0);
        return;
      }

      setPullY(displacement);
      animFrameRef.current = requestAnimationFrame(step);
    };

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(step);
  }, []);

  const handlePointerDown = (clientY: number) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setIsDragging(true);
    startYRef.current = clientY - pullY;
    hasTriggeredRef.current = false;
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (clientY: number) => {
      if (startYRef.current === null) return;
      const rawDelta = clientY - startYRef.current;
      const clamped =
        rawDelta > 0
          ? Math.min(MAX_PULL, rawDelta * 0.85)
          : Math.max(-14, rawDelta * 0.3);
      setPullY(clamped);

      if (clamped >= TRIGGER_THRESHOLD && !hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        toggleTheme();
      }
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientY);
    };
    const onEnd = () => {
      setIsDragging(false);
      springBack(pullY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isDragging, pullY, springBack, toggleTheme]);

  const handleQuickClick = () => {
    if (hasTriggeredRef.current) return;
    if (Math.abs(pullY) < 8) {
      toggleTheme();
      setPullY(52);
      setTimeout(() => springBack(52), 85);
    }
  };

  const webSize = 180;
  const originX = webSize;
  const originY = 0;

  const rayAngles = [
    Math.PI * 0.52,
    Math.PI * 0.61,
    Math.PI * 0.7,
    Math.PI * 0.79,
    Math.PI * 0.88,
    Math.PI * 0.97,
  ];
  const ringRadii = [28, 56, 88, 122, 160];

  const spiderX = 148;
  const spiderY = BASE_THREAD + pullY;

  return (
    <div
      className="fixed top-0 right-0 z-50 select-none pointer-events-none"
      style={{ width: webSize, height: webSize + 130 }}
    >
      {/* Minimal subtle tooltip on hover or drag */}
      <div
        className={`absolute top-3 right-[64px] transition-opacity duration-200 ${
          hovered || isDragging ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-muted)] whitespace-nowrap">
          {isDragging ? "Release to switch" : "Pull down for theme"}
        </span>
      </div>

      <svg
        width={webSize}
        height={webSize + 130}
        viewBox={`0 0 ${webSize} ${webSize + 130}`}
        className="overflow-visible"
      >
        <defs>
          <radialGradient id="subtleWeb" cx="100%" cy="0%" r="100%">
            <stop
              offset="0%"
              stopColor={theme === "dark" ? "#71717a" : "#a1a1aa"}
              stopOpacity={theme === "dark" ? "0.35" : "0.32"}
            />
            <stop
              offset="100%"
              stopColor={theme === "dark" ? "#71717a" : "#d4d4d8"}
              stopOpacity="0.02"
            />
          </radialGradient>
        </defs>

        {/* Delicate corner cobweb */}
        <g stroke="url(#subtleWeb)" strokeWidth="0.9" fill="none">
          {rayAngles.map((angle, idx) => (
            <line
              key={idx}
              x1={originX}
              y1={originY}
              x2={originX + Math.cos(angle) * 185}
              y2={originY + Math.sin(angle) * 185}
            />
          ))}

          {ringRadii.map((radius, rIdx) => {
            const segments: string[] = [];
            for (let i = 0; i < rayAngles.length - 1; i++) {
              const a1 = rayAngles[i];
              const a2 = rayAngles[i + 1];
              const x1 = originX + Math.cos(a1) * radius;
              const y1 = originY + Math.sin(a1) * radius;
              const x2 = originX + Math.cos(a2) * radius;
              const y2 = originY + Math.sin(a2) * radius;
              const mid = (a1 + a2) / 2;
              const sag = radius * 0.89;
              const cx = originX + Math.cos(mid) * sag;
              const cy = originY + Math.sin(mid) * sag;

              if (i === 0) segments.push(`M ${x1.toFixed(1)} ${y1.toFixed(1)}`);
              segments.push(
                `Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`
              );
            }
            return (
              <path
                key={rIdx}
                d={segments.join(" ")}
                strokeOpacity={Math.max(0.12, 0.7 - rIdx * 0.12)}
              />
            );
          })}
        </g>

        {/* Silk thread */}
        <line
          x1={spiderX}
          y1={0}
          x2={spiderX}
          y2={spiderY - 9}
          stroke={
            theme === "dark"
              ? "rgba(212, 212, 216, 0.4)"
              : "rgba(113, 113, 122, 0.45)"
          }
          strokeWidth="1"
        />

        {/* Crisp compact spider matching the screenshot */}
        <g
          transform={`translate(${spiderX}, ${spiderY}) scale(0.76)`}
          className="pointer-events-auto cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => {
            e.preventDefault();
            handlePointerDown(e.clientY);
          }}
          onTouchStart={(e) => {
            if (e.touches.length > 0) handlePointerDown(e.touches[0].clientY);
          }}
          onClick={handleQuickClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          role="button"
          tabIndex={0}
          aria-label="Pull spider down to toggle dark and light theme"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleQuickClick();
            }
          }}
        >
          {/* Generous invisible hit area */}
          <circle cx="0" cy="4" r="36" fill="transparent" />

          {/* 8 Spider legs */}
          <g
            stroke={theme === "dark" ? "#e4e4e7" : "#18181b"}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <polyline points="-5,-5 -15,-13 -23,-6" />
            <polyline points="-6,-2 -18,-5 -25,4" />
            <polyline points="-6,2 -17,2 -22,15" />
            <polyline points="-5,6 -13,11 -17,23" />

            <polyline points="5,-5 15,-13 23,-6" />
            <polyline points="6,-2 18,-5 25,4" />
            <polyline points="6,2 17,2 22,15" />
            <polyline points="5,6 13,11 17,23" />
          </g>

          {/* Abdomen */}
          <ellipse
            cx="0"
            cy="10"
            rx="10.5"
            ry="12.5"
            fill={theme === "dark" ? "#18181b" : "#111113"}
            stroke={theme === "dark" ? "#52525b" : "none"}
            strokeWidth="1"
          />

          {/* White diamond marking */}
          <polygon
            points="0,4 3.4,10 0,16.5 -3.4,10"
            fill={theme === "dark" ? "#e4e4e7" : "#f4f4f5"}
          />

          {/* Head */}
          <circle
            cx="0"
            cy="-4"
            r="6.4"
            fill={theme === "dark" ? "#18181b" : "#111113"}
            stroke={theme === "dark" ? "#52525b" : "none"}
            strokeWidth="1"
          />

          {/* Subtle indigo eyes */}
          <circle cx="-2.3" cy="-4.4" r="1.6" fill="#6366f1" />
          <circle cx="2.3" cy="-4.4" r="1.6" fill="#6366f1" />
        </g>
      </svg>
    </div>
  );
}
