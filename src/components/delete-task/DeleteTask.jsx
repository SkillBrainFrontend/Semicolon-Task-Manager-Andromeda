import React from "react";

import { Stack, Typography } from "@mui/material";

import { Button, Card } from "../shared";

function DeleteTask() {
	return (
		<Card>
			<Typography sx={{ fontWeight: "bold", mb: 3 }} variant="h5">
				Delete Task
			</Typography>
			<Typography color="text.secondary" variant="body1">
				Are you sure you delete the task{" "}
				<b>‘Create a Design System for Enum’</b> ? This task is in-progress?{" "}
			</Typography>

			<Stack
				alignItems="center"
				direction="row"
				flexWrap="wrap"
				gap={1}
				justifyContent="flex-start"
			>
				<Button
					sx={{ mt: 5, mb: 4, mr: 3, textTransform: "none" }}
					type="submit"
					variant="contained"
				>
					<b>No</b>
				</Button>

				<Button
					color="secondary"
					sx={{ mt: 3, mb: 2, textTransform: "none" }}
					type="submit"
					variant="outlined"
				>
					<b>Yes</b>
				</Button>
			</Stack>
		</Card>
	);
}
export default DeleteTask;
