/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "neue-montreal": ["var(--font-neue-montreal)"],
        "founders-grotesk": ["var(--font-founders-grotesk)"],
      },
    },
  },
  plugins: [],
};
