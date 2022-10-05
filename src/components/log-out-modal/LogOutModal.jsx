import React from "react";

import { Stack, Typography } from "@mui/material";

import { Button, Card } from "../shared";

function LogOutModal() {
	return (
		<Card>
			<Typography
				component="h1"
				sx={{ fontWeight: "bold", mb: 3 }}
				variant="h5"
			>
				You are about to LogOut
			</Typography>
			<Typography color="text.secondary" component="h1" variant="body1">
				Are you sure you delete the task{" "}
				<b>‘Create a Design System for Enum’</b> ? This task is in-progress?{" "}
			</Typography>

			<Stack
				alignItems="center"
				direction="row"
				flexWrap="wrap"
				gap={2}
				justifyContent="flex-start"
			>
				<Button
					sx={{ mt: 2, mb: 2, textTransform: "none" }}
					type="submit"
					variant="contained"
				>
					<b>No, This was a Mistake </b>
				</Button>

				<Button
					color="secondary"
					sx={{ mt: 3, mb: 2, textTransform: "none" }}
					type="submit"
					variant="outlined"
				>
					<b>Yes, Log Me Out</b>
				</Button>
			</Stack>
		</Card>
	);
}
export default LogOutModal;
