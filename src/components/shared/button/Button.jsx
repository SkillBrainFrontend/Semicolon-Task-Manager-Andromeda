import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
	"&.MuiButton-root": {
		borderRadius: 12,
		fontSize: 16,
		lineHeight: "19px",
		fontWeight: 500,
	},
	"&.MuiButton-sizeLarge": {
		padding: theme.spacing(2.3, 9.2),
		fontWeight: 900,
	},
	"&.MuiButton-sizeMedium": {
		padding: theme.spacing(2, 9.2),
	},
	"&.MuiButton-sizeSmall": {
		padding: theme.spacing(1.3, 9.2),
		fontSize: 14,
	},
	"&.MuiButton-outlined": {
		borderWidth: 1.7,
	},
	"&.Mui-disabled.MuiButton-contained": {
		color: "#FFFFFF",
		backgroundColor: "#D7DDF8",
	},
	"&.Mui-disabled.MuiButton-outlined": {
		color: "#D7DDF8",
		borderColor: "#D7DDF8",
	},
	"&.Mui-disabled.MuiButton-text": {
		color: "#D7DDF8",
		borderColor: "#D7DDF8",
	},
}));

export default StyledButton;
