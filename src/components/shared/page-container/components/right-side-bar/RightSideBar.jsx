import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
    // TESTTools
	border: "3px solid black",
	// 
    height: "100vh",
	padding: theme.spacing(1),
	textAlign: "center",
	alignItems: "center",
	color: theme.palette.text.secondary,
}));

export default function PageContainer() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={1} columns={3}>
				<Grid xs={3}>
                    <Item>
                        Right Side Bar
                    </Item>
				</Grid>
			</Grid>
		</Box>
	);
}
