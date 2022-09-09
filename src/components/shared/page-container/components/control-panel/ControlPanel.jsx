import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#red" : "#fff",
	...theme.typography.body2,
	// TESTTools
	border: "3px solid blue",
	// 
	padding: theme.spacing(1),
	textAlign: "center",
	alignItems: "center",
	color: theme.palette.text.secondary,
}));

export default function ControlPanel() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={1} columns={9}>
				<Grid xs={3}>
                    <Item>
                        <h3>Control Panel</h3>
                    </Item>
				</Grid>

                <Grid xs={3}/>

                <Grid xs={3}>
                    <Item>
                        <h3>Control Panel</h3>
                    </Item>
				</Grid>
			</Grid>
		</Box>
	);
}
