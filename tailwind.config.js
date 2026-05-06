/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Sentinela Design System
        sentinel: {
          forest: "#002D62",
          "forest-2": "#053B7A",
          sage: "#002D62",
          mint: "#E6FFFA",
          glow: "#E6FFFA",
          ice: "#F7FBFF",
          stone: "#F6F8FB",
          mist: "#D9E4F2",
          ink: "#07192F",
          "ink-2": "#142B45",
          "ink-3": "#334B66",
          "ink-4": "#6A7F96",
          "ink-5": "#9CADBF",
          amber: "#D4680A",
          "amber-2": "#E8820D",
          "amber-bg": "#FFF8F0",
          red: "#C0392B",
          "red-bg": "#FEF0EF",
        },
      },
      fontFamily: {
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'system-ui', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        "2xl": "22px",
        "3xl": "32px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "sentinel-sm": "0 1px 3px rgba(28,74,42,.06), 0 1px 2px rgba(28,74,42,.04)",
        "sentinel-md": "0 4px 16px rgba(28,74,42,.08), 0 2px 6px rgba(28,74,42,.05)",
        "sentinel-lg": "0 12px 40px rgba(28,74,42,.12), 0 4px 12px rgba(28,74,42,.06)",
        "sentinel-xl": "0 24px 64px rgba(28,74,42,.16), 0 8px 20px rgba(28,74,42,.08)",
        "sentinel-green": "0 0 40px rgba(111,207,122,.18)",
        "wpp": "0 6px 24px rgba(37,211,102,.4)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
        "panel-in": {
          from: { opacity: "0", transform: "translateX(24px) scale(.97)" },
          to: { opacity: "1", transform: "none" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "radar-expand": {
          "0%": { opacity: ".6", transform: "translate(-50%,-50%) scale(0.92)" },
          "100%": { opacity: "0", transform: "translate(-50%,-50%) scale(1.08)" },
        },
        "dot-float": {
          "0%,100%": { transform: "translate(-50%,-50%) translateY(0)" },
          "50%": { transform: "translate(-50%,-50%) translateY(-12px)" },
        },
        "pulse-dot": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: ".2" },
        },
        "wpp-pulse": {
          "0%,100%": { boxShadow: "0 6px 24px rgba(37,211,102,.4)" },
          "50%": { boxShadow: "0 6px 36px rgba(37,211,102,.65), 0 0 0 10px rgba(37,211,102,.08)" },
        },
        "band-shimmer": {
          "0%": { backgroundPosition: "0% 0" },
          "100%": { backgroundPosition: "300% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "slide-up": "slide-up 0.8s cubic-bezier(.22,1,.36,1) both",
        "panel-in": "panel-in 0.9s cubic-bezier(.22,1,.36,1) both",
        "marquee": "marquee 25s linear infinite",
        "radar-expand": "radar-expand 6s cubic-bezier(.22,1,.36,1) infinite",
        "dot-float": "dot-float 5s ease-in-out infinite",
        "pulse-dot": "pulse-dot 1.6s ease-in-out infinite",
        "wpp-pulse": "wpp-pulse 3.5s ease-in-out 3s infinite",
        "band-shimmer": "band-shimmer 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
