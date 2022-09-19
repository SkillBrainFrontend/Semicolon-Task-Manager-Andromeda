import * as React from "react";

import { Box, CssBaseline, Grid, Paper, Typography } from "@mui/material";

import Placeholder from "../../../assets/images/Placeholder.png";
import { Button } from "../../shared";
import CreateAccountForm from "../createAccountForm/CreateAccountForm";

export default function WelcomeScreen() {
	return (
		<Grid
			component="main"
			container
			sx={{ background: "default", height: "100vh" }}
		>
			<CssBaseline />
			<Grid
				item
				md={6}
				sm={4}
				xs={false}
				sx={{
					margin: 1.25,
					backgroundImage: `url(${Placeholder})`,
					backgroundRepeat: "no-repeat",
					// backgroundColor: (t) => t.palette.primary.main,
					backgroundSize: "cover",
					backgroundPosition: "center",
					borderRadius: 2,
				}}
			/>
			<Grid
				component={Paper}
				elevation={6}
				item
				md={5}
				sm={9}
				square
				xs={12}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-end",
				}}
			>
				<Button
					size="small"
					sx={{ mx: 4, my: 2, fontWeight: 500 }}
					variant="outlined"
				>
					Log In
				</Button>
				<Box
					sx={{
						my: 8,
						mx: 5,
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
