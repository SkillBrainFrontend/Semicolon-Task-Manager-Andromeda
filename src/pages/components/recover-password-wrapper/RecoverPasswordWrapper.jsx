import React from "react";

import { Box } from "@mui/material";

import RecoverPassBg from "../../../assets/images/RecoverPassBG.svg";

function RecoverPasswordWrapper(props) {
	const { children } = props;

	return (
		<Box
			sx={{
				flex: 1,
				height: "100vh",
			}}
		>
			<Box
				sx={{
					flex: 1,
					height: "100%",
					backgroundImage: `url(${RecoverPassBg})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "bottom",
					transform: "scaleX(1)",
				}}
			>
				{children}
			</Box>
		</Box>
	);
}

export default RecoverPasswordWrapper;
