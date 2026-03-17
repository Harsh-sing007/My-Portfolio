/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        primary: "#FFFFFF",
        accent: "#22C55E",
        secondary: "#999999",
        card: "rgba(255, 255, 255, 0.05)",
        darkCard: "#020202",
      },
      fontFamily: {
        display: ["Antonio", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}
