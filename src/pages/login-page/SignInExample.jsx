import * as React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
	Avatar,
	Box,
	CssBaseline,
	Grid,
	Link,
	Paper,
	Typography,
} from "@mui/material";

import PlacehoderBg from "../../assets/icons/screen-placeholder.svg";

import LoginForm from "./components/LoginForm";

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
			<CssBaseline />
			<Grid
				item
				md={7}
				sm={4}
				xs={false}
				sx={{
					backgroundImage: `url(${PlacehoderBg})`,
					backgroundRepeat: "no-repeat",
					backgroundColor: (t) => t.palette.primary.main,
					backgroundSize: "cover",
					backgroundPosition: "center",
					transform: "scaleX(-1)",
				}}
			/>
			<Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
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
