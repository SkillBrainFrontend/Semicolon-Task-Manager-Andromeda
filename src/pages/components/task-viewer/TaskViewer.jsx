import React from "react";
import { useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";

import { TaskCard } from "../../../components";
import EmptyTaskList from "../empty-task-list/EmptyTaskList";

function TaskViewer() {
	const tasks = useSelector((state) => state.entities.tasks.data);
	// .filter(
	// 	(item) => item.status === "PENDING"
	// );

	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
				mt: "20px",
			}}
		>
			{tasks.length > 0 ? (
				<Grid
					container
					spacing={2}
					sx={{
						display: "grid",
						maxHeight: "100vh",
						overflow: "scroll",
						gridAutoRows: "minmax(min-content,max-content)",
						gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
						scrollbarColor: "transparent transparent",
					}}
				>
					{tasks.map((item) => (
						<Grid item key={item.id} xs="auto">
							<TaskCard id={item.id} name={item.title} status={item.status} />
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
