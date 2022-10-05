import React from "react";

import { Typography } from "@mui/material";

import { Button, Card } from "../shared";

function DeleteTask() {
	return (
		<Card>
			<Typography sx={{ fontWeight: "bold", mb: 3 }} variant="h5">
				Delete Task
			</Typography>
			<Typography
				color="text.secondary"
				sx={{ fontWeight: "bold" }}
				variant="body1"
			>
				Are you sure you delete the task ‘Create a Design System for Enum’ ?
				This task is in-progress?{" "}
			</Typography>

			<Button sx={{ mt: 5, mb: 4, mr: 3 }} type="submit" variant="contained">
				No
			</Button>

			<Button
				color="secondary"
				sx={{ mt: 3, mb: 2 }}
				type="submit"
				variant="outlined"
			>
				Yes
			</Button>
		</Card>
	);
}
export default DeleteTask;
