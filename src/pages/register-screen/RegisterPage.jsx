import * as React from "react";

import { Box, Grid, Typography } from "@mui/material";

import { WelcomePlaceholder } from "../../components";
import { Button } from "../../components/shared";

import CreateAccountForm from "./components/createAccountForm/CreateAccountForm";

export default function WelcomeScreen() {
	return (
		<Grid component="main" container sx={{ height: "100vh" }}>
			<Grid item md={6} sm={5} xs={false}>
				<WelcomePlaceholder
					message="Take your productivity to the next level."
					position="left"
					actionButton={{
						buttonLabel: "Create account",
						onActionClick: () => {
							console.log("s-a dat click");
						},
					}}
				/>
			</Grid>
			<Grid
				item
				md={6}
				sm={7}
				xs={12}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-end",
				}}
			>
				<Button
					href="/login"
					size="small"
					sx={{ mx: 5, my: 8, fontWeight: 500 }}
					variant="outlined"
				>
					Log In
				</Button>

				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<Typography component="h1" sx={{ fontWeight: 700 }} variant="h5">
						Create an Account
					</Typography>
					<Typography sx={{ fontSize: 10, lineHeight: 1.25, mb: 3 }}>
						It’s Simpe and Easy!!
					</Typography>
					<CreateAccountForm />
				</Box>
			</Grid>
		</Grid>
	);
}
