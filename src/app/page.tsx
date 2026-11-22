import React from "react";
import Image from "next/image";
import Link from "next/link";
import WorkPlace from "@/components/work-place";
import { contractData, experiences, projectData } from "@/data/projectData";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiBriefcase,
  FiLayers,
  FiFolder,
  FiAward,
  FiTrendingUp,
  FiArrowUpRight,
  FiGithub,
  FiMessageSquare,
  FiDownload,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function SectionLabel({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 md:pt-1">
      <span className="h-6 w-6 rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] flex items-center justify-center text-indigo-500/80 dark:text-indigo-400/80 shrink-0">
        {icon}
      </span>
      <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--text-muted)]">
        {label}
      </span>
    </div>
  );
}

function CurvedDivider() {
  return (
    <div className="my-14 sm:my-16 flex justify-center" aria-hidden="true">
      <svg
        viewBox="0 0 680 26"
        className="w-full h-6 overflow-visible"
        fill="none"
      >
        <path
          d="M 0 2 Q 340 22 680 2"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <circle
          cx="340"
          cy="14"
          r="3.2"
          fill="var(--bg)"
          stroke="var(--border-hover)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  const skillGroups = [
    {
      label: "Frontend",
      items: ["JavaScript", "TypeScript", "React.js", "Next.js"],
    },
    {
      label: "Mobile",
      items: ["React Native"],
    },
    {
      label: "State & Data",
      items: ["Zustand", "Redux Toolkit", "TanStack Query"],
    },
    {
      label: "Styling & UI",
      items: [
        "Tailwind CSS",
        "SCSS",
        "Styled Components",
        "Framer Motion",
        "shadcn/ui",
      ],
    },
    {
      label: "Backend & Tools",
      items: [
        "Node.js",
        "Express.js",
        "NestJS",
        "MongoDB",
        "Firebase",
        "Sanity CMS",
        "Git",
      ],
    },
  ];

  const impact = [
    "Expanded monetizable fintech functionality by delivering virtual-card, budgeting, subscription, and expense-tracking flows in React Native.",
    "Enabled revenue-generating transactions through Paystack and crypto payment integrations across marketplace and ticketing products.",
    "Improved frontend reliability and delivery quality through structured state management, server-state handling, reusable error states, and unit testing.",
    "Strengthened codebase maintainability through API migrations, Context-to-Redux refactors, and JavaScript-to-TypeScript migration work.",
    "Built operational dashboards and admin interfaces that improved internal visibility, user management, seller activity, and product control.",
    "Delivered production-ready interfaces across AI, fintech, Web3, food supply, social media scheduling, and learning products.",
  ];

  return (
    <div>
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section>
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--text-muted)]">
            Open to work
          </span>
        </div>

        <h1 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.03em] leading-[1.16] text-[var(--text-primary)]">
          Hi, I&apos;m Joshua Magani
          <span className="block text-[var(--text-secondary)] font-semibold mt-0.5">
            Frontend &amp; Mobile Engineer
          </span>
        </h1>

        <p className="mt-5 text-[15px] leading-[1.7] text-[var(--text-muted)] max-w-[540px]">
          I build revenue-critical web and mobile apps across fintech, AI, and
          consumer platforms — from polished React and Next.js interfaces to
          React Native virtual-card and payment workflows.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-2.5">
          <a
            href="mailto:maganijoshua25@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13.5px] font-medium bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-hover)] transition-colors"
          >
            <FiMail size={14} />
            <span>Email me</span>
          </a>

          <a
            href="https://wa.me/2348189709386"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13.5px] font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <FaWhatsapp size={15} className="text-emerald-500" />
            <span>WhatsApp</span>
          </a>

          <a
            href="/Joshua-Magani-Portfolio.pdf"
            download="Joshua-Magani-Portfolio.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13.5px] font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <FiDownload size={14} />
            <span>Download PDF</span>
          </a>

          <a
            href="https://github.com/maganijnr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13.5px] font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <FiGithub size={14} />
            <span>GitHub</span>
          </a>

          <span className="inline-flex items-center gap-1.5 text-[13px] text-[var(--text-muted)] ml-1">
            <FiMapPin size={13} />
            <span>Nigeria</span>
          </span>
        </div>
      </section>

      <CurvedDivider />

      {/* ============================================================
          ABOUT ME
      ============================================================ */}
      <section className="grid grid-cols-1 md:grid-cols-[175px_1fr] gap-5 md:gap-10">
        <SectionLabel icon={<FiUser size={13} />} label="About Me" />

        <div className="space-y-4 text-[14.5px] leading-[1.75] text-[var(--text-secondary)]">
          <p>
            Frontend and mobile engineer with 4+ years of experience building
            revenue-critical web and mobile product experiences across fintech,
            AI, SaaS, marketplaces, ticketing, and consumer platforms. Strong in
            React.js, Next.js, React Native, TypeScript, state management, API
            integration, and payment workflows.
          </p>
          <p>
            I focus on shipping customer-facing features that expand product
            capability, improve reliability, reduce user friction, and support
            monetizable business flows — from virtual cards and checkout systems
            to operational admin dashboards.
          </p>

          <div className="pt-2">
            <p className="text-[14px] font-semibold text-[var(--text-primary)]">
              Joshua Magani
            </p>
            <p className="text-[13px] text-[var(--text-muted)]">
              Frontend &amp; Mobile Engineer
            </p>
          </div>
        </div>
      </section>

      <hr className="my-14 border-[var(--border)]" />

      {/* ============================================================
          BUSINESS & TECHNICAL IMPACT
      ============================================================ */}
      <section className="grid grid-cols-1 md:grid-cols-[175px_1fr] gap-5 md:gap-10">
        <SectionLabel icon={<FiTrendingUp size={13} />} label="Impact" />

        <ul className="space-y-3">
          {impact.map((item, idx) => (
            <li
              key={idx}
              className="text-[14px] leading-[1.7] text-[var(--text-secondary)] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--border-hover)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-14 border-[var(--border)]" />

      {/* ============================================================
          SKILLS
      ============================================================ */}
      <section
        id="skills"
        className="scroll-mt-12 grid grid-cols-1 md:grid-cols-[175px_1fr] gap-5 md:gap-10"
      >
        <SectionLabel icon={<FiLayers size={13} />} label="Skills" />

        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[12px] font-medium text-[var(--text-muted)] mb-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[13px] border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-14 border-[var(--border)]" />

      {/* ============================================================
          EXPERIENCE
      ============================================================ */}
      <section
        id="experience"
        className="scroll-mt-12 grid grid-cols-1 md:grid-cols-[175px_1fr] gap-5 md:gap-10"
      >
        <SectionLabel icon={<FiBriefcase size={13} />} label="Experience" />

        <div>
          {experiences.map((item, idx) => (
            <WorkPlace
              key={idx}
              data={item}
              isLast={idx === experiences.length - 1}
            />
          ))}
        </div>
      </section>

      <hr className="my-14 border-[var(--border)]" />

      {/* ============================================================
          CONTRACT WORK
      ============================================================ */}
      <section className="grid grid-cols-1 md:grid-cols-[175px_1fr] gap-5 md:gap-10">
        <SectionLabel icon={<FiBriefcase size={13} />} label="Contract" />

        <div>
          {contractData.map((item, idx) => (
            <WorkPlace
              key={idx}
              data={item}
              isLast={idx === contractData.length - 1}
            />
          ))}
        </div>
      </section>

      <hr className="my-14 border-[var(--border)]" />

      {/* ============================================================
          SELECTED PROJECTS
      ============================================================ */}
      <section
        id="projects"
        className="scroll-mt-12 grid grid-cols-1 md:grid-cols-[175px_1fr] gap-5 md:gap-10"
      >
        <SectionLabel icon={<FiFolder size={13} />} label="Projects" />

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projectData.slice(0, 6).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)]/50 hover:border-[var(--border-hover)] overflow-hidden transition-colors"
              >
                <div className="aspect-[1.65/1] relative overflow-hidden bg-[var(--bg-hover)] border-b border-[var(--border)]">
                  <Image
                    src={project.projectImage}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[14.5px] font-semibold text-[var(--text-primary)]">
                      {project.name}
                    </h3>
                    <FiArrowUpRight
                      size={15}
                      className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors shrink-0"
                    />
                  </div>
                  <p className="text-[13px] text-[var(--text-secondary)] mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--text-primary)] hover:opacity-75 transition-opacity"
            >
              <span>View all {projectData.length} projects</span>
              <FiArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="my-14 border-[var(--border)]" />

      {/* ============================================================
          EDUCATION
      ============================================================ */}
      <section className="grid grid-cols-1 md:grid-cols-[175px_1fr] gap-5 md:gap-10">
        <SectionLabel icon={<FiAward size={13} />} label="Education" />

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">
              Covenant University
            </h3>
            <p className="text-[14px] text-[var(--text-secondary)] mt-0.5">
              Bachelor of Science in Industrial Mathematics – Computer Science
            </p>
          </div>
          <span className="text-[12.5px] font-mono text-[var(--text-muted)] shrink-0">
            2017 – 2022
          </span>
        </div>
      </section>

      <hr className="my-14 border-[var(--border)]" />

      {/* ============================================================
          CONTACT (Direct Email, WhatsApp & Phone)
      ============================================================ */}
      <section
        id="contact"
        className="scroll-mt-12 grid grid-cols-1 md:grid-cols-[175px_1fr] gap-5 md:gap-10"
      >
        <SectionLabel icon={<FiMessageSquare size={13} />} label="Contact" />

        <div>
          <p className="text-[14.5px] text-[var(--text-secondary)] leading-relaxed mb-6">
            Have a role, project, or collaboration in mind? Reach out directly
            via email, WhatsApp, or phone.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="mailto:maganijoshua25@gmail.com"
              className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)]/50 hover:border-[var(--border-hover)] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="h-9 w-9 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-[var(--text-primary)] shrink-0">
                  <FiMail size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] text-[var(--text-muted)]">Email</p>
                  <p className="text-[13.5px] font-medium text-[var(--text-primary)] truncate">
                    maganijoshua25@gmail.com
                  </p>
                </div>
              </div>
              <FiArrowUpRight
                size={15}
                className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] shrink-0"
              />
            </a>

            <a
              href="https://wa.me/2348189709386"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)]/50 hover:border-[var(--border-hover)] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="h-9 w-9 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-emerald-500 shrink-0">
                  <FaWhatsapp size={17} />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] text-[var(--text-muted)]">
                    WhatsApp
                  </p>
                  <p className="text-[13.5px] font-medium text-[var(--text-primary)] truncate">
                    (+234) 8189709386
                  </p>
                </div>
              </div>
              <FiArrowUpRight
                size={15}
                className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] shrink-0"
              />
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-[13px] text-[var(--text-muted)]">
            <a
              href="tel:+2348189709386"
              className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors"
            >
              <FiPhone size={13} />
              <span>Call (+234) 8189709386</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
