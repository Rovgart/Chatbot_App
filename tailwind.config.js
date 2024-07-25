module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      "barlow-condensed": ['"Barlow Condensed"', "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    colors: {
      dark_pastel_green: {
        DEFAULT: "#0cca4a",
        100: "#02280f",
        200: "#05511e",
        300: "#07792d",
        400: "#09a23c",
        500: "#0cca4a",
        600: "#1ff266",
        700: "#57f58c",
        800: "#8ff8b2",
        900: "#c7fcd9",
      },
      "anti-flash_white": {
        DEFAULT: "#e5ebea",
        100: "#283432",
        200: "#516965",
        300: "#7c9a95",
        400: "#b1c3c0",
        500: "#e5ebea",
        600: "#eaefee",
        700: "#eff3f2",
        800: "#f5f7f7",
        900: "#fafbfb",
      },
      space_cadet: {
        DEFAULT: "#21295c",
        100: "#070813",
        200: "#0e1125",
        300: "#141938",
        400: "#1b214b",
        500: "#21295c",
        600: "#364396",
        700: "#5665c2",
        800: "#8f98d6",
        900: "#c7cceb",
      },
      celestial_blue: {
        DEFAULT: "#00a1e4",
        100: "#00202e",
        200: "#00405c",
        300: "#00608a",
        400: "#0081b8",
        500: "#00a1e4",
        600: "#1fbcff",
        700: "#57cdff",
        800: "#8fddff",
        900: "#c7eeff",
      },
      payne_gray: {
        DEFAULT: "#5d5f71",
        100: "#121316",
        200: "#25262d",
        300: "#373843",
        400: "#494b5a",
        500: "#5d5f71",
        600: "#787b91",
        700: "#9a9cac",
        800: "#bcbdc8",
        900: "#dddee3",
      },
    },
    gridTemplateColumns: {
      landing_layout:
        "minmax(0,10rem) minmax(400px,1fr) minmax(20%, 1fr) minmax(0,10rem)",
      chatbot_grid: "minmax(10rem,30rem) minmax(20rem, 1fr)",
      signup_layout: "250px 1fr",
    },
  },
  plugins: [],
};

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//
// }
