import React from "react";

import { Chip } from "../shared";

function ChipStatus(status) {
	const getBadgeStyle = () => {
		switch (status) {
			case "Pending":
				return "yellow";
			case "In Progress":
				return "primary";
			case "In Review":
				return "accent";
			case "Completed":
				return "success";
			case "Unassigned":
				return "wine";
			default:
				return "custome.grey";
		}
	};
	return (
		<Chip
			extraColor={getBadgeStyle()}
			size="small"
			status={status}
			variant="outlined"
		/>
	);
}

export default ChipStatus;
