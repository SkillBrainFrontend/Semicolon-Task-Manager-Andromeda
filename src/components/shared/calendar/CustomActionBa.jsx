import { DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCustomActionBar = styled(DialogActions)(() => ({
	"&.MuiDialogActions-root": {
		borderRadius: "16px",
		padding: "10px 0px",
	},
}));

export default StyledCustomActionBar;
