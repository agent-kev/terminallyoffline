"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const offsets = {
    up: { y: 24 },
    left: { x: -24 },
    right: { x: 24 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "100px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
