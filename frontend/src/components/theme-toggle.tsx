"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-700 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  const isDark = (theme === "dark" || resolvedTheme === "dark") ?? false;

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={clsx(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 shadow-lg backdrop-blur transition-all hover:-translate-y-1 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white",
        "bg-white/80 dark:bg-zinc-900/70"
      )}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex"
      >
        {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </motion.div>
    </motion.button>
  );
}


