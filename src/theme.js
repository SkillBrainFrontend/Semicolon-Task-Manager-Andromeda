/* eslint-disable no-unused-vars */
import { alpha, createTheme } from "@mui/material/styles";

import GelionBold from "./assets/fonts/Gelion Bold.woff";
import GelionLight from "./assets/fonts/Gelion Light.woff";
import GelionRegular from "./assets/fonts/Gelion Regular.woff";

const theme = createTheme({
	palette: {
		primary: {
			main: "#3754DB",
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
		accent: {
			main: "#8937DB",
			light: "#be68ff",
			dark: "#5400a8",
			contrastText: "#ffffff",
		},
		text: {
			primary: "#16171D",
			secondary: "#62667E",
			disabled: "#C2C4CF",
		},
		custom: {
			purple: "#8937DB",
			gray: "#808080",
			wine: "#B80020",
			dark: "#16171D",
			yellow: "#FBBE37",
		},
		neutral: {
			main: "#999999",
		},
		default: {
			main: "#808080",
		},
		background: {
			surface: "#F5F7FE",
			paper: "#FFFFFF",
			default: "#FFFFFF",
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
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: ({ ownerState, theme: appTheme }) => ({
					"&:hover.MuiButton-contained": {
						boxShadow: appTheme.shadows[5],
						backgroundColor: appTheme.palette[ownerState.color].main,
					},
				}),
			},
		},
		MuiAlertTitle: {
			styleOverrides: {
				root: {
					margin: 0,
					marginBottom: 0,
					fontSize: 18,
					lineHeight: "21px",
				},
			},
		},
		MuiOutlinedInput: {
			defaultProps: {
				notched: false,
			},
			styleOverrides: {
				root: ({ theme: appTheme, ownerState }) => ({
					borderRadius: `12px`,
					background: ownerState.error ? "#FFFAFA" : "#FBFBFE",
					"&.Mui-focused": {
						background: "white",
					},
				}),
				input: ({ theme: appTheme }) => ({
					fontWeight: 400,
					fontSize: 16,
					lineHeight: "21px",
					padding: appTheme.spacing(2),
					borderRadius: `12px`,
					"&.MuiInputBase-inputSizeSmall": {
						padding: "10px 14px",
						"&.MuiInputBase-inputAdornedStart": {
							paddingLeft: 0,
						},
					},
				}),
				inputAdornedStart: {
					paddingLeft: 4,
				},
			},
		},
		MuiInputLabel: {
			defaultProps: {
				disableAnimation: true,
				shrink: true,
			},
			styleOverrides: {
				root: {
					backgroundColor: "transparent",
					position: "relative",
					left: "-15px",
					top: 10,
					fontSize: 16,
					fontWeight: 400,
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					margin: 0,
				},
			},
		},
	},
});

export default theme;
