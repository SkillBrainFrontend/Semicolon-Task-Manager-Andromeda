import * as React from "react";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
	Badge,
	Box,
	IconButton,
	InputBase,
	Stack,
	styled,
} from "@mui/material";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "12px",
	border: "1px solid #A8ABBD",
	backgroundColor: "transparent",
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		width: "35%",
	},
}));

const SearchIconWrapper = styled("div")(() => ({
	color: "#000000",
	height: "100%",
	position: "absolute",
	right: 10,
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	borderRadius: "0.5em",
	color: "#4D5163",
	"& .MuiInputBase-input": {
		paddingLeft: `calc(1em + ${theme.spacing(2)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function GlobalSearchBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Stack direction="row" justifyContent="space-between">
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						inputProps={{ "aria-label": "search" }}
						placeholder="Search…"
					/>
				</Search>
				<IconButton
					aria-label="show 17 new notifications"
					color="inherit"
					size="large"
				>
					<Badge badgeContent={1} color="error">
						<NotificationsIcon color="primary" />
					</Badge>
				</IconButton>
			</Stack>
		</Box>
	);
}
