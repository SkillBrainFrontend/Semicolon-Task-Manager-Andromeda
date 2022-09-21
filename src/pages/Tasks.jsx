import React from "react";
import { Link } from "react-router-dom";

import { Container, Typography } from "@mui/material";

function Tasks() {
	return (
		<div>
			<Container>
				<Link to="/test">
					<Typography to="/test" variant="h1">
						Tasks
					</Typography>
				</Link>
			</Container>
		</div>
	);
}

export default Tasks;
