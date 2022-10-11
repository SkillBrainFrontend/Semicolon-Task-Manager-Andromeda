import React from "react";
import { useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";

import { TaskCard } from "../../../components";
import EmptyTaskList from "../empty-task-list/EmptyTaskList";

function TaskViewer() {
	const tasks = useSelector((state) => state.entities.tasks);

	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
			}}
		>
			{tasks.length > 0 ? (
				<Grid
					container
					spacing={2}
					sx={{
						display: "grid",
						maxHeight: "60vh",
						overflow: "auto",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gridAutoRows: "minmax(min-content, max-content)",
					}}
				>
					{tasks.map((item) => (
						<Grid item key={item.id} xs="auto">
							<TaskCard id={item.id} name={item.name} status={item.status} />
						</Grid>
					))}
				</Grid>
			) : (
				<EmptyTaskList />
			)}
		</Box>
	);
}

export default TaskViewer;
