import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        ink: "#0E0E10",
        muted: "#9A9A92",
        hairline: "#E8E6E1",
        indigo: "#3D5AFE",
        violet: "#7C4DFF"
      },
      fontFamily: {
        display: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      spacing: {
        section: "7.5rem",
        "section-sm": "5rem"
      },
      boxShadow: {
        glow: "0 22px 60px rgba(61, 90, 254, 0.14)"
      },
      backgroundImage: {
        accent: "linear-gradient(135deg, #3D5AFE 0%, #7C4DFF 100%)"
      }
    }
  },
  plugins: []
};

export default config;
