import * as React from "react";

import { Box, Grid, Typography } from "@mui/material";

import { WelcomePlaceholder } from "../components";

import LoginForm from "./components/loginForm/LoginForm";

export default function SignInSide() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end",
			}}
		>
			<Grid
				component="main"
				container
				sx={{
					height: "100vh",
				}}
			>
				<Grid
					item
					md={6}
					sm={7}
					xs={12}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							my: 8,
							mx: 5,
						}}
					>
						<Typography component="h1" sx={{ fontWeight: 600 }} variant="h5">
							Welcome Back
						</Typography>
						<LoginForm />
					</Box>
				</Grid>
				<Grid item md={6} sm={5} xs={false}>
					<WelcomePlaceholder
						message="Take your productivity to the next level."
						position="right"
						actionButton={{
							buttonLabel: "Create account",
							onActionClick: () => {
								console.log("s-a dat click");
							},
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
