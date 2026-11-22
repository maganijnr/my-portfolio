import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
      >
        <FiArrowLeft size={14} />
        <span>Back home</span>
      </Link>

      <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.025em] text-[var(--text-primary)]">
        Get in touch
      </h1>
      <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 leading-relaxed max-w-[520px]">
        Have a role, project, or collaboration in mind? Reach me directly via
        email, WhatsApp, or phone.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[560px]">
        <a
          href="mailto:maganijoshua25@gmail.com"
          className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)]/50 hover:border-[var(--border-hover)] transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="h-10 w-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-[var(--text-primary)] shrink-0">
              <FiMail size={17} />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] text-[var(--text-muted)]">Email</p>
              <p className="text-[14px] font-medium text-[var(--text-primary)] truncate">
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
            <span className="h-10 w-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-emerald-500 shrink-0">
              <FaWhatsapp size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] text-[var(--text-muted)]">WhatsApp</p>
              <p className="text-[14px] font-medium text-[var(--text-primary)] truncate">
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

      <div className="mt-5">
        <a
          href="tel:+2348189709386"
          className="inline-flex items-center gap-2 text-[13.5px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <FiPhone size={14} />
          <span>Phone: (+234) 8189709386</span>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
