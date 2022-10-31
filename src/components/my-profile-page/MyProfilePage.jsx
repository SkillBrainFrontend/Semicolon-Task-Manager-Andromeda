import React from "react";

import { Container, Box, Stack, Avatar, Tab, Tabs } from "@mui/material";
import { Input } from "../shared";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Typography from "@mui/material/Typography";

export default function MyProfilePage() {
	return (
		<Container maxWidth="fit-content">
			<Box sx={{ backgroundColor: " #F6F7F9", height: "100vh" }}>
				<Input label="search" />
				<NotificationsOutlinedIcon
					sx={{
						align: "right",
					}}
				/>
				<Stack
					spacing={4}
					sx={{
						backgroundColor: "#16171D",
						height: "100px",
						borderRadius: "12px",
						position: "relative",
						marginTop: "32px",
					}}
				>
					<Avatar
						spacing={8}
						variant="rounded"
						sx={{
							bgcolor: "black",
							height: 100,
							width: 100,
							fontsize: 100,
							position: "absolute",
							left: 20,
							marginTop: "-16px",
							borderColor: "white",
							border: "5px",
							zIndex: "10",
						}}
					>
						N
					</Avatar>
					<Typography variant="h5" sx={{ color: "white" }}>
						Name
					</Typography>
				</Stack>
				<Box sx={{ width: "100%", borderBottom: 1, borderColor: "info" }}>
					<Tabs textColor="info" indicatorColor="info">
						<Tab value="tasks" label="Tasks" />
					</Tabs>
				</Box>
			</Box>
		</Container>
	);
}
