import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#002776",
          ink: "#07152f",
          sky: "#00a2f5",
        },
        surface: {
          tint: "rgba(0, 39, 118, 0.06)",
          glow: "rgba(0, 162, 245, 0.08)",
        },
        border: {
          subtle: "#e6eaf0",
        },
        muted: {
          DEFAULT: "#667085",
          foreground: "rgba(7, 21, 47, 0.7)",
        },
        ink: {
          DEFAULT: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-lexend)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 2rem + 3.2vw, 4.625rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 1.7rem + 2.3vw, 3.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading-lg": ["1.75rem", { lineHeight: "1.35" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.55" }],
        "body-md": ["1rem", { lineHeight: "1.5" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      },
      maxWidth: {
        container: "1440px",
      },
      borderRadius: {
        card: "20px",
        control: "10px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
