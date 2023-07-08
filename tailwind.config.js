/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        hflip: "fliphorizontal 1s infinite",
        heartBeat: "heartBeat 1s",
        emboss: "emboss 1s infinite",
        "hflip-once": "fliphorizontal 0.5s",
        "spin-once": "spin 1s linear",
        "pulse-once": "pulse 1s linear",
      },
      fontFamily: {
        primary: ['"Josefin Sans"'],
      },
      keyframes: {
        fliphorizontal: {
          "50%": { transform: "rotateY(90deg)" },
        },
        heartBeat: {
          "0%": { transform: "scale(1);" },
          "14%": { transform: "scale(1.3);" },
          "28%": { transform: "scale(1) ;" },
          "42%": { transform: "scale(1.3);" },
          "70%": { transform: "scale(1);" },
        },
        emboss: {
          to: { transform: "scale(1.2)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("prettier-plugin-tailwindcss"),
  ],
};
