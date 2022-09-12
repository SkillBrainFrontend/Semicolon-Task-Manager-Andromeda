import React from "react";
import {
	Box,
	Grid,
	Avatar,
	Typography,
	TextField,
	FormControlLabel,
	Link,
	Checkbox,
	Button,
	Paper,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function LoginPage() {
	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={6}
				justifyContent="center"
				alignContent="stretch"
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "stretch",
					padding: "20px",
				}}
			>
				<Box
					sx={{
						flex: 1,
						backgroundColor: "#3754DB",
						borderRadius: "32px",
						display: "flex",
						justifyContent: "center",
						alingItems: "stretch",
					}}
				>
					<Typography>Test</Typography>
				</Box>
			</Grid>
			<Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
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
						// onSubmit={handleSubmit}
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="/test" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="/register" variant="body2">
									Don`t have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
						{/* <Copyright sx={{ mt: 5 }} /> */}
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}

export default LoginPage;
