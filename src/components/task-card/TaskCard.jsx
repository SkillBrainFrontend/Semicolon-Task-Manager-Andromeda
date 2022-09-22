import * as React from "react";

import { Box, CardActions, CardContent, Typography } from "@mui/material";

import { Card } from "../shared";

import Vector from "./Vector.png";

function TaskCard() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "column" },
				gap: 2,
				backgroundColor: " #E5E5E5;",
				height: "100vh",
			}}
		>
			<Card sx={{ maxWidth: 345 }}>
				<CardContent>
					<CardActions
						sx={{ justifyContent: "space-between", padding: "0 0 10px 0" }}
					>
						<Typography
							color="#B9B9B9"
							component="div"
							fontSize="14px"
							fontWeight={600}
							gutterBottom
							variant="body2"
						>
							T - 25
						</Typography>
						<Typography
							backgroundColor="#F2F4FD;"
							borderRadius={12}
							color=" #3754DB;"
							fontSize={14}
							fontWeight={500}
							padding="5px"
						>
							Pending
						</Typography>
					</CardActions>
					<Typography
						color="#16171D;"
						component="div"
						fontWeight={600}
						margin="10px 0 10px 0"
						variant="h6"
					>
						Create a Design System for Enum Worksace
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: "flex-start" }}>
					<Typography
						color=" #3754DB;"
						fontSize={14}
						fontWeight={600}
						variant="body2"
					>
						View Task
					</Typography>
					<Typography sx={{ padding: "0 20px" }}>
						<img alt="" src={Vector} />
					</Typography>
				</CardActions>
			</Card>
		</Box>
	);
}

export default TaskCard;
