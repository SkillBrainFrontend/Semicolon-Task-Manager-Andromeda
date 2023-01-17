import React, { useState } from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { Card } from "../shared";

import CalendarWidget from "./widgets/CalendarWidget";
import ReminderWidget from "./widgets/ReminderWidget";

function WidgetCalendar() {
	const [tabId, setTabId] = useState("calendar");
	const [alignment, setAlignment] = useState("calendar");

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
				value={alignment}
				sx={{
					"&.Mui-select": {
						backgroundColor: "black",
					},
				}}
			>
				<ToggleButton
					id="calendar"
					selected={tabId === "calendar"}
					value="calendar"
				>
					Calendar
				</ToggleButton>
				<ToggleButton
					id="reminder"
					selected={tabId === "reminder"}
					value="reminder"
				>
					Reminder
				</ToggleButton>
			</ToggleButtonGroup>
			{tabId === "calendar" ? <CalendarWidget /> : <ReminderWidget />}
		</Card>
	);
}

export default WidgetCalendar;
