import React from "react";
import { useDispatch } from "react-redux";

import { Box, Grid, Typography } from "@mui/material";

import { withNavigationDrawer } from "../../components/navigation-drawer/withNavigationDrawer";
import { Button, GlobalSearchBar } from "../../components/shared";
import TaskStatusTabs from "../../components/shared/taskTabs/TaskStatusTabs";
import { openModal } from "../../store/app/app.slice";
import { modalTypes } from "../../store/app/constants";
import TaskViewer from "../components/task-viewer/TaskViewer";

function TasksBoardPage() {
	const dispatch = useDispatch();
	return (
		<Grid
			component="main"
			sx={{
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<Grid
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					pb: "45px",
				}}
			>
				<GlobalSearchBar sx={{}} />
			</Grid>

			<Grid
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					pb: "45px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<Typography
						sx={{
							fontWeight: "600",
							fontSize: "32px",
							lineHeight: "38px",
							letterSpacing: "-0.02em",
							color: "#101C56",
						}}
					>
						Task
					</Typography>
					<Typography
						sx={{
							fontWeight: "400",
							fontSize: "20px",
							lineHeight: "24px",
							letterSpacing: "-0.02em",
							color: "#636363",
						}}
					>
						Your tasks in your space
					</Typography>
				</Box>

				<Button
					href="#contained-buttons"
					onClick={() => dispatch(openModal(modalTypes.createTask))}
					size="medium"
					sx={{ width: "169px" }}
					variant="contained"
				>
					Create Task
				</Button>
			</Grid>

			<TaskStatusTabs />
			<TaskViewer />
		</Grid>
	);
}

export default withNavigationDrawer(TasksBoardPage);
