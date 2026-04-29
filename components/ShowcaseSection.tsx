"use client";

import { motion } from "framer-motion";
import { showcase } from "@/lib/demoData";
import { Sparkles } from "lucide-react";

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Visual showcase</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
            One interface. Many client-ready AI stories.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-300 md:text-base">
          NeonMind OS is intentionally built to feel like a living product demo, not a static presentation.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {showcase.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 transition hover:border-cyan-300/40 hover:bg-white/[0.09]"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/25 to-fuchsia-400/25 text-cyan-100 ring-1 ring-white/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
