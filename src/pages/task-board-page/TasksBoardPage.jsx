import React from "react";
import { useDispatch } from "react-redux";

import { Box, Typography } from "@mui/material";

import { withNavigationDrawer } from "../../components/navigation-drawer/withNavigationDrawer";
import { Button } from "../../components/shared";
import { openModal } from "../../store/app/app.slice";
import { modalTypes } from "../../store/app/constants";
import TaskViewer from "../components/task-viewer/TaskViewer";

function TasksBoardPage() {
	const dispatch = useDispatch();
	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
			}}
		>
			{" "}
			<Box height="200px" sx={{ backgroundColor: "red" }} width="100%">
				<Button
					href="#contained-buttons"
					onClick={() => dispatch(openModal(modalTypes.createTask))}
					size="medium"
					sx={{ marginTop: "24px", width: "213px" }}
					variant="contained"
				>
					Create Task
				</Button>
			</Box>
			<Typography variant="h3">Tasks</Typography>
			<TaskViewer />
		</Box>
	);
}

export default withNavigationDrawer(TasksBoardPage);
