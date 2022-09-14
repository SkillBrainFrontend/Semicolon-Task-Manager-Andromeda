import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInput = styled(TextField)(({ theme }) => ({
	"&.Mui-error": {
		backgroundColor: theme.palette.error.light,
	},
}));

export default StyledInput;
