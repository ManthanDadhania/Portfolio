"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const ribbons = [
  {
    className:
      "top-[-12rem] right-[-16rem] h-[28rem] w-[36rem] bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.28),transparent_65%)]",
    animate: { rotate: 12, x: 18, y: 12 },
  },
  {
    className:
      "bottom-[-10rem] left-[-15rem] h-[32rem] w-[34rem] bg-[radial-gradient(circle_at_50%_50%,rgba(244,114,182,0.26),transparent_65%)]",
    animate: { rotate: -8, x: -24, y: 18 },
  },
  {
    className:
      "top-[40%] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(125,211,252,0.24),transparent_68%)]",
    animate: { rotate: 18, x: 0, y: -16 },
  },
];

export function BackgroundCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {ribbons.map((ribbon, index) => (
        <motion.div
          key={index}
          className={clsx(
            "absolute rounded-[50%] blur-[90px] opacity-70 dark:opacity-60",
            ribbon.className
          )}
          initial={{ rotate: 0, x: 0, y: 0 }}
          animate={ribbon.animate}
          transition={{
            duration: 18 + index * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}


