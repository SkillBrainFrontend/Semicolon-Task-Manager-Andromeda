import * as React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";

import NavigationListItem from "./NavigationListItem";
import { sideBarLinks } from "./sidebar-links";

const drawerWidth = 280;
const workspaceArea = 80;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(8)} + ${workspaceArea}px)`,
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(1),
	justifyContent: "flex-end",
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

function NavigationDrawer() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = () => {
		setOpen((prev) => !prev);
	};

	return (
		<Drawer open={open} variant="permanent">
			<Stack direction="row" flexGrow={1}>
				<Box
					flexGrow={1}
					flexShrink={0}
					sx={{
						width: workspaceArea,
						background: (theme) => theme.palette.primary.main,
					}}
				/>
				<Box>
					<DrawerHeader
						sx={{
							width: open ? drawerWidth - workspaceArea : 60,
						}}
					>
						<IconButton color="primary" onClick={toggleDrawer}>
							{!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
						</IconButton>
					</DrawerHeader>

					<List>
						{sideBarLinks.map((item, index) => (
							<NavigationListItem
								icon={item.icon}
								isOpen={open}
								key={item.label}
								link={item.link}
								selected={index === 3}
								text={item.label}
							/>
						))}
					</List>
				</Box>
			</Stack>
		</Drawer>
	);
}

export default NavigationDrawer;
