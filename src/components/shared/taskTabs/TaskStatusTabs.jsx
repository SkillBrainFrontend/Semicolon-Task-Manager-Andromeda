import * as React from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import StyledTab from "./Tab";

export default function TaskStatusTabs() {
	const [value, setValue] = React.useState("one");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const tabValues = [
		"All tasks",
		"Pending",
		"In progress",
		"Completed",
		"Unnasigned",
	];

	return (
		<Box sx={{ width: "100%" }}>
			<Tabs
				aria-label="secondary tabs example"
				indicatorColor="primary"
				onChange={handleChange}
				textColor="primary"
				textTransform="none"
				value={value}
			>
				{tabValues.map((values, i) => (
					<StyledTab
						iconPosition="end"
						label={values}
						value={i}
						wrapped
						icon={
							<Box
								sx={{
									backgroundColor: "rgba(240, 240, 240, 1)",
									borderRadius: "12px",
									border: "1px solid rgba(240, 240, 240, 1)",
									minHeight: "24px",
									minWidth: "31px",
									textAlign: "center",
								}}
							>
								<Typography
									sx={{ fontSize: "12px", padding: "2px", fontWeight: "500" }}
								>
									1
								</Typography>
							</Box>
						}
					/>
				))}
				;
			</Tabs>
		</Box>
	);
}
