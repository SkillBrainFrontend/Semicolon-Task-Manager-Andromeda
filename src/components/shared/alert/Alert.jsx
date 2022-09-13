import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAlert = styled(Alert)(({ theme }) => ({
	"&.MuiAlert-root": {
		borderRadius: 12,
		padding: theme.spacing(2),
		alignItems: "center",
		fontWeight: 300,
		fontSize: 12,
	},
	"&.MuiAlert-filledSuccess": {
		color: "white",
	},
	"&.MuiAlert-icon": {
		color: "white",
	},
	"&.MuiAlert-message": {
		margin: 0,
	},
}));

export default StyledAlert;
