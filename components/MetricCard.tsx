"use client";

import { motion } from "framer-motion";
import type { MetricItem } from "@/lib/types";

export default function MetricCard({ metric, index }: { metric: MetricItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="glass-panel neon-border rounded-3xl p-5"
    >
      <div className="text-4xl font-black tracking-tight text-white md:text-5xl">{metric.value}</div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">{metric.label}</div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{metric.detail}</p>
    </motion.div>
  );
}
