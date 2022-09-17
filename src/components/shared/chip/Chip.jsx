import { Chip } from "@mui/material/";
import { alpha, styled } from "@mui/material/styles";

const StyledChip = styled(Chip, {
	/*
	 Make MUI aware about new prop:
	*/
	shouldForwardProp: (prop) => prop !== "extraColor",
})(({ extraColor, theme }) => {
	/*
		Checking if extraColor is one of the main palette 
		or if it is found in the custom colors,
		fallback in default color
	*/
	const customColor =
		extraColor && theme.palette[extraColor]
			? theme.palette[extraColor].main
			: theme.palette.custom[extraColor] || theme.palette.default.main;
	return {
		"&.MuiChip-root": {
			fontWeight: 500,
		},
		"&.MuiChip-outlined": {
			background: alpha(customColor, 0.1),
			color: customColor,
			border: "none",
		},
	};
});

export default StyledChip;
