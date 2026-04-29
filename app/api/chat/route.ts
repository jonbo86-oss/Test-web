import { NextResponse } from "next/server";
import type { ChatMessage } from "@/lib/types";

export const runtime = "nodejs";

type ChatRequest = {
  messages?: ChatMessage[];
};

const demoReplies = [
  "Demo mode response: I would turn that request into a structured product plan with target users, core modules, UX narrative, GitHub tasks and a Vercel launch checklist.",
  "Demo mode response: I can draft the GitHub issue with context, acceptance criteria, implementation notes and QA checks. Connect OPENAI_API_KEY to make this live.",
  "Demo mode response: I detected a strong demo angle: show the user how an idea becomes code, commit, deployment and a client-ready product story.",
  "Demo mode response: Launch note prepared. Build passed, environment variables reviewed, responsive checks completed and fallback mode validated."
];

function getLastUserMessage(messages: ChatMessage[]) {
  return [...messages].reverse().find((message) => message.role === "user")?.content ?? "Create a premium AI product demo.";
}

function createDemoReply(messages: ChatMessage[]) {
  const last = getLastUserMessage(messages).toLowerCase();
  if (last.includes("github") || last.includes("issue")) return demoReplies[1];
  if (last.includes("deploy") || last.includes("vercel")) return demoReplies[3];
  if (last.includes("architecture") || last.includes("product")) return demoReplies[2];
  return demoReplies[0];
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequest;
    const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ mode: "demo", reply: createDemoReply(messages) });
    }

    const model = process.env.OPENAI_MODEL || "gpt-5.5";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are NeonMind OS, a concise premium AI product system assistant. Help users build demos, plan automations, draft GitHub tasks, prepare Vercel deployment notes and explain architecture. Keep answers useful, energetic and client-ready."
          },
          ...messages.map((message) => ({ role: message.role, content: message.content }))
        ]
      })
    });

    if (!response.ok) {
      return NextResponse.json({ mode: "demo", reply: createDemoReply(messages) });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content ?? createDemoReply(messages);

    return NextResponse.json({ mode: "live", reply });
  } catch {
    return NextResponse.json(
      {
        mode: "demo",
        reply:
          "Demo mode response: I could not process the live request, but the fallback is working. The product remains usable without exposing any API key."
      },
      { status: 200 }
    );
  }
}
