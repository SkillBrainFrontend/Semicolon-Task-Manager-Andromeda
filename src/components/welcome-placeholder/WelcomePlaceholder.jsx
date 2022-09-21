/* eslint-disable react/destructuring-assignment */
import React from "react";
import { string } from "prop-types";

import { Box, Grid, Link, Typography } from "@mui/material";

import PlacehoderBg from "../../assets/icons/screen-placeholder.svg";

function Copyright(props) {
	return (
		<Typography
			align="center"
			color="text.secondary"
			variant="body2"
			{...props}
		>
			<Link color="inherit" href="https://skillbrain.com/" target="_blank">
				SkillBrain 2022 | All Right Reserved
			</Link>{" "}
			{new Date().getFullYear()}.
		</Typography>
	);
}
function WelcomePlaceholder(props) {
	WelcomePlaceholder.propTypes = {
		message: string,
		position: string,
	};
	const positionImg = {
		left: "scaleX(-1)",
		right: "none",
	};

	const positionText = {
		left: "flex-end",
		right: "flex-end",
	};
	return (
		<Grid>
			<Box
				sx={{
					flex: 1,
					height: "100vh",
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
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
					}}
				>
					<Grid
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: positionText[props.position],
							justifyContent: "space-between",
							height: "70%",
							padding: "70px",
						}}
					>
						<Typography
							component="h4"
							variant="h4"
							xs={false}
							sx={{
								textAlign: props.position,
								transform: positionImg[props.position],
								color: "white",
								width: "80%",
							}}
						>
							{props.message}
						</Typography>
						<Copyright
							component="h6"
							variant="paragraph"
							sx={{
								transform: positionImg[props.position],
								color: "white",
								fontWeight: "400",
							}}
						/>
					</Grid>
				</Box>
			</Box>
		</Grid>
	);
}

export default WelcomePlaceholder;
