"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type HighlightCardProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function HighlightCard({
  title,
  subtitle,
  icon,
  children,
  className,
}: HighlightCardProps) {
  return (
    <motion.div
      className={clsx(
        "group relative flex h-full flex-col gap-4 overflow-hidden rounded-[2rem] bg-[color:var(--surface-primary)]/92 p-6 shadow-[0_26px_80px_-48px_rgba(15,23,42,0.55)] ring-1 ring-[color:var(--border-subtle)]/70 transition-all duration-500 md:p-8",
        className
      )}
      whileHover={{ translateY: -14, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_65%)]" />
      </div>
      <div className="relative flex flex-1 flex-col gap-5">
        <div className="flex items-start gap-3">
          {icon ? (
            <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-[color:var(--accent-primary)]/22 via-transparent to-[color:var(--accent-secondary)]/22 text-[color:var(--accent-primary)] shadow-[0_18px_38px_-28px_rgba(99,102,241,0.65)]">
              {icon}
            </div>
          ) : null}
          <div>
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)] md:text-2xl">
              {title}
            </h3>
            {subtitle ? (
              <p className="max-w-lg text-base text-[color:var(--text-muted)]">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
        <div className="text-base leading-7 text-[color:var(--text-secondary)]">
          {children}
        </div>
      </div>
    </motion.div>
  );
}


