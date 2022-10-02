import React from "react";
import PropTypes from "prop-types";

import {
	CardActions,
	CardContent,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";

import VectorCard from "../../assets/icons/VectorCard";
import { Button, Card, Chip } from "../shared";

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
		<Card
			sx={{
				height: 170,
				width: 250,
				padding: "20px !important",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Stack direction="row" sx={{ justifyContent: "space-between" }}>
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
			</Stack>
			<CardContent sx={{ px: 0, flexGrow: 1 }}>
				<Tooltip
					disableInteractive
					enterDelay={1000}
					placement="bottom"
					title={name}
				>
					<Typography
						variant="title"
						sx={{
							overflow: "hidden",
							display: "-WebkitBoxOriented",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							fontWeight: "600",
						}}
					>
						{name}
					</Typography>
				</Tooltip>
			</CardContent>
			<CardActions sx={{ justifyContent: "flex-start", padding: 0 }}>
				<Button
					autoCapitalize="false"
					endIcon={<VectorCard />}
					size="small"
					variant="text"
					sx={{
						gap: "5px",
						marginLeft: "-3px",
						fontWeight: "600 !important",
						letterSpacing: "-0.02em",
						borderRadius: "5px !important",
						padding: "3px  !important",
						textTransform: "none",
						"&:hover": {
							background: "transparent",

							opacity: 0.7,
						},
					}}
				>
					View Task
				</Button>
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
