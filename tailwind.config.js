module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontSize: {
        mammoth: ["8rem", { lineHeight: "2" }],
      },
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "E2E2D5",
          200: "888883",
        },
      },
    },
  },
  plugins: [],
};
