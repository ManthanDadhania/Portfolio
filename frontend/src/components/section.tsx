"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={clsx(
        "group relative isolate w-full overflow-hidden scroll-mt-28 rounded-[2.4rem] bg-[color:var(--surface-primary)]/95 px-6 py-12 text-[color:var(--text-secondary)] shadow-[0_32px_120px_-48px_rgba(15,23,42,0.45)] ring-1 ring-[color:var(--border-subtle)]/60 transition-all duration-500 md:px-12 md:py-16",
        className
      )}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-32 left-12 h-56 w-56 rounded-full bg-[color:var(--accent-primary)]/12 blur-[120px]" />
        <div className="absolute -bottom-40 right-10 h-64 w-64 rounded-full bg-[color:var(--accent-secondary)]/14 blur-[140px]" />
      </div>
      <div className="mb-8 max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[color:var(--text-accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-4 font-display text-balance text-4xl font-semibold text-[color:var(--text-primary)] md:text-[3.25rem] md:leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-7 text-[1.2rem] leading-8 text-[color:var(--text-secondary)]">
        {children}
      </div>
    </motion.section>
  );
}


