import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import NavBar from "../nav-bar/NavBar";
import ControlPanel from "../control-panel/ControlPanel";
import FeedContent from "../feed-content/FeedContent";

// import FeedContent from "../feed-content/FeedContent"

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#red" : "#fff",
	...theme.typography.body2,
	// TESTTools
	border: "3px solid grey",
	// 
	height: "100vh",
	padding: theme.spacing(1),
	textAlign: "center",
	alignItems: "center",
	color: theme.palette.text.secondary,
}));

export default function PageContainer() {
	return (
		<Box sx={{ flexGrow: 1, direction: "row", }}>
			<Grid container spacing={1} columns={3}>
				<Grid xs={3}>
                    <Item>
                        <NavBar/>
						<ControlPanel/>
						<FeedContent/>
                    </Item>
				</Grid>
			</Grid>
		</Box>
	);
}
