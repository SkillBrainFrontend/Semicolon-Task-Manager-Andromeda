import React from "react";

import { Box, Typography } from "@mui/material";

import PlacehoderBg from "../../assets/icons/screen-placeholder.svg";

function WelcomePlaceholder(props) {
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
					position: "relative",
				}}
			/>
			<Typography
				component="h4"
				variant="h4"
				xs={false}
				sx={{
					position: "absolute",
					top: "40%",
					paddingLeft: "50px",
					color: "white",
					width: "40%",
				}}
			>
				{props.message}
			</Typography>
			<Typography
				component="h7"
				variant="h7"
				sx={{
					position: "absolute",
					top: "90%",
					paddingLeft: "50px",
					color: "white",
					width: "40%",
				}}
			>
				{props.right}
			</Typography>
		</Box>
	);
}

export default WelcomePlaceholder;
