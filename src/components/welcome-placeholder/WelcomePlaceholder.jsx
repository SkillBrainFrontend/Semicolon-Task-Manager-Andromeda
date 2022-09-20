/* eslint-disable react/destructuring-assignment */
import React from "react";
import { string } from "prop-types";

import { Box, Typography } from "@mui/material";

import PlacehoderBg from "../../assets/icons/screen-placeholder.svg";

function WelcomePlaceholder(props) {
	WelcomePlaceholder.propTypes = {
		message: string,
		licence: string,
		position: string,
	};
	const positionImg = {
		left: "scaleX(-1)",
		right: "none",
	};
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
					transform: positionImg[props.position],
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
				{props.licence}
			</Typography>
		</Box>
	);
}

export default WelcomePlaceholder;
