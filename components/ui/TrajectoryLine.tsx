"use client";

import { motion, useReducedMotion } from "framer-motion";

type TrajectoryLineProps = {
  compact?: boolean;
  className?: string;
};

export function TrajectoryLine({ compact = false, className = "" }: TrajectoryLineProps) {
  const shouldReduceMotion = useReducedMotion();
  const path = compact
    ? "M8 84 C96 18 160 116 248 44"
    : "M8 154 C116 38 222 206 350 94 C438 36 528 54 616 16";

  const viewBox = compact ? "0 0 256 128" : "0 0 624 220";
  const labels = compact
    ? [
        { x: 8, y: 102, text: "Idea" },
        { x: 122, y: 76, text: "MVP" },
        { x: 210, y: 34, text: "Scale" }
      ]
    : [
        { x: 10, y: 180, text: "Idea" },
        { x: 272, y: 128, text: "MVP" },
        { x: 548, y: 36, text: "Scale" }
      ];

  return (
    <svg
      className={`h-auto w-full overflow-visible ${className}`}
      viewBox={viewBox}
      fill="none"
      role="img"
      aria-label="Trajectory from idea to MVP to scale"
    >
      <path d={path} stroke="#E8E6E1" strokeWidth="1" strokeDasharray="4 8" />
      <motion.path
        d={path}
        stroke="url(#trajectory-gradient)"
        strokeWidth={compact ? 2 : 2.5}
        strokeLinecap="round"
        initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
        animate={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
      {labels.map((label, index) => (
        <g key={label.text}>
          <motion.circle
            cx={label.x}
            cy={label.y - 10}
            r={compact ? 3 : 4}
            fill={index === 0 ? "#3D5AFE" : index === 1 ? "#5D53FF" : "#7C4DFF"}
            initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, delay: 1 + index * 0.18 }}
          />
          <motion.text
            x={label.x}
            y={label.y}
            fill="#0E0E10"
            fontSize={compact ? "9" : "12"}
            fontFamily="var(--font-geist-mono), ui-monospace, monospace"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 1.1 + index * 0.18 }}
          >
            {label.text}
          </motion.text>
        </g>
      ))}
      <defs>
        <linearGradient id="trajectory-gradient" x1="8" y1="154" x2="616" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3D5AFE" />
          <stop offset="1" stopColor="#7C4DFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
