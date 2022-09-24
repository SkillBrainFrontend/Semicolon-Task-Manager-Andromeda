import React from "react";

import { Avatar, Button, Container, Stack, Typography } from "@mui/material";

import CardWidgetCalendar from "./CardWidgetCalendar";

function SidebarRight() {
	return (
		<Container
			variant="rounded"
			sx={{
				width: "30%",
				height: "100vh",
				margin: 5,
				backgroundColor: "#FFFFFF",
				border: "5px",
				padding: 10,
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
						marginTop: 5,
					}}
				>
					N
				</Avatar>
			</Stack>
			<Stack
				alignItems="center"
				direction="column"
				justifyContent="center"
				spacing={1}
			>
				<Typography
					sx={{ fontWeight: 700, fontSize: 20, color: "#101C56" }}
					variant="h6"
				>
					Name
				</Typography>
				<Typography
					sx={{ fontWeight: 400, fontSize: 14, color: "#666666" }}
					variant="h6"
				>
					Email
				</Typography>
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
