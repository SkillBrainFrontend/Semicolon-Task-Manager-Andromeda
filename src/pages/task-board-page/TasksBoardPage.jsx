import React from "react";

import { Box, Typography } from "@mui/material";

import { withNavigationDrawer } from "../../components/navigation-drawer/withNavigationDrawer";

function TasksBoardPage() {
	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
			}}
		>
			<Typography variant="h3">Tasks</Typography>
		</Box>
	);
}

export default withNavigationDrawer(TasksBoardPage);
