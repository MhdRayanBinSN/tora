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
        "ink-soft": "#2A2A2E",
        muted: "#78786E",
        "muted-light": "#B0B0A6",
        hairline: "#E8E6E1",
        "hairline-soft": "#F0EEEA",
        indigo: "#3D5AFE",
        violet: "#7C4DFF",
        "violet-light": "#B995E7"
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
        glow: "0 22px 60px rgba(61, 90, 254, 0.14)",
        "glow-lg": "0 32px 80px rgba(61, 90, 254, 0.18)",
        "card": "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(61,90,254,0.06)",
        "elevated": "0 12px 40px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.06)"
      },
      backgroundImage: {
        accent: "linear-gradient(135deg, #3D5AFE 0%, #7C4DFF 100%)",
        "accent-subtle": "linear-gradient(135deg, rgba(61,90,254,0.08) 0%, rgba(124,77,255,0.06) 100%)",
        "dark-gradient": "linear-gradient(160deg, #0E0E10 0%, #16162a 40%, #1a1a2e 70%, #0E0E10 100%)"
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
