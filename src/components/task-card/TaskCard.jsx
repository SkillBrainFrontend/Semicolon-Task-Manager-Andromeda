import React from "react";
import PropTypes from "prop-types";

import {
	Box,
	CardActions,
	CardContent,
	Tooltip,
	Typography,
} from "@mui/material";

import VectorCard from "../../assets/icons/VectorCard";
import { Card, Chip } from "../shared";

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
		<Card sx={{ minHeight: 170, width: "250px" }}>
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
				<Typography>
					<VectorCard />
				</Typography>
			</CardActions>
		</Card>
	);
}

export default TaskCard;

TaskCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
};
