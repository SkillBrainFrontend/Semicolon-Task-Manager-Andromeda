import React from "react";
import { useSelector } from "react-redux";

import { Avatar, Stack, Typography } from "@mui/material";

import { Button, Card } from "../shared";

import WidgetArea from "./WidgetArea";

function SidebarRight() {
	const loggedUser = useSelector((state) => state.app.auth.loggedUser.userInfo);

	const getInitials = () =>
		loggedUser?.fullName
			.split(" ")
			.map((item) => item[0])
			.join(".");

	return (
		<Card
			variant="rounded"
			sx={{
				width: "260px",
				height: (theme) => `calc(100vh - 2 * ${theme.spacing(3)})`,
				flexShrink: 0,
				position: "sticky",
				top: (t) => t.spacing(3),
			}}
		>
			<Stack
				alignItems="center"
				direction="column"
				justifyContent="center"
				spacing={2}
			>
				<Avatar
					src={loggedUser?.profilePicture}
					variant="rounded"
					sx={{
						bgcolor: "black",
						height: 100,
						width: 100,
						fontsize: 100,
						marginTop: 5,
					}}
				>
					{getInitials()}
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
					{loggedUser?.fullName}
				</Typography>
				<Typography
					sx={{ fontWeight: 400, fontSize: 14, color: "#666666" }}
					variant="h6"
				>
					{loggedUser?.email}
				</Typography>
			</Stack>
			<Stack
				alignItems="center"
				direction="column"
				justifyContent="center"
				spacing={2}
			>
				<Button
					href="#contained-buttons"
					size="small"
					sx={{ width: "100px" }}
					variant="contained"
				>
					My profile
				</Button>
			</Stack>

			<WidgetArea />
		</Card>
	);
}

export default SidebarRight;
