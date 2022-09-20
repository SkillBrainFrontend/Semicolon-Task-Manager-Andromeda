import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
	"&.MuiCard-root": {
		borderRadius: 16,
	},
}));

export default StyledCard;
