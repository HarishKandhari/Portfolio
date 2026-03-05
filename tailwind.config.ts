import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        bg: "#07040e",
        surface: "rgba(139,92,246,0.05)",
        indigo: {
          DEFAULT: "#8b5cf6",
          light: "#c4b5fd",
          dim: "rgba(139,92,246,0.12)",
        },
        cyan: { DEFAULT: "#f59e0b", light: "#fcd34d" },
        violet: "#ec4899",
        border: "rgba(139,92,246,0.1)",
        text: { DEFAULT: "#f1f5f9", muted: "#94a3b8", dim: "#4b5563" },
      },
      animation: {
        "gradient-x": "gradientX 6s ease infinite",
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        gradientX: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) rotate(6deg)" },
          "66%": { transform: "translateY(8px) rotate(-4deg)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 6px rgba(139,92,246,0.7)" },
          "50%": { boxShadow: "0 0 22px rgba(139,92,246,1), 0 0 44px rgba(245,158,11,0.45)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
