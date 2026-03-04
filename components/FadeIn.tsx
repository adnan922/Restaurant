"use client"; // This is crucial for Framer Motion in Next.js App Router!
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  // Define where the element should start before it animates to its final position
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers when the element is 100px into the viewport
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}