import * as React from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import StyledTab from "./Tab";

export default function TaskTabs() {
	const [value, setValue] = React.useState("one");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Tabs
				aria-label="Task tab"
				indicatorColor="primary"
				onChange={handleChange}
				textColor="primary"
				textTransform="none"
				value={value}
			>
				{["one", "two", "three", "four", "five", "six", "seven", "eight"].map(
					(item) => (
						<StyledTab label="Tab Content" value={item} wrapped />
					)
				)}
			</Tabs>
		</Box>
	);
}
