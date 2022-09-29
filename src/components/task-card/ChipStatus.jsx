import React from "react";
import PropTypes from "prop-types";

import Chip from "../shared/chip/Chip";

function ChipStatus({ status }) {
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
			label={status}
			size="small"
			variant="outlined"
		/>
	);
}

export default ChipStatus;

ChipStatus.propTypes = {
	status: PropTypes.string.isRequired,
};
