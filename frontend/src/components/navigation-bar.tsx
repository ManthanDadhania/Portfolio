"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavSection = {
  label: string;
  id: string;
  shortLabel?: string;
};

type NavigationBarProps = {
  sections: NavSection[];
  resumeLink: string;
  name: string;
  tagline: string;
  badge?: string;
  brand: string;
};

export function NavigationBar({
  sections,
  resumeLink,
  name,
  tagline,
  badge,
  brand,
}: NavigationBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      // Overall header made shorter (py-2.5)
      className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-[min(1680px,100%)] items-center gap-4 px-4 py-2.5 sm:px-8 lg:px-16"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* 1. Name/Tagline Section: Compact width, 'MD' logo removed, Height: py-1.5 */}
      <div className="flex flex-none items-center gap-2 rounded-xl border border-[color:var(--border-subtle)]/70 bg-[color:var(--surface-secondary)]/90 px-3 py-1.5 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)] w-fit">
        
        {/* Name and Tagline container, reduced padding for less width */}
        <div className="min-w-0 pr-0">
          <span className="block truncate text-sm font-semibold text-[color:var(--text-primary)] sm:text-base">
            {name}
          </span>
          <span className="hidden sm:block truncate text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
            {badge ?? tagline}
          </span>
        </div>
      </div>

      {/* 2. Desktop Navigation Links: Height adjusted to match Name section (py-1.5) */}
      <nav className="hidden flex-1 flex-wrap items-center justify-center gap-1 rounded-xl border border-[color:var(--border-subtle)]/70 bg-[color:var(--surface-secondary)]/85 px-3 py-1.5 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)] lg:flex">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            // Individual link padding remains small (py-1)
            className="rounded-lg px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)] transition hover:bg-[color:var(--surface-primary)]/70 hover:text-[color:var(--text-accent)]"
          >
            {section.shortLabel ?? section.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-3 min-w-max">
        {/* 3. Desktop Resume Button: Fixed with <a> tag and compact height (py-1.5) */}
        <a
          href={resumeLink}
          className="hidden rounded-lg border border-[color:var(--border-strong)]/80 bg-[color:var(--surface-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text-accent)] transition hover:-translate-y-px hover:bg-[color:var(--surface-primary)]/80 lg:inline-flex"
          download
          target="_blank"
          rel="noreferrer"
        >
          Résumé
        </a>
        {/* 4. Mobile Menu Button: Reduced size to h-10 w-10 */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border-subtle)]/70 bg-[color:var(--surface-secondary)]/90 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            key="mobile-nav"
            className="fixed inset-x-0 top-16 z-50 mx-auto w-[calc(100%-2rem)] max-w-[480px] rounded-2xl border border-[color:var(--border-subtle)]/70 bg-[color:var(--surface-primary)]/95 p-5 shadow-[var(--shadow-l)] backdrop-blur-[calc(var(--blur-strength)+4px)] lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-lg px-4 py-2.5 transition hover:bg-[color:var(--surface-secondary)]/80 hover:text-[color:var(--text-accent)]"
                  onClick={() => setOpen(false)}
                >
                  {section.shortLabel ?? section.label}
                </Link>
              ))}
              {/* Mobile Resume Link: Fixed with <a> tag */}
              <a
                href={resumeLink}
                className="mt-2 rounded-lg border border-[color:var(--border-strong)]/80 bg-[color:var(--surface-secondary)] px-4 py-2.5 text-[color:var(--text-accent)] transition hover:-translate-y-px hover:bg-[color:var(--surface-primary)]/90"
                download
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Résumé
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}