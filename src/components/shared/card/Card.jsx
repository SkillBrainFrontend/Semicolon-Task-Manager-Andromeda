import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
	"&.MuiCard-root": {
		borderRadius: "16px",
		fontSize: 16,
		padding: "24px",
	},
}));

export default StyledCard;
