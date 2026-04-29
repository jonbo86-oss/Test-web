# NeonMind OS

A premium AI product-system demo built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion and Lucide React.

NeonMind OS demonstrates what happens when a conversational AI layer, a GitHub repository and a Vercel deployment pipeline are presented as one intelligent product experience.

## Features

- Futuristic landing experience with glassmorphism, gradients and motion.
- AI Command Center with chat, suggested prompts, loading states and fallback demo mode.
- Secure backend endpoint at `app/api/chat/route.ts`.
- No API key exposed in the browser.
- Interactive module grid with simulated outputs.
- Deployment timeline from idea to live website.
- Demo metrics and visual showcase sections.
- Responsive layout for desktop and mobile.

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel-ready deployment

## Getting started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Start production server locally:

```bash
npm run start
```

## Environment variables

Create a `.env.local` file if you want live OpenAI responses:

```bash
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-5.5
```

If `OPENAI_API_KEY` is not configured, the application automatically works in demo mode with simulated intelligent responses.

## Vercel deployment

1. Push this repository to GitHub.
2. Open Vercel.
3. Import the GitHub repository `jonbo86-oss/Test-web`.
4. Framework preset should be detected as Next.js.
5. Add `OPENAI_API_KEY` in Vercel Project Settings > Environment Variables if live AI responses are needed.
6. Deploy.

## Project structure

```txt
app/
  api/chat/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  AiConsole.tsx
  DeploymentTimeline.tsx
  MetricCard.tsx
  ModuleGrid.tsx
  ShowcaseSection.tsx
lib/
  demoData.ts
  types.ts
.env.example
.gitignore
next.config.mjs
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
```

## Notes

The chat endpoint uses the OpenAI API from the server side only. The frontend calls `/api/chat`, so the API key remains private.
