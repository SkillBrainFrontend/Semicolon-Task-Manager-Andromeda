import React from "react";

import { Box } from "@mui/material";
import { Container } from "@mui/system";

import NavigationSidebar from "./NavigationDrawer";

export const withNavigationDrawer = (Component) => (props) =>
	(
		<Box sx={{ display: "flex", minHeight: "100vh" }}>
			<NavigationSidebar />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					background: (t) => t.palette.background.surface,
				}}
			>
				<Container>
					<Component {...props} />
				</Container>
			</Box>
		</Box>
	);
