import React from "react";

import { Stack, Typography, useTheme } from "@mui/material";

import StyledButton from "../button/Button";

export default function TaskPannel() {
	const theme = useTheme();
	const dislayCreateButton = true;

	return (
		<Stack
			alignItems="center"
			direction="row"
			justifyContent="space-between"
			ml="2"
			mr="2"
			sx={{ width: "100%" }}
		>
			<Stack alignItems="flex-start" direction="column" justifyContent="center">
				<Typography
					color={theme.palette.primary.dark}
					gutterBottom
					variant="h4"
				>
					Tasks
				</Typography>
				<Typography
					color={theme.palette.text.secondary}
					gutterBottom
					variant="body1"
				>
					Your tasks in your place.
				</Typography>
			</Stack>

			{dislayCreateButton && (
				<StyledButton size="medium" variant="contained">
					Create task
				</StyledButton>
			)}
		</Stack>
	);
}
