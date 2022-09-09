import { createTheme } from "@mui/material/styles";
import GelionRegular from "./assets/fonts/Gelion Regular.woff";
import GelionBold from "./assets/fonts/Gelion Bold.woff";
import GelionLight from "./assets/fonts/Gelion Light.woff";

const theme = createTheme({
	palette: {
		primary: {
			main: "#3754DB",
			light: "#F5F7FE",
		},
		secondary: {
			main: "#B80020",
			contrastText: "#FFF",
		},
		error: {
			main: "#FB151A",
		},
		warning: {
			main: "#EBA300",
		},
		info: {
			main: "#6684FF",
		},
		success: {
			main: "#00C271",
		},
		text: {
			primary: "#16171D",
			secondary: "#62667E",
			disabled: "#C2C4CF",
		},
	},
	typography: {
		fontFamily: "Gelion, Roboto, Arial",
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
            @font-face {
              font-family: 'Gelion';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Gelion'), local('Gelion-Regular'), url(${GelionRegular}) format('woff');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
                font-family: 'Gelion';
                font-style: bold;
                font-display: swap;
                font-weight: 700;
                src: local('Gelion'), local('Gelion-Bold'), url(${GelionBold}) format('woff');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              },
              @font-face {
                font-family: 'Gelion';
                font-style: light;
                font-display: swap;
                font-weight: 200;
                src: local('Gelion'), local('Gelion-Light'), url(${GelionLight}) format('woff');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
          `,
		},
	},
});

export default theme;
