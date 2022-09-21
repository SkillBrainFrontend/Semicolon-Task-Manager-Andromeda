import * as React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Grid, Link, Typography } from "@mui/material";

import { WelcomePlaceholder } from "../../components";

import LoginForm from "./components/loginForm/LoginForm";

function Copyright(props) {
	return (
		<Typography
			align="center"
			color="text.secondary"
			variant="body2"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://skillbrain.com/" target="_blank">
				SkillBrain
			</Link>{" "}
			{new Date().getFullYear()}.
		</Typography>
	);
}

export default function SignInSide() {
	return (
		<Grid component="main" container sx={{ height: "100vh" }}>
			<Grid item md={6} sm={5} xs={false}>
				<WelcomePlaceholder />
			</Grid>
			<Grid item md={6} sm={7} xs={12}>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<LoginForm />
					<Copyright sx={{ mt: 5 }} />
				</Box>
			</Grid>
		</Grid>
	);
}
