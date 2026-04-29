"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TerminalSquare } from "lucide-react";
import { modules } from "@/lib/demoData";

export default function ModuleGrid() {
  const [selectedId, setSelectedId] = useState(modules[0].id);
  const selected = useMemo(() => modules.find((item) => item.id === selectedId) ?? modules[0], [selectedId]);
  const SelectedIcon = selected.icon;

  return (
    <section id="modules" className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Module grid</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">Intelligent modules that feel alive.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 md:text-base">
          Each module represents a client-ready AI capability: product creation, code workflows, deployments, copy, insights and launch governance.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isActive = module.id === selected.id;
            return (
              <motion.button
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() => setSelectedId(module.id)}
                className={`group rounded-3xl border p-5 text-left transition ${
                  isActive ? "border-cyan-300/60 bg-cyan-300/10 shadow-glow" : "border-white/10 bg-white/[0.055] hover:border-white/20 hover:bg-white/[0.08]"
                }`}
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${module.accent} text-white shadow-lg shadow-black/25`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-white">{module.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{module.tagline}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <motion.aside
        key={selected.id}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        className="glass-panel neon-border sticky top-6 h-fit rounded-[2rem] p-6"
      >
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${selected.accent} text-white shadow-xl shadow-black/30`}>
          <SelectedIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-2xl font-black text-white">{selected.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{selected.description}</p>

        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">What it can do</p>
          {selected.capabilities.map((capability) => (
            <div key={capability} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-glow" />
              {capability}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-4">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <TerminalSquare className="h-4 w-4" /> Example prompt
          </div>
          <p className="text-sm leading-6 text-white">{selected.prompt}</p>
        </div>

        <div className="mt-4 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">Simulated output</p>
          <p className="mt-3 text-sm leading-6 text-slate-100">{selected.output}</p>
        </div>
      </motion.aside>
    </section>
  );
}
