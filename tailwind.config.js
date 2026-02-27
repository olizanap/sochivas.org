/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2f5e",
          dark: "#0d1f3c",
          light: "#2a4a8a",
        },
        accent: {
          DEFAULT: "#c0392b",
          dark: "#a93226",
          light: "#e74c3c",
        },
        muted: {
          DEFAULT: "#7f8c8d",
          light: "#f4f6f9",
        },
        body: "#2c3e50",
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "Source Sans Pro", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
