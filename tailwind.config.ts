import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        bg: "#070711",
        surface: "rgba(255,255,255,0.03)",
        indigo: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dim: "rgba(99,102,241,0.12)",
        },
        cyan: { DEFAULT: "#22d3ee", light: "#67e8f9" },
        violet: "#a855f7",
        border: "rgba(255,255,255,0.07)",
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
          "0%,100%": { boxShadow: "0 0 6px rgba(99,102,241,0.7)" },
          "50%": { boxShadow: "0 0 20px rgba(99,102,241,1), 0 0 40px rgba(34,211,238,0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
