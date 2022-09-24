import React from "react";
import { Link } from "react-router-dom";

import { Box, Container, Typography } from "@mui/material";

function Tasks() {
	return (
		<Box>
			<Container
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<Link to="/test">
					<Typography to="/test" variant="h2">
						Tasks
					</Typography>
				</Link>
				<Link to="/register">
					<Typography to="/register" variant="h2">
						Register
					</Typography>
				</Link>
				<Link to="/login">
					<Typography to="/login" variant="h2">
						Login
					</Typography>
				</Link>
				<Link to="/test">
					<Typography to="/test" variant="h2">
						Test
					</Typography>
				</Link>
			</Container>
		</Box>
	);
}

export default Tasks;
