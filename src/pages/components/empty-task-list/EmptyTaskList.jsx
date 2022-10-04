import React from "react";
import { useDispatch } from "react-redux";

import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import EmptyTaskListIcon from "../../../assets/images/EmptyTaskListIcon.svg";
import { Button } from "../../../components/shared";
import { openModal } from "../../../store/app/app.slice";
import { modalTypes } from "../../../store/app/constants";

function EmptyListMessage() {
	const dispatch = useDispatch();
	const theme = useTheme();

	return (
		<Grid
			container
			sx={{
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "60vh",
				paddingTop: "20px",
			}}
		>
			<Box sx={{ marginBottom: "40px" }}>
				<img alt="icon" className="tasks-logo" src={EmptyTaskListIcon} />
			</Box>

			<Typography sx={{ marginBottom: "12px" }} variant="h2">
				No Tasks Yet
			</Typography>
			<Typography sx={{ color: theme.palette.text.neutralgrey }} variant="h6">
				You have no task created in your workspace yet.
			</Typography>
			<Typography sx={{ color: theme.palette.text.neutralgrey }} variant="h6">
				Get productive. Create a Task Now.
			</Typography>
			<Button
				href="#contained-buttons"
				onClick={() => dispatch(openModal(modalTypes.createTask))}
				size="medium"
				sx={{ marginTop: "24px", width: "213px" }}
				variant="contained"
			>
				Create Task
			</Button>
		</Grid>
	);
}

export default EmptyListMessage;
