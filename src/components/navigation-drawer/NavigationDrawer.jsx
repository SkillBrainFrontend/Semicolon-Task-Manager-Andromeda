import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, List, Stack } from "@mui/material";

import { tooggleSidebar } from "../../store/app/app.slice";

import { Drawer, DrawerHeader, drawerWidth, workspaceArea } from "./helpers";
import NavigationListItem from "./NavigationListItem";
import { sideBarLinks } from "./sidebar-links";

function NavigationDrawer() {
	const open = useSelector((state) => state.app.ui.sidebar.isOpen);
	const dispatch = useDispatch();

	const toggleDrawer = () => {
		dispatch(tooggleSidebar());
	};

	const location = useLocation();

	return (
		<Drawer open={open} variant="permanent">
			<Stack direction="row" flexGrow={1}>
				<Box
					flexGrow={1}
					flexShrink={0}
					sx={{
						width: workspaceArea,
						background: (theme) => theme.palette.primary.main,
						border: "none",
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
						{sideBarLinks.map((item) => (
							<NavigationListItem
								icon={item.icon}
								isOpen={open}
								key={item.label}
								link={item.link}
								selected={item.link === location.pathname}
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
