"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Orbit, Rocket, Sparkles, Terminal } from "lucide-react";
import AiConsole from "@/components/AiConsole";
import DeploymentTimeline from "@/components/DeploymentTimeline";
import MetricCard from "@/components/MetricCard";
import ModuleGrid from "@/components/ModuleGrid";
import ShowcaseSection from "@/components/ShowcaseSection";
import { metrics } from "@/lib/demoData";

const navItems = [
  { label: "Console", href: "#console" },
  { label: "Modules", href: "#modules" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Showcase", href: "#showcase" }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-night-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-hero-glow" />
      <div className="pointer-events-none fixed inset-0 bg-radial-grid bg-[size:28px_28px] opacity-[0.08]" />
      <div className="orb pointer-events-none fixed left-[-10%] top-20 h-72 w-72 rounded-full bg-cyan-400/30" />
      <div className="orb pointer-events-none fixed right-[-8%] top-40 h-80 w-80 rounded-full bg-fuchsia-500/25" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-night-950/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500 text-night-950 shadow-glow">
              <Orbit className="h-5 w-5" />
            </span>
            <span className="font-black tracking-tight">NeonMind OS</span>
          </a>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-20 sm:px-6 md:pt-28 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles className="h-4 w-4" /> Premium AI product system demo
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl lg:text-8xl">
            Build, deploy and automate with AI.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-xl">
            A living demo of what happens when ChatGPT 5.5, GitHub and Vercel work as one intelligent product system.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#console" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-violet-500 px-6 py-4 text-sm font-black text-night-950 shadow-glow transition hover:scale-[1.02]">
              Launch AI Console <Terminal className="h-4 w-4" />
            </a>
            <a href="#modules" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
              Explore Modules <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.65 }} className="relative z-10">
          <div className="glass-panel neon-border relative overflow-hidden rounded-[2.25rem] p-5 md:p-6">
            <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-full" />
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">System status</p>
                <h2 className="mt-2 text-2xl font-black">NeonMind Core</h2>
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">ONLINE</span>
            </div>

            <div className="grid gap-3">
              {[
                ["Conversational brain", "ChatGPT 5.5 orchestration layer", "98%"],
                ["Repository channel", "GitHub-ready architecture", "100%"],
                ["Deployment path", "Vercel optimized delivery", "92%"],
                ["Demo fallback", "Works without API key", "100%"]
              ].map(([title, subtitle, value]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-black/25 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-white">{title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
                    </div>
                    <span className="text-lg font-black text-cyan-100">{value}</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-500" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <AiConsole />
      <ModuleGrid />
      <DeploymentTimeline />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Demo metrics</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">Dashboard energy, demo clarity.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </section>

      <ShowcaseSection />

      <footer className="relative border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3 font-black">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-fuchsia-500 text-night-950">
                <Rocket className="h-4 w-4" />
              </span>
              NeonMind OS
            </div>
            <p className="mt-3 text-sm text-slate-400">Powered by ChatGPT 5.5, GitHub and Vercel.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {[
              ["Docs", "#top"],
              ["GitHub", "https://github.com/jonbo86-oss/Test-web"],
              ["Deploy", "#pipeline"],
              ["Contact", "#console"]
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white">
                {label === "GitHub" && <Github className="mr-2 inline h-4 w-4" />}
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
