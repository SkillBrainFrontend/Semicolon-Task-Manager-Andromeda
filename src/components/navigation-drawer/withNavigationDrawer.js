import React from "react";

import { Box } from "@mui/material";

import NavigationSidebar from "./NavigationDrawer";

export const withNavigationDrawer = (Component) => (props) =>
	(
		<Box sx={{ display: "flex" }}>
			<NavigationSidebar />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Component {...props} />
			</Box>
		</Box>
	);
