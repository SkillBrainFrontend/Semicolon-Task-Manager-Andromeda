import React from "react";
import PropTypes from "prop-types";

import {
	Box,
	CardActions,
	CardContent,
	Chip,
	Tooltip,
	Typography,
} from "@mui/material";

import { Card } from "../shared";

import Vector from "./Vector.png";

function TaskCard({ id, name, status }) {
	const getBadgeStyleColor = () => {
		switch (status) {
			case "Pending":
				return "custom.yellow";
			case "In Progress":
				return "primary.main";
			case "In Review":
				return "accent.main";
			case "Completed":
				return "success.main";
			case "Unassigned":
				return "custom.wine";
			default:
				return "custome.grey";
		}
	};

	const getBadgeStyleBackground = () => {
		switch (status) {
			case "Pending":
				return "background.floralWhite";
			case "In Progress":
				return "background.blueWhite";
			case "In Review":
				return "background.purpleWhite";
			case "Completed":
				return "background.greenWhite";
			case "Unassigned":
				return "background.redWhite";
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
							label={status}
							size="small"
							variant="outlined"
							sx={{
								color: getBadgeStyleColor(),
								backgroundColor: getBadgeStyleBackground(),
								border: "none",
							}}
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
	id: PropTypes.string,
	name: PropTypes.string,
	status: PropTypes.string,
};
