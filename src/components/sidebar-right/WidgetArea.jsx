import React, { useState } from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import Calendar from "../calendar/Calendar";
import { Card } from "../shared";

import CalendarWidget from "./widgets/CalendarWidget";
import ReminderWidget from "./widgets/ReminderWidget";

function WidgetCalendar() {
	const [tabId, setTabId] = useState();
	const [alignment, setAlignment] = React.useState("calendar");

	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
		setTabId(event.currentTarget.id);
	};

	return (
		<Card
			variant="outlined"
			sx={{
				maxWidth: 345,
				backgroundColor: "#F5F7FE",
				marginTop: 10,
				border: "none",
			}}
		>
			<ToggleButtonGroup
				aria-label="Platform"
				exclusive
				onChange={handleChange}
				size="small"
				sx={{}}
				value={alignment}
			>
				<ToggleButton id="calendar" value="calendar">
					Calendar
				</ToggleButton>
				<ToggleButton id="reminder" value="reminder">
					Reminder
				</ToggleButton>
			</ToggleButtonGroup>
			{tabId === "calendar" ? <Calendar /> : <ReminderWidget />}
		</Card>
	);
}

export default WidgetCalendar;
