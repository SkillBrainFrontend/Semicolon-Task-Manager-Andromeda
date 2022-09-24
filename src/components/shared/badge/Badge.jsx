import React from "react";

import "./Badge.css";

const BADGE_COLORS = ["grey", "black", "blue", "orange", "black", "green"];

function Badge(label, extraColor) {
	const badgeColor = BADGE_COLORS.includes(extraColor) ? extraColor : "grey";
	return (
		<div className={`${badgeColor}`}>
			<p>{label}</p>
		</div>
	);
}

export default Badge;
