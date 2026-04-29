import {
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Code2,
  FileText,
  GitBranch,
  LineChart,
  Rocket,
  Sparkles,
  Wand2,
  Workflow
} from "lucide-react";
import type { MetricItem, ModuleItem, ShowcaseItem, TimelineStep } from "./types";

export const suggestions = [
  "Generate a landing page idea",
  "Create a GitHub issue",
  "Summarize product feedback",
  "Draft a Vercel deployment note",
  "Create a marketing campaign",
  "Explain this architecture"
];

export const modules: ModuleItem[] = [
  {
    id: "product-builder",
    title: "AI Product Builder",
    tagline: "From raw idea to product direction.",
    description: "Turns vague business intent into product concepts, user journeys, feature sets and demo-ready narratives.",
    capabilities: ["Define product positioning", "Generate MVP scope", "Create demo flows"],
    prompt: "Turn this rough idea into a premium SaaS product concept with modules, users and MVP scope.",
    output: "Product concept generated: positioning, target users, launch narrative, MVP backlog and demo script.",
    accent: "from-cyan-400 to-blue-500",
    icon: BrainCircuit
  },
  {
    id: "github-assistant",
    title: "GitHub Repo Assistant",
    tagline: "Structure, issues and code workflows.",
    description: "Helps plan repository structure, create implementation tasks and keep delivery traceable.",
    capabilities: ["Repo architecture", "Issue drafting", "Pull request summaries"],
    prompt: "Create GitHub issues for building a Next.js AI dashboard demo.",
    output: "Issues drafted with labels: frontend, api, deployment, QA and launch-readiness.",
    accent: "from-violet-400 to-fuchsia-500",
    icon: GitBranch
  },
  {
    id: "vercel-monitor",
    title: "Vercel Deploy Monitor",
    tagline: "Deployment intelligence layer.",
    description: "Simulates build checks, release notes and production readiness signals before shipping.",
    capabilities: ["Build status", "Release notes", "Deployment checks"],
    prompt: "Draft a deployment note for a successful Vercel release.",
    output: "Deployment note ready: build passed, routes validated, environment variables checked.",
    accent: "from-blue-400 to-cyan-300",
    icon: Rocket
  },
  {
    id: "ux-copy",
    title: "UX Copy Generator",
    tagline: "Sharper product language.",
    description: "Creates landing copy, microcopy, onboarding states and CTA variations for product demos.",
    capabilities: ["Hero copy", "CTA variants", "Empty states"],
    prompt: "Write five high-conversion CTAs for an AI automation console.",
    output: "CTA set created: Launch console, Run workflow, Generate prototype, Ship faster, Review readiness.",
    accent: "from-pink-400 to-rose-500",
    icon: Wand2
  },
  {
    id: "data-engine",
    title: "Data Insight Engine",
    tagline: "Patterns from messy signals.",
    description: "Transforms feedback, tickets and metrics into executive summaries and decision points.",
    capabilities: ["Feedback clustering", "Signal detection", "Executive summaries"],
    prompt: "Summarize this feedback into top themes, risks and actions.",
    output: "Insight report generated: 4 themes, 3 risks, 6 recommended actions and confidence level.",
    accent: "from-emerald-300 to-cyan-400",
    icon: LineChart
  },
  {
    id: "automation-planner",
    title: "Automation Planner",
    tagline: "Turn repeated work into flows.",
    description: "Maps repetitive tasks into automations across tools, approvals and handoffs.",
    capabilities: ["Workflow mapping", "Trigger definition", "Human-in-the-loop design"],
    prompt: "Design an automation that turns a product request into tasks, code and release notes.",
    output: "Automation plan ready: intake, clarification, task creation, implementation, QA and release.",
    accent: "from-indigo-400 to-violet-500",
    icon: Workflow
  },
  {
    id: "code-review",
    title: "Code Review Copilot",
    tagline: "Quality checks before merge.",
    description: "Reviews code for maintainability, security, structure and deployment risks.",
    capabilities: ["Static review", "Risk notes", "Refactor suggestions"],
    prompt: "Review this React component for quality, accessibility and maintainability.",
    output: "Review completed: 5 improvements, 2 accessibility notes and 1 simplification opportunity.",
    accent: "from-sky-400 to-indigo-500",
    icon: Code2
  },
  {
    id: "launch-checker",
    title: "Launch Readiness Checker",
    tagline: "A final gate before showing clients.",
    description: "Checks narrative, UX, responsiveness, API fallback and deployment readiness.",
    capabilities: ["Demo QA", "Narrative check", "Launch checklist"],
    prompt: "Evaluate whether this AI demo is ready for a client presentation tomorrow.",
    output: "Launch readiness: 98%. Minor actions: tighten mobile spacing and add one stronger proof point.",
    accent: "from-lime-300 to-emerald-400",
    icon: CheckCircle2
  }
];

export const timeline: TimelineStep[] = [
  { label: "Idea", description: "Raw business intent captured in natural language.", status: "ready" },
  { label: "Prompt", description: "ChatGPT 5.5 transforms intent into a structured plan.", status: "analyzing" },
  { label: "Code", description: "React components, API routes and styles are generated.", status: "building" },
  { label: "GitHub Commit", description: "Changes become traceable, reviewable and versioned.", status: "ready" },
  { label: "Vercel Build", description: "The app is compiled, checked and prepared for production.", status: "building" },
  { label: "Live Website", description: "The product demo becomes instantly shareable.", status: "deployed" }
];

export const showcase: ShowcaseItem[] = [
  { title: "Create a landing page in minutes", description: "Transform positioning and audience into a polished web experience." },
  { title: "Generate technical documentation", description: "Turn architecture, code and decisions into useful delivery docs." },
  { title: "Review code before shipping", description: "Catch quality, security and maintainability issues earlier." },
  { title: "Design business flows", description: "Map operational processes into product-ready journeys." },
  { title: "Create dashboards", description: "Convert signals into clear executive-level visual summaries." },
  { title: "Prepare campaigns", description: "Generate messaging, channels and creative angles from one brief." },
  { title: "Automate internal tasks", description: "Connect repeated work with smart triggers and human checkpoints." },
  { title: "Convert ideas into prototypes", description: "Move from conversation to visual product artifact fast." }
];

export const metrics: MetricItem[] = [
  { value: "87%", label: "faster prototyping", detail: "Simulated acceleration from idea to clickable demo." },
  { value: "42", label: "ideas generated", detail: "Concepts, flows and campaigns created in-session." },
  { value: "12", label: "deployments simulated", detail: "Pipeline events represented across the demo." },
  { value: "98%", label: "launch readiness", detail: "Narrative, UX and deployment checks aligned." },
  { value: "6", label: "active automations", detail: "Demo workflows ready to be connected to real tools." }
];

export const statusIcons = { Bot, Boxes, FileText, Sparkles };
