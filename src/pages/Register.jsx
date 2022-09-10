import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";

function RegisterPage() {
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Grid container spacing={0} columns={12}>
				<Grid xs={6}>
					<Container>
						<Typography>Placeholder</Typography>
					</Container>
				</Grid>

				<Grid xs={6}>
					<Container>
						<Typography>Register Form</Typography>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}

export default RegisterPage;
