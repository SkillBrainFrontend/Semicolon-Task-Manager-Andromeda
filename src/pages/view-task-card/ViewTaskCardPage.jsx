import React from "react";

import { Grid } from "@mui/material";

import ViewTaskCard from "../../components/view-task-card/ViewTaskCard";

function ViewTaskCardPage() {
	return (
		<Grid component="main" container sx={{ height: "100vh" }}>
			<Grid>
				<ViewTaskCard />
			</Grid>
		</Grid>
	);
}

export default ViewTaskCardPage;
