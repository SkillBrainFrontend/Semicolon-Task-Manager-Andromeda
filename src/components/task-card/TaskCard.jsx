import * as React from "react";

import { Box, CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { Card } from "../shared";

import Vector from "./Vector.png";

function TaskCard(props) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "column" },
				gap: 2,
				padding: "30px 5px",
			}}
		>
			<Card sx={{ maxWidth: 345, minHeight: 230 }}>
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
							style={{ width: 250, whiteSpace: "nowrap" }}
							variant="body2"
						>
							{props.title}
						</Typography>
						<Typography
							backgroundColor="#F2F4FD;"
							borderRadius={12}
							color=" #3754DB;"
							fontSize={14}
							fontWeight={500}
							padding="5px"
						>
							{props.status}
						</Typography>
					</CardActions>

					<Typography
						component="div"
						style={{ width: 200, whiteSpace: "nowrap" }}
						sx={{
							textOverflow: "ellipsis",
							overflow: "hidden",
							my: 2,
							p: 1,
							fontWeight: "600",
							width: "300px",
							color: "#16171D",
							fontSize: "16px",
							margin: "10px 0 10px -10px",
							variant: "h6",
						}}
					>
						{props.message}
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
