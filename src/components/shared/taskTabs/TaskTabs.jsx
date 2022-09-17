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
				<StyledTab label="Tab Content" value="one" wrapped />
				<StyledTab label="Tab Content" value="two" wrapped />
				<StyledTab label="Tab Content" value="three" wrapped />
				<StyledTab label="Tab Content" value="four" wrapped />
				<StyledTab label="Tab Content" value="five" wrapped />
				<StyledTab label="Tab Content" value="six" wrapped />
				<StyledTab label="Tab Content" value="seven" wrapped />
				<StyledTab label="Tab Content" value="eight" wrapped />
			</Tabs>
		</Box>
	);
}
