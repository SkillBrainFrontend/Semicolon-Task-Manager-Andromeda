import * as React from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export function SelectButton() {
	const [priority, setPriority] = React.useState("");

	const handleChange = (event) => {
		setPriority(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Task Priority</InputLabel>
				<Select
					id="demo-simple-select"
					label="Age"
					labelId="demo-simple-select-label"
					onChange={handleChange}
					value={priority}
				>
					<MenuItem value={10}>Less Important</MenuItem>
					<MenuItem value={20}>Important</MenuItem>
					<MenuItem value={30}>Very important</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
