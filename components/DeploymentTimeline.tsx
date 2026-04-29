"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, GitCommit, Lightbulb, MessageSquareText, Rocket } from "lucide-react";
import { timeline } from "@/lib/demoData";

const icons = [Lightbulb, MessageSquareText, Code2, GitCommit, Rocket, CheckCircle2];
const statusLabel = {
  ready: "Ready",
  analyzing: "Analyzing",
  building: "Building",
  deployed: "Live"
};

export default function DeploymentTimeline() {
  return (
    <section id="pipeline" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass-panel neon-border relative overflow-hidden rounded-[2rem] p-6 md:p-8">
        <div className="absolute inset-0 bg-hero-glow opacity-50" />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Live deployment timeline</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">From idea to live website.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 md:text-base">
            A visual pipeline that shows how conversation, repository and deployment can become a single product system.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {timeline.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="relative rounded-3xl border border-white/10 bg-black/25 p-5"
                >
                  {index < timeline.length - 1 && (
                    <div className="absolute left-1/2 top-9 hidden h-px w-full bg-gradient-to-r from-cyan-300/60 to-transparent lg:block" />
                  )}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-400/20 text-cyan-100 ring-1 ring-white/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="font-bold text-white">{step.label}</h3>
                    <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-100">
                      {statusLabel[step.status]}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
