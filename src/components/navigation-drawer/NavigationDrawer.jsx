import * as React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, List, Stack } from "@mui/material";

import { Drawer, DrawerHeader, drawerWidth, workspaceArea } from "./helpers";
import NavigationListItem from "./NavigationListItem";
import { sideBarLinks } from "./sidebar-links";

function NavigationDrawer() {
	const [open, setIsOpen] = React.useState(true);
	const toggleDrawer = () => {
		setIsOpen((prev) => !prev);
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
