"use client";

import { projectData } from "@/data/projectData";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";

const SingleProject = () => {
  const { slug }: { slug: string } = useParams();
  const project = projectData.find((item: ProjectType) => item.slug === slug);

  if (!project) {
    return (
      <div className="py-12">
        <p className="text-[14px] text-[var(--text-muted)]">
          Project not found.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[13.5px] text-[var(--text-primary)] mt-4 hover:opacity-75"
        >
          <FiArrowLeft size={14} />
          <span>Back to projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
      >
        <FiArrowLeft size={14} />
        <span>All projects</span>
      </Link>

      <h1 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.025em] text-[var(--text-primary)]">
        {project.name}
      </h1>
      <p className="text-[15px] text-[var(--text-secondary)] mt-3 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-2.5 mt-6">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13.5px] font-medium bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-hover)] transition-colors"
          >
            <span>Visit live site</span>
            <FiArrowUpRight size={14} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13.5px] font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors"
          >
            <FiGithub size={14} />
            <span>GitHub repo</span>
          </a>
        )}
      </div>

      <div className="mt-8 aspect-[1.6/1] rounded-xl overflow-hidden relative border border-[var(--border)] bg-[var(--bg-subtle)]">
        <Image
          src={project.projectImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-8">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--text-muted)] mb-3">
          Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((el, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-md text-[13px] border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-primary)]"
            >
              {el}
            </span>
          ))}
        </div>
      </div>

      {project.projectImages && project.projectImages.length > 1 && (
        <div className="mt-10 pt-8 border-t border-[var(--border)]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--text-muted)] mb-4">
            Screens
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {project.projectImages.map((item, idx) => (
              <div
                key={idx}
                className="aspect-[1/2] relative rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-subtle)]"
              >
                <Image
                  src={item}
                  alt={`${project.name} screen ${idx + 1}`}
                  fill
                  className="object-contain p-1.5"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
