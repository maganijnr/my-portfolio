import { ExperienceType } from "@/types";
import React from "react";

export default function WorkPlace({
  data,
  isLast,
}: {
  data: ExperienceType;
  isLast: boolean;
}) {
  return (
    <div
      className={`${
        !isLast ? "pb-8 mb-8 border-b border-[var(--border)]" : ""
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div>
          <h3 className="text-[15.5px] font-semibold text-[var(--text-primary)]">
            {data.position}
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)]">
            {data.name}
          </p>
        </div>
        <span className="text-[12.5px] font-mono text-[var(--text-muted)] shrink-0">
          {data.duration}
        </span>
      </div>

      {data.description && (
        <p className="text-[14px] text-[var(--text-secondary)] mt-3 leading-relaxed">
          {data.description}
        </p>
      )}

      {data.points && data.points.length > 0 && (
        <ul className="mt-3 space-y-2">
          {data.points.map((point, idx) => (
            <li
              key={idx}
              className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[var(--text-faint)]"
            >
              {point}
            </li>
          ))}
        </ul>
      )}

      {data.sub_projects && data.sub_projects.length > 0 && (
        <div className="mt-5 space-y-5 pl-4 border-l border-[var(--border)]">
          {data.sub_projects.map((item, idx) => (
            <div key={idx}>
              <p className="text-[14px] font-medium text-[var(--text-primary)]">
                {item.name}
              </p>
              <p className="text-[13.5px] text-[var(--text-muted)] mt-0.5">
                {item.description}
              </p>
              {item.points && item.points.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {item.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[var(--text-faint)]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
