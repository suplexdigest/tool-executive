import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        foreground: "#f5f5f5",
        orange: {
          DEFAULT: "#FF6B00",
          light: "#FF8533",
          dark: "#CC5500",
        },
        surface: {
          DEFAULT: "#222222",
          hover: "#2a2a2a",
        },
        border: "#333333",
        muted: "#888888",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
