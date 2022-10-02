import * as React from "react";
import dayjs from "dayjs";

import { Box as Container, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function ActionBarComponentProps() {
	const [value, setValue] = React.useState(() => dayjs());

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StaticDatePicker
				onChange={(newValue) => setValue(newValue)}
				renderInput={(params) => <TextField {...params} />}
				showToolbar={false}
				value={value}
				componentsProps={{
					actionBar: {
						actions: ["disable"],
					},
				}}
			/>
		</LocalizationProvider>
	);
}
