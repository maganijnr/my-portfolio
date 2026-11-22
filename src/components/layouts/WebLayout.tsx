"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { JoshuaImage } from "../../../public/assets";
import SpiderThemeToggle from "@/components/SpiderThemeToggle";
import SubtleRain from "@/components/SubtleRain";

export default function WebLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  const navLinks = [
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen relative selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      {/* Subtle falling background rain streaks */}
      <SubtleRain />

      {/* Top-right interactive spider & cobweb theme toggle */}
      <SpiderThemeToggle />

      {/* Minimal Header (exact rhythm of reference screenshot) */}
      <header className="relative z-20">
        <div className="max-w-[740px] mx-auto px-6 pt-7 pb-4 flex items-center justify-between">
          <Link
            href="/"
            className="relative h-9 w-9 rounded-full overflow-hidden ring-1 ring-[var(--border)] hover:opacity-85 transition-opacity shrink-0"
            aria-label="Joshua Magani Home"
          >
            <Image
              src={JoshuaImage}
              alt="Joshua Magani"
              fill
              className="object-cover"
              priority
            />
          </Link>

          <nav className="flex items-center gap-6 sm:gap-7 pr-8 sm:pr-0">
            {navLinks.map((item) => {
              const isActive =
                (item.href === "/projects" &&
                  pathName.startsWith("/projects")) ||
                (item.href === "/contact" && pathName === "/contact");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13.5px] transition-colors ${
                    isActive
                      ? "text-[var(--text-primary)] font-medium"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Column */}
      <main className="relative z-10 max-w-[740px] mx-auto px-6 pt-12 sm:pt-16 pb-24">
        {children}
      </main>

      {/* Quiet Minimal Footer */}
      <footer className="relative z-10 max-w-[740px] mx-auto px-6 pb-12">
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-[var(--text-muted)]">
          <p>&copy; {new Date().getFullYear()} Joshua Magani</p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/maganijnr"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-magani-9b010918b/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:maganijoshua25@gmail.com"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
