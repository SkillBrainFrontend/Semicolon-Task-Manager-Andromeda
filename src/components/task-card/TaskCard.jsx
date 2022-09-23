import * as React from "react";
import PropTypes from "prop-types";

import {
	Box,
	CardActions,
	CardContent,
	Tooltip,
	Typography,
} from "@mui/material";

import { Card } from "../shared";

import Vector from "./Vector.png";

function TaskCard({ id, name, status }) {
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
							{id}
						</Typography>
						<Typography
							backgroundColor="#F2F4FD;"
							borderRadius={12}
							color=" #3754DB;"
							fontSize={14}
							fontWeight={500}
							padding="5px"
							textAlign="center"
							width={140}
						>
							{status}
						</Typography>
					</CardActions>

					<Tooltip
						placement="bottom"
						title="https://mui.com/material-ui/react-tooltip/#main-content"
					>
						<Typography
							component="div"
							sx={{
								whiteSpace: "nowrap",
								textOverflow: "ellipsis",
								overflow: "hidden",
								fontWeight: "600",
								color: "#16171D",
								fontSize: "16px",
								margin: "10px 0 10px -10px",
								variant: "h6",
								my: 2,
								p: 1,
							}}
						>
							{name}
						</Typography>
					</Tooltip>
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

TaskCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	status: PropTypes.string,
};
