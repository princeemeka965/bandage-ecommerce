import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        armyGreen: "#23856D",
        secondaryGrey: "#737373",
        primaryBlue: "#23A6F0",
        meshBlack: "#252B42",
        successGreen: "#2DC071",
        primaryGrey: "#BDBDBD",
        dangerRed: "#E74040",
        disabledBlue: "#8EC2F2",
        lightGray: "#FAFAFA",
        overlayDark: "rgba(0,0,0,0.8)",
        darkGrey: "#858585",
        alertOrange: "#E77C40",
      },
    },
  },
  plugins: [],
};
export default config;
