import { Chip } from "@mui/material/";
import { styled } from "@mui/material/styles";

const StyledChip = styled(Chip)(() => ({
	"&.MuiChip-root": {
		fontWeight: 500,
	},
}));

export default StyledChip;
