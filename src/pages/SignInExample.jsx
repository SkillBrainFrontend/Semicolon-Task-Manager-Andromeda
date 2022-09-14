import * as React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
	Avatar,
	Box,
	Checkbox,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";

import { Button } from "../components/shared";

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
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<Grid component="main" container sx={{ height: "100vh" }}>
			<CssBaseline />
			<Grid
				item
				md={7}
				sm={4}
				xs={false}
				sx={{
					backgroundImage: "url(https://source.unsplash.com/random)",
					backgroundRepeat: "no-repeat",
					backgroundColor: (t) =>
						t.palette.mode === "light"
							? t.palette.grey[50]
							: t.palette.grey[900],
					backgroundSize: "cover",
					backgroundPosition: "center",
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
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 1 }}
					>
						{/* <FormControlLabel>Test</FormControlLabel> */}
						<TextField
							autoComplete="email"
							autoFocus
							error
							fullWidth
							helperText="Error"
							id="email"
							label="Email Address"
							margin="normal"
							name="email"
							required
						/>
						<TextField
							autoComplete="current-password"
							fullWidth
							id="password"
							label="Password"
							margin="normal"
							name="password"
							required
							type="password"
						/>
						<FormControlLabel
							control={<Checkbox color="primary" value="remember" />}
							label="Remember me"
						/>
						<Button
							fullWidth
							sx={{ mt: 3, mb: 2 }}
							type="submit"
							variant="contained"
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									Don&apos;t have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
						<Copyright sx={{ mt: 5 }} />
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}
