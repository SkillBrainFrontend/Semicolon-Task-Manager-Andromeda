import React from "react";
import PropTypes from "prop-types";

import {
	Box,
	CardActions,
	CardContent,
	Tooltip,
	Typography,
} from "@mui/material";

import { Card, Chip } from "../shared";

import Vector from "./Vector.png";

function TaskCard({ id, name, status }) {
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
							color="text.grey"
							component="div"
							fontSize="14px"
							fontWeight={600}
							gutterBottom
							style={{ width: 250, whiteSpace: "nowrap" }}
							variant="body2"
						>
							{id}
						</Typography>

						<Chip
							extraColor={getBadgeStyle()}
							label={status}
							size="small"
							variant="outlined"
						/>
					</CardActions>

					<Tooltip
						placement="bottom"
						title="https://mui.com/material-ui/react-tooltip/#main-content"
					>
						<Typography
							component="div"
							sx={{
								overflow: "hidden",
								display: "-WebkitBoxOriented",
								WebkitLineClamp: 2,
								WebkitBoxOrient: "vertical",
								fontWeight: "600",
								color: "text.primary",
								fontSize: "16px",
								margin: "10px 0 10px -10px",
								variant: "h6",
							}}
						>
							{name}
						</Typography>
					</Tooltip>
				</CardContent>
				<CardActions sx={{ justifyContent: "flex-start" }}>
					<Typography
						color="primary.main"
						fontSize={14}
						fontWeight={600}
						title={name}
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

TaskCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
};
