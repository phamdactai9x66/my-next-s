/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // preflight: true,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        red: "linear-gradient(180deg, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.5) 100%)",
      },
      colorsDefault: {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
      },
    },
  },
  plugins: [],
};
