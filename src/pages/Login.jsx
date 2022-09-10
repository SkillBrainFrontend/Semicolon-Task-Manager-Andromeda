import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";

function LoginPage() {
	return (
		<Box sx={{ flexGrow: 1, border: "1px solid red" }}>
			<Grid
				justifyContent="center"
				alignItems="stretch"
				container
				spacing={0}
				columns={12}
			>
				<Grid xs={6}>
					<Container>
						<Typography>Placeholder</Typography>
					</Container>
				</Grid>

				<Grid xs={6}>
					<Container>
						<Typography>Login Form</Typography>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}

export default LoginPage;
