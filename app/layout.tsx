import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeonMind OS | AI Product System Demo",
  description: "A premium AI operating system demo powered by ChatGPT 5.5, GitHub and Vercel."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
