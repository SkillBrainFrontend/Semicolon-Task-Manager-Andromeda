import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid, Typography } from "@mui/material";

import { withNavigationDrawer } from "../../components/navigation-drawer/withNavigationDrawer";
import { Button, Card, GlobalSearchBar, Input } from "../../components/shared";

function SettingsPage() {
	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
			}}
		>
			<Grid
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					pb: "45px",
				}}
			>
				<GlobalSearchBar />
			</Grid>
			<Typography variant="h3">Settings</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}
			>
				<Button color="secondary" size="small" variant="contained">
					Log Out
				</Button>
			</Box>
			<Typography variant="h6">Account Settings</Typography>
			<Card>
				<Box
					component="form"
					padding="30px"
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
					}}
				>
					<Input margin="normal" placeholder="Fullname " />{" "}
					<PersonIcon color="primary" />
					<Input margin="normal" placeholder="Email Address " />
					<EmailIcon color="primary" />
					<Input margin="normal" placeholder="Password " type="password" />
					<PasswordIcon color="primary" />
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}
				>
					<Button size="small" type="submit" variant="contained">
						Edit
					</Button>
				</Box>
			</Card>
		</Box>
	);
}

export default withNavigationDrawer(SettingsPage);
