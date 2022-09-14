import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInput = styled(TextField)(() => ({
	"&.MuiOutlinedInput-root": {
		borderRadius: "12px",
	},
}));

export default StyledInput;
