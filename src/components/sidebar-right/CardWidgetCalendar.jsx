import React from "react";

import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";

import Calendar from "../calendar/Calendar";

function WidgetCalendar() {
	return (
		<Card
			variant="outlined"
			sx={{
				maxWidth: 345,
				backgroundColor: "#F5F7FE",
				marginTop: 10,
			}}
		>
			<CardContent>
				<CardActions sx={{ display: "flex", flexDirection: "row" }}>
					<Button size="large" variant="contained">
						<Typography display="block" gutterBottom variant="button">
							Calendar
						</Typography>
					</Button>
					<Button disabled size="large" variant="contained">
						<Typography display="block" gutterBottom variant="caption">
							Reminder
						</Typography>
					</Button>
				</CardActions>
			</CardContent>
			<CardContent>
				<Typography gutterBottom variant="h6">
					<Calendar />
				</Typography>
			</CardContent>
		</Card>
	);
}

export default WidgetCalendar;
