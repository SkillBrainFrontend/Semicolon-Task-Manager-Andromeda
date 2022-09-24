import React from "react";

import { Stack, Typography, Button, Container } from "@mui/material";

export default function ForgotPass() {
	return (
		<Container sx={{ display: "flex", flexWrap: "wrap" }}>
			<Stack>
				<Typography gutterBottom variant="h5">
					Forgot Password?
				</Typography>
				<Typography gutterBottom variant="body1">
					We are sorry to hear that happen. Don't be sad, we could help you get
					back to your productivity
				</Typography>
			</Stack>
			<Stack>
				<Typography></Typography>
				<Input
					autoComplete="email"
					autoFocus
					error={errors.email}
					fullWidth
					helperText={errors.email}
					id="email"
					label="Email Address"
					margin="normal"
					name="email"
					required
				/>
			</Stack>
			<Stack>
				<Button size="medium" variant="contained">
					Next
				</Button>
			</Stack>
			<Stack>
				<Alert
					onClose={() => {}}
					severity="warning"
					variant="outline"
					sx={{
						width: 350,
					}}
				>
					<AlertTitle>HalloMano!</AlertTitle>
					You will be sent a recovery link to your email!
				</Alert>
			</Stack>
		</Container>
	);
}
