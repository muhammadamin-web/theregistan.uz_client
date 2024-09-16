import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
      // mulish: ["Mulish", "Helvetica", "Arial", "sans-serif"],
      mulish: ["Montserrat", "sans-serif"],
      times: ["Times New Roman", "Times", "sans-serif"],
      traver: ["TT Travels Next Trl", "sans-serif"],
      // travel: []
    },
    extend: {
      aspectRatio: {
        "3/1": "2.84 / 1",
        "4/3": "4 / 3",
        "5/3": "5 / 3",
        "2/1": "2 / 1",
        "10/4": "10 / 4",
        "10/5": "10 / 5",
        "12/4": "12 / 4",
        "14/9": "14 / 9",
      },
    },
    colors: {
      maingreen: "#D3F920",
      mainblack: "#131313",
      darkgrey: "#898989",
    },
    screens: {
      xs: { max: "767px" },
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1980px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    // screens: {
    //   x19l: { min: "1536px" },
    //   // "2xlmin": { min: "1535px" },
    //   "2xl": { max: "1535px" },
    //   // => @media (max-width: 1535px) { ... }

    //   xl: { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }

    //   mlg: { min: "1023px" },
    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: "639px" },
    //   ml: { max: "425px" },
    //   // => @media (max-width: 639px) { ... }
    // },
  },
  plugins: [],
});
