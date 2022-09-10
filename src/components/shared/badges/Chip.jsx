import { styled } from "@mui/material/styles";
import { Chip } from '@mui/material/';

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius:20,
	"&.MuiChip-sizeLarge1": {
		padding: 0,
		background:theme.palette.normal.main,
		color: theme.palette.primary.main,
	},
	"&.MuiChip-sizeLarge2": {
		padding: 0,
		background:theme.palette.error.main,
		color: theme.palette.normal.main,
	},
	"&.MuiChip-sizeLarge3": {
		padding: 0,
		background:theme.palette.primary.main,
		color: theme.palette.normal.main,
	},
	"&.MuiChip-sizeSmall1": {
		background:theme.palette.normal.main,
		padding: "15px 0px",
		color: theme.palette.secondary.main,
	},
	"&.MuiChip-sizeSmall2": {
		background:theme.palette.normal.main,
		padding: "15px 0px",
		color: theme.palette.primary.main,
	},
	"&.MuiChip-sizeSmall3": {
		background:theme.palette.error.main,
		padding: "15px 0px",
		color: theme.palette.normal.main,
	},
	"&.MuiChip-sizeSmall4": {
		background:theme.palette.primary.main,
		padding: "15px 0px",
		color: theme.palette.normal.main,
	},
	"&.MuiChip-sizePending": {
		background:theme.palette.normal.light,
		padding: "15px 0px",
		color: theme.palette.warning.main,
	},
	"&.MuiChip-sizeInProgress": {
		background:theme.palette.normal.main,
		padding: "15px 0px",
		color: theme.palette.primary.main,
	},
	"&.MuiChip-sizeInReview": {
		background:theme.palette.normal.main,
		padding: "15px 0px",
		color: theme.palette.info.main,
	},
	"&.MuiChip-sizeCompleted": {
		background:theme.palette.normal.light,
		padding: "15px 0px",
		color: theme.palette.success.main,
	},
	"&.MuiChip-sizeUnassigned": {
		background:theme.palette.normal.main,
		padding: "15px 0px",
		color: theme.palette.error.main,
	},
	"&.MuiChip-sizeUnassigned2": {
		background:theme.palette.normal.main,
		padding: "15px 0px",
		color: theme.palette.text.disabled,
	},
}));
export default StyledChip;