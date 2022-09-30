import React from "react";
import { string } from "prop-types";

import { Box, Grid, Link, Typography } from "@mui/material";

import PlacehoderBg from "../../../assets/icons/screen-placeholder.svg";
import { Button } from "../../../components/shared";

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
	const { position, message, actionButton } = props;
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
						transform: positionImg[position],
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
						padding: "30px",
					}}
				>
					{actionButton && (
						<Button
							onClick={actionButton.onActionClick}
							size="small"
							variant="outlined"
							sx={{
								width: "30%",
								disableElevation: "false",
								background: (t) => t.palette.background.default,
								"&:hover": {
									backgroundColor: (t) => t.palette.background.default,
								},
								alignSelf: "flex-end",
							}}
						>
							{actionButton.buttonLabel}
						</Button>
					)}
					<Grid
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: positionText[position],
							flexGrow: 1,
							justifyContent: "space-evenly",
							height: "70%",
							padding: "60px",
						}}
					>
						<Typography
							component="h4"
							variant="h4"
							xs={false}
							sx={{
								paddingBottom: 8,
								textAlign: position,
								transform: positionImg[position],
								color: "white",
								width: "80%",
							}}
						>
							{message}
						</Typography>
						<Copyright
							component="h6"
							variant="paragraph"
							sx={{
								transform: positionImg[position],
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

WelcomePlaceholder.propTypes = {
	message: string,
	position: string,
};

export default WelcomePlaceholder;
