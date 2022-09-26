import React from "react";

import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";

import SidebarRight from "../sidebar-right/SidebarRight";

import NavigationSidebar from "./NavigationDrawer";

export const withNavigationDrawer = (Component) => (props) =>
	(
		<Box
			sx={{
				display: "flex",
				background: (theme) => theme.palette.background.surface,
			}}
		>
			<NavigationSidebar />

			<Grid container>
				<Grid
					item
					xs
					sx={{
						flexGrow: 1,
						overflowX: "auto",
						padding: (t) => t.spacing(3),
					}}
				>
					<Container>
						<Component {...props} />
					</Container>
				</Grid>
				<Grid
					item
					xs="auto"
					sx={{
						padding: (t) => t.spacing(3, 3, 3, 0),
					}}
				>
					<SidebarRight />
				</Grid>
			</Grid>
		</Box>
	);
