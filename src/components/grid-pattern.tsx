"use client";

import { motion } from "motion/react";
import { DotPattern } from "@/components/ui/dot-pattern";

export function GridPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <DotPattern
        width={32}
        height={32}
        cr={1}
        className="opacity-[0.03] text-foreground"
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-32 left-1/3 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[100px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-48 right-1/4 h-[400px] w-[500px] rounded-full bg-accent/10 blur-[100px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-destructive/5 blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
