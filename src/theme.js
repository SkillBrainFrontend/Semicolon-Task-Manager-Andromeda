import { createTheme } from "@mui/material/styles";

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
			neutralgrey: "#6D6C6C",
			disabled: "#C2C4CF",
			grey: "#B9B9B9",
		},
		custom: {
			purple: "#8937DB",
			gray: "#808080",
			wine: "#B80020",
			dark: "#16171D",
			yellow: "#FBBE37",
			darkMode: "#16171D",
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
			ghostWhite: "#F2F4FD;",
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
		MuiCard: {
			defaultProps: {
				elevation: 0,
			},
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
				root: ({ ownerState }) => ({
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
		MuiCalendarPicker: {
			styleOverrides: {
				root: {
					showToolbar: false,
					margin: 0,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evently",
					textAlign: "start",
					padding: "0px",
					backgroundColor: "background.surface",
					width: "168px",
				},
			},
		},
		MuiPickersCalendarHeader: {
			styleOverrides: {
				labelContainer: {
					fontSize: "12.5px",
				},
				root: {
					paddingLeft: 0,
					paddingRight: 0,
				},
			},
		},

		MuiPickersArrowSwitcher: {
			styleOverrides: {
				spacer: {
					width: "0px",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: "5px",
				},
			},
		},
		MuiPickersFadeTransitionGroup: {
			styleOverrides: {
				root: {
					padding: "0 0 0 10px",
				},
			},
		},
		MuiPickerStaticWrapper: {
			styleOverrides: {
				content: {
					minWidth: "167px",
				},
				root: {
					minWidth: 0,
				},
			},
		},
		PrivatePickersSlideTransition: {
			styleOverrides: {
				root: {
					margin: "0 0 0 -10px",
				},
			},
		},
	},
});

export default theme;
