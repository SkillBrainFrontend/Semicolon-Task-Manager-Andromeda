import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

const StyledInput = styled(OutlinedInput)(({ theme }) => ({
	"&.MuiOutlinedInput-root": {
		"&:hover": { borderColor: theme.palette.input.main },
		borderRadius: 12,
		padding: 16,
		width: 350,
		height: 50,
		border: 0.7,
		borderColor: theme.palette.input.main,
		margin: 10,
		color: theme.palette.text.primary,
		fontWeight: 400,
		fontSize: 16,
	},

	"&.Mui-focused": {
		borderColor: theme.palette.input.focused.border,
		backgroundColor: theme.palette.input.focused.background,
		border: 1.3,
	},

	"&.Mui-disabled": {
		backgroundColor: theme.palette.input.disabled,
		borderColor: theme.palette.input.disabled,
		border: "0px",
	},

	"&.Mui-error": {
		backgroundColor: theme.palette.input.error.background,
		borderColor: theme.palette.error,
		border: 1.3,
		color: theme.palette.input.error.text,
	},
}));

export default StyledInput;
