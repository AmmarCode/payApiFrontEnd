/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1150px",
      desktop: "1274px",
    },
    extend: {
      colors: {
        DarkPink: "#ba4270",
        White: "#fbfcfe",
        SJBlue: "#36536b",
        LSJBlue: "#6c8294",
        MBlue: "#1b262f",
        CharmPink: "#da6d97",
      },
      fontFamily: {
        serif: "DM Serif Display",
        sans: "Public Sans",
      },
      fontSize: {
        h1l: ["7.2rem", { lineHeight: "7.2rem" }],
        h1sm: ["5.6rem", { lineHeight: "5.6rem" }],
        h2: ["4.8rem", { lineHeight: "5.6rem" }],
        h3l: ["3.2rem", { lineHeight: "4.0rem" }],
        h3sm: ["1.8rem", { lineHeight: "2.5rem" }],
        h4: ["2.4rem", { lineHeight: "3.2rem" }],
        body: ["1.5rem", { lineHeight: "2.5rem" }],
      },
    },
  },
  plugins: [],
};
