"use client";

import { projectData } from "@/data/projectData";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

const ProjectsPage = () => {
  const [filter, setFilter] = useState<"all" | "commercial" | "personal">(
    "all"
  );

  const filtered = projectData.filter((project) => {
    if (filter === "all") return true;
    const isPersonal = project.name.toLowerCase().includes("personal");
    return filter === "personal" ? isPersonal : !isPersonal;
  });

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
      >
        <FiArrowLeft size={14} />
        <span>Back home</span>
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.025em] text-[var(--text-primary)]">
            Projects
          </h1>
          <p className="text-[14.5px] text-[var(--text-muted)] mt-1.5">
            Selected web and mobile products I&apos;ve built and shipped.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-[13px]">
          {(
            [
              { id: "all", label: "All" },
              { id: "commercial", label: "Work" },
              { id: "personal", label: "Personal" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1 rounded-md transition-colors ${
                filter === tab.id
                  ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-medium"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map((project: ProjectType) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="group block rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)]/50 hover:border-[var(--border-hover)] overflow-hidden transition-colors"
          >
            <div className="aspect-[1.65/1] relative overflow-hidden bg-[var(--bg-hover)] border-b border-[var(--border)]">
              <Image
                src={project.projectImage}
                fill
                alt={project.name}
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-[15px] font-semibold text-[var(--text-primary)]">
                  {project.name}
                </h2>
                <FiArrowUpRight
                  size={15}
                  className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors shrink-0"
                />
              </div>
              <p className="text-[13.5px] text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-1.5 flex-wrap mt-3.5">
                {project.stack.map((el, index) => (
                  <span
                    key={index}
                    className="text-[11.5px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)]"
                  >
                    {el}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
