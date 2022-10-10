import * as React from "react";
import dayjs from "dayjs";

import { Box, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function ActionBarComponentProps() {
	const [value, setValue] = React.useState(() => dayjs());
	const DATE_SIZE = 25;
	const converted = { ".css-dyzc7t > div": { minWidth: "0" } };

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Box
				sx={{
					"& > div": {
						minWidth: DATE_SIZE * 9,
					},
					"& > div > div, & > div > div > div, & .MuiCalendarPicker-root": {
						width: DATE_SIZE * 6.6,
					},
					"& .MuiTypography-caption": {
						width: DATE_SIZE,
						margin: 0,
					},
					"& .PrivatePickersSlideTransition-root": {
						minHeight: DATE_SIZE * 7,
					},
					'& .PrivatePickersSlideTransition-root [role="row"]': {
						margin: 0,
					},
					"& .MuiPickersDay-dayWithMargin": {
						margin: 0,
					},
					"& .MuiPickersDay-root": {
						width: DATE_SIZE,
						height: DATE_SIZE,
					},
					"& .MuiBox-root": {
						width: converted,
						backgroundColor: "red",
					},
				}}
			>
				<StaticDatePicker
					displayStaticWrapperAs="desktop"
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
			</Box>
		</LocalizationProvider>
	);
}
