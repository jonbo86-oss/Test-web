import type { LucideIcon } from "lucide-react";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export type ModuleItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  prompt: string;
  output: string;
  accent: string;
  icon: LucideIcon;
};

export type TimelineStep = {
  label: string;
  description: string;
  status: "ready" | "analyzing" | "building" | "deployed";
};

export type ShowcaseItem = {
  title: string;
  description: string;
};

export type MetricItem = {
  value: string;
  label: string;
  detail: string;
};
