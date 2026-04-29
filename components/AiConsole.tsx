"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, Loader2, Send, Sparkles, UserRound, Zap } from "lucide-react";
import { suggestions } from "@/lib/demoData";
import type { ChatMessage } from "@/lib/types";

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "NeonMind OS online. Ask me to generate product ideas, plan automations, draft GitHub issues, summarize feedback or prepare a deployment note."
  }
];

const statusSequence = ["ready", "analyzing", "thinking", "deployed"] as const;

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function AiConsole() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentStatus = statusSequence[statusIndex % statusSequence.length];

  const statusClasses = useMemo(() => {
    switch (currentStatus) {
      case "analyzing":
        return "border-violet-300/30 bg-violet-300/10 text-violet-100";
      case "thinking":
        return "border-cyan-300/30 bg-cyan-300/10 text-cyan-100";
      case "deployed":
        return "border-emerald-300/30 bg-emerald-300/10 text-emerald-100";
      default:
        return "border-white/15 bg-white/10 text-slate-100";
    }
  }, [currentStatus]);

  async function sendMessage(value?: string) {
    const content = (value ?? input).trim();
    if (!content || isLoading) return;

    const userMessage: ChatMessage = { id: createId(), role: "user", content };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);
    setStatusIndex((current) => current + 1);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });

      if (!response.ok) {
        throw new Error("AI endpoint failed");
      }

      const data = (await response.json()) as { reply?: string; mode?: "demo" | "live" };
      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: data.reply ?? "I generated a response, but the payload was empty. Try again with a more specific prompt."
      };
      setMessages((current) => [...current, assistantMessage]);
      setStatusIndex(data.mode === "live" ? 3 : 2);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: createId(),
          role: "assistant",
          content:
            "I could not reach the AI service right now, so I switched to safe demo mode. Try asking for a product idea, deployment note or automation plan."
        }
      ]);
      setStatusIndex(0);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  return (
    <section id="console" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="glass-panel neon-border rounded-[2rem] p-6 md:p-8"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-100 ring-1 ring-cyan-200/20">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">AI Command Center</p>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">Control the product system.</h2>
            </div>
          </div>

          <p className="text-sm leading-7 text-slate-300 md:text-base">
            This cockpit demonstrates the real product idea: a frontend connected to a secure Next.js backend endpoint. With an API key, it can call OpenAI. Without it, it still works in demo mode.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["ChatGPT 5.5 brain", "GitHub-ready code", "Vercel deployment", "Safe API route"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200">
                <Sparkles className="mb-2 h-4 w-4 text-cyan-200" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="glass-panel neon-border overflow-hidden rounded-[2rem]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-night-950">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">NeonMind Console</h3>
                <p className="text-xs text-slate-400">Secure AI interaction layer</p>
              </div>
            </div>
            <div className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${statusClasses}`}>{currentStatus}</div>
          </div>

          <div className="h-[420px] space-y-4 overflow-y-auto px-5 py-5">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && (
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-100">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
                      : "border border-white/10 bg-black/25 text-slate-100"
                  }`}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-fuchsia-300/15 text-fuchsia-100">
                    <UserRound className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3 text-sm text-cyan-100">
                <Loader2 className="h-4 w-4 animate-spin" /> NeonMind is thinking through the product system...
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => void sendMessage(suggestion)}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className="flex gap-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask NeonMind to build, summarize, plan or deploy..."
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-violet-500 px-5 py-3 text-sm font-bold text-night-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Send
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
