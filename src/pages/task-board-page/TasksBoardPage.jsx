import React from "react";
import { useSelector } from "react-redux";

import { Box, Grid, Typography } from "@mui/material";

import { TaskCard } from "../../components";
import { withNavigationDrawer } from "../../components/navigation-drawer/withNavigationDrawer";

function TasksBoardPage() {
	const tasks = useSelector((state) => state.entities.tasks);

	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
			}}
		>
			<Typography variant="h3">Tasks</Typography>
			<Grid container justifyContent="space-between" spacing={2}>
				{tasks.map((item) => (
					<Grid item key={item.id} xs="auto">
						<TaskCard id={item.id} name={item.name} status={item.status} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default withNavigationDrawer(TasksBoardPage);
