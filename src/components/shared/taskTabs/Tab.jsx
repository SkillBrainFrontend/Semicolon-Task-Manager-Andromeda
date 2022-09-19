import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTab = styled(Tab)(({ theme }) => ({
	color: "rgba(128, 128, 128, 1)",
	fontSize: "1rem",
	letterSpacing: "-0.02em",
	lineHeight: theme.spacing(2.4),
	borderBottom: `0.1px solid ${theme.palette.text.disabled}`,
	textTransform: "none",
	height: "auto",
	gap: theme.spacing(2),
	padding: `${theme.spacing(1.2)} ${theme.spacing(2)}`,
	"&.MuiTab-root": {
		fontWeight: "400",
		minHeight: theme.spacing(6),
	},
	"&.Mui-selected": {
		fontWeight: "600",
	},
	"&.MuiTab-iconWrapper": {
		padding: "0",
	},
}));

export default StyledTab;
