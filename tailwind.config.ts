import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        neon: {
          cyan: "#37f5ff",
          blue: "#4f7cff",
          violet: "#8b5cf6",
          pink: "#ff4fd8",
          green: "#61ffca"
        },
        night: {
          950: "#030611",
          900: "#070b1a",
          800: "#0c1224"
        }
      },
      boxShadow: {
        glow: "0 0 35px rgba(55, 245, 255, 0.24)",
        violet: "0 0 50px rgba(139, 92, 246, 0.24)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
        "hero-glow": "radial-gradient(circle at top left, rgba(79,124,255,.35), transparent 34%), radial-gradient(circle at top right, rgba(255,79,216,.25), transparent 30%), radial-gradient(circle at bottom, rgba(55,245,255,.18), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
