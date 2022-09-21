import React from "react";

import { Box } from "@mui/material";

import PlacehoderBg from "../../assets/icons/screen-placeholder.svg";

function WelcomePlaceholder() {
	return (
		<Box
			sx={{
				flex: 1,
				height: "100%",
				padding: "20px",
			}}
		>
			<Box
				sx={{
					flex: 1,
					height: "100%",
					borderRadius: "32px",
					backgroundImage: `url(${PlacehoderBg})`,
					backgroundRepeat: "no-repeat",
					backgroundColor: (t) => t.palette.primary.main,
					backgroundSize: "cover",
					backgroundPosition: "center",
					transform: "scaleX(-1)",
				}}
			/>
		</Box>
	);
}

export default WelcomePlaceholder;
