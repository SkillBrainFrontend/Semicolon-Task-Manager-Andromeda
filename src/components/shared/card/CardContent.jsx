import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
	"&.MuiCard-root": {
		margin: 10,
		borderRadius: 12,
		padding: theme.spacing(2),
		backgroundColor: "Color Hex White",
	},
}));

export default StyledCard;
