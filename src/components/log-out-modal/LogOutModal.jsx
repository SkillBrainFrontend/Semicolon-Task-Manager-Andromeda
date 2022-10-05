import React from "react";

import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Button, Card } from "../shared";

function LogOutModal() {
	const theme = useTheme();

	return (
		<Card>
			<Typography
				component="h1"
				sx={{ fontWeight: "bold", mb: 3 }}
				variant="h5"
			>
				You are about to LogOut
			</Typography>
			<Typography
				color="text.secondary"
				component="h1"
				sx={{ fontWeight: "bold" }}
				variant="body1"
			>
				Are you sure you delete the task ‘Create a Design System for Enum’ ?
				This task is in-progress?{" "}
			</Typography>

			<Stack
				alignItems="center"
				direction="row"
				justifyContent="flex-start"
				spacing={2}
				sx={{ width: "100%", padding: theme.spacing(3, 0) }}
			>
				<Button sx={{ mt: 2, mb: 2 }} type="submit" variant="contained">
					No, This was a Mistake{" "}
				</Button>

				<Button
					color="secondary"
					sx={{ mt: 3, mb: 2 }}
					type="submit"
					variant="outlined"
				>
					Yes, Log Me Out
				</Button>
			</Stack>
		</Card>
	);
}
export default LogOutModal;
