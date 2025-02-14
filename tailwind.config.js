/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F45B69",
          50: "#FEF0F1",
          100: "#FDE0E2",
          200: "#FBC3C7",
          300: "#F9A1A7",
          400: "#F67D86",
          500: "#F45B69",
          600: "#F13445",
          700: "#E31225",
          800: "#B30E1D",
          900: "#830A15",
        },
        secondary: {
          DEFAULT: "#456990",
          50: "#EEF1F5",
          100: "#DCE3EB",
          200: "#B9C8D7",
          300: "#96ACC3",
          400: "#7391AF",
          500: "#456990",
          600: "#385476",
          700: "#2B3F5B",
          800: "#1E2B3F",
          900: "#111924",
        },
        dark: "#1B1B1E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        // Basic animations
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        expandWidth: "expandWidth 0.6s ease-out forwards",
        scrollDown: "scrollDown 1.5s ease-in-out infinite",
        fadeSlideIn: "fadeSlideIn 0.3s ease-out forwards",
        scrollX: "scrollX 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        'infinite-scroll': 'infinite-scroll 30s linear infinite',

        // Robotic arm animations
        armSegment1: "armSegment1 4s ease-in-out infinite",
        armSegment2: "armSegment2 4s ease-in-out infinite",
        claw: "claw 4s ease-in-out infinite",
        clawPart: "clawPart 4s ease-in-out infinite",

        // Circuit animations
        "circuit-pulse": "circuit-pulse 2s ease-in-out infinite",
        "data-flow": "data-flow 3s linear infinite",
        "gear-spin": "gear-spin 8s linear infinite",

        slideDown: "slideDown 0.5s ease-out",

        pulse: "pulse 2s ease-in-out infinite",

        glow: "glow 2s ease-in-out infinite",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      keyframes: {
        expandWidth: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        scrollDown: {
          "0%, 100%": { transform: "translateY(0)", opacity: 1 },
          "75%": { transform: "translateY(0.75rem)", opacity: 0 },
          "76%": { transform: "translateY(-0.75rem)", opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "circuit-pulse": {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 },
        },
        "data-flow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "gear-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        armSegment1: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(45deg)" },
        },
        armSegment2: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-45deg)" },
        },
        claw: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
        clawPart: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },

        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(239, 68, 68, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(239, 68, 68, 0.8)" },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
      // Additional robotic-themed utilities
      backgroundImage: {
        "circuit-pattern": "linear-gradient(var(--tw-gradient-stops))",
        "tech-grid":
          "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,.1) 50px)",
      },
      boxShadow: {
        neon: "0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary)",
        "inner-glow": "inset 0 0 10px rgba(244,91,105,0.3)",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
    },
  },
};
