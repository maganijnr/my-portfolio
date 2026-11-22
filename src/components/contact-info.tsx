import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
      <a
        href="mailto:maganijoshua25@gmail.com"
        className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 hover:border-blue-500/50 transition-colors"
      >
        <FiMail className="text-blue-500 shrink-0" size={14} />
        <div className="min-w-0">
          <p className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
            EMAIL ENDPOINT
          </p>
          <p className="text-xs font-medium text-[var(--text-primary)] truncate">
            maganijoshua25@gmail.com
          </p>
        </div>
      </a>

      <a
        href="tel:+2348189709386"
        className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 hover:border-blue-500/50 transition-colors"
      >
        <FiPhone className="text-emerald-500 shrink-0" size={14} />
        <div className="min-w-0">
          <p className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
            DIRECT LINE
          </p>
          <p className="text-xs font-medium text-[var(--text-primary)] truncate">
            (+234) 8189709386
          </p>
        </div>
      </a>

      <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60">
        <FiMapPin className="text-indigo-500 shrink-0" size={14} />
        <div className="min-w-0">
          <p className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
            AVAILABILITY
          </p>
          <p className="text-xs font-medium text-[var(--text-primary)] truncate">
            Remote / Global (GMT+1)
          </p>
        </div>
      </div>
    </div>
  );
}
