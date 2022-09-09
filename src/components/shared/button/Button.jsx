import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: 12,
	"&.MuiButton-sizeLarge": {
		padding: "19px 36px",
	},
	"&.MuiButton-sizeMedium": {
		padding: "15px 30px",
	},
	"&.MuiButton-sizeSmall": {
		padding: "11px 22px",
	},
	"&.MuiButton-link": {
		color: theme.palette.primary.main,
	},
	"&.Mui-disabled": {
		color: "#FFFFFF",
		backgroundColor: "#D7DDF8",
	},
}));

export default StyledButton;
