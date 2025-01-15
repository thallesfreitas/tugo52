import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2563eb", // Azul principal
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#4f46e5", // Índigo
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#8b5cf6", // Violeta
          foreground: "hsl(var(--accent-foreground))",
        },
        neutral: {
          DEFAULT: "#6b7280", // Cinza
          foreground: "hsl(var(--neutral-foreground))",
        },
        error: {
          DEFAULT: "#ef4444", // Vermelho
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "#22c55e", // Verde
          foreground: "hsl(var(--success-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: "0.75rem", // --text-xs
        sm: "0.875rem", // --text-sm
        base: "1rem", // --text-base
        lg: "1.125rem", // --text-lg
        xl: "1.25rem", // --text-xl
      },
      spacing: {
        "1": "0.25rem", // --space-1
        "2": "0.5rem", // --space-2
        "4": "1rem", // --space-4
        "8": "2rem", // --space-8
        "16": "4rem", // --space-16
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
