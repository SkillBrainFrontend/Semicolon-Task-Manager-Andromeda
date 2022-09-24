import React from "react";

import { Avatar, Stack, Typography, Button, Container } from "@mui/material";
import CardWidgetCalendar from "./CardWidgetCalendar";

function SidebarRight() {
	return (
		<Container
			variant="rounded"
			sx={{
				width: "30%",
				height: "100vh",
				margin: 0,
				backgroundColor: "#FFFFFF",
				border: "5px",
			}}
		>
			<Stack
				alignItems="center"
				direction="column"
				justifyContent="center"
				spacing={2}
			>
				<Avatar
					variant="rounded"
					sx={{
						bgcolor: "black",
						height: 100,
						width: 100,
						fontsize: 100,
					}}
				>
					N
				</Avatar>
			</Stack>
			<Stack
				alignItems="center"
				direction="column"
				justifyContent="center"
				spacing={2}
			>
				<Typography variant="h6">Name</Typography>
				<Typography variant="h6">Email</Typography>
			</Stack>
			<Stack
				alignItems="center"
				direction="column"
				justifyContent="center"
				spacing={2}
			>
				<Button href="#contained-buttons" variant="contained">
					My profile
				</Button>
			</Stack>

			<CardWidgetCalendar />
		</Container>
	);
}

export default SidebarRight;
