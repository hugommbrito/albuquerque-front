import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222222",
          invert: "#ffffff",
          emphasis: "#111827",
          2: "#191818",
          3: "#6A6A6A",
          4: "#3E3D3D",
          5: "#E8E8E8",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
