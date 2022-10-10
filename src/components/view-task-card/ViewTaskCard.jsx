import * as React from "react";
import PropTypes from "prop-types";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";

import Chip from "../shared/chip/Chip";

<<<<<<< HEAD:src/pages/components/view-task-card/ViewTaskCard.jsx
=======
function CustomizedTimeline() {
	return (
		<Box sx={{ height: "100%", width: "170px" }}>
			<Timeline
				sx={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "flex-start",
					height: "100%",
				}}
			>
				<TimelineItem sx={{ flexGrow: 1 }}>
					<TimelineOppositeContent color="textSecondary">
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Box sx={{ color: "text.secondary", fontSize: 10 }}>
								Date Created
							</Box>
							<Box
								sx={{
									color: "text.primary",
									display: "inline",
									fontSize: 12,
									fontWeight: "bold",
								}}
							>
								21/01/2021
							</Box>
						</Box>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<FormControlLabel
							control={<Radio checked disableRipple />}
							value="due-date"
						/>
						<TimelineConnector sx={{ mr: 3.5, bgcolor: "neutral.main" }} />
					</TimelineSeparator>
				</TimelineItem>

				<TimelineItem>
					<TimelineOppositeContent color="textSecondary">
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Box sx={{ color: "text.secondary", fontSize: 10 }}>Due Date</Box>
							<Box
								sx={{
									color: "text.primary",
									display: "inline",
									fontSize: 12,
									fontWeight: "bold",
								}}
							>
								21/01/2021
							</Box>
						</Box>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<FormControlLabel
							control={<Radio checked disableRipple />}
							value="due-date"
						/>
					</TimelineSeparator>
				</TimelineItem>
			</Timeline>
		</Box>
	);
}

>>>>>>> 9557e9607118513b1664763399f807c3af36d537:src/components/view-task-card/ViewTaskCard.jsx
const DoneButton = styled(Button)(({ theme }) => ({
	"&.MuiButton-markAsDone": {
		color: "white",
		backgroundColor: theme.palette.success.main,
		padding: theme.spacing(1, 4),
		borderRadius: 12,
		textTransform: "none",
	},
	"&.MuiButton-onWorking": {
		color: "white",
		backgroundColor: theme.palette.primary.main,
		padding: theme.spacing(1, 4),
		borderRadius: 12,
		textTransform: "none",
	},
}));

export default function ViewTaskCard({
	title,
	description,
	dueDate,
	dateCreated,
	status,
}) {
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

	const getButtonStyle = () => {
		switch (status) {
			case "In Progress":
				return <DoneButton variant="markAsDone">Mark As Done</DoneButton>;
			case "Pending":
				return <DoneButton variant="onWorking">Work on it Now</DoneButton>;
			case "Unassigned":
				return <DoneButton variant="onWorking">Request Task</DoneButton>;
			case "In Review":
				return "";
			default:
				return <DoneButton variant="markAsDone">Mark As Done</DoneButton>;
		}
	};

	return (
		<Box
			sx={{
				maxWidth: 750,
<<<<<<< HEAD:src/pages/components/view-task-card/ViewTaskCard.jsx
				minHeight: "100",
=======
>>>>>>> 9557e9607118513b1664763399f807c3af36d537:src/components/view-task-card/ViewTaskCard.jsx
				backgroundColor: "#FFFFFF",
				display: "block",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "16px",
				padding: "24px 0px 24px 36px",
				// paddingLeft: 4,
				// paddingTop: 3,
				// paddingBottom: 3,
			}}
		>
			<Stack direction="row" justifyContent="center" spacing={2}>
				<Box
					sx={{
						display: "block",
						justifyContent: "center",
						alignItems: "center",
						overflow: "hidden",
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							display:
								"-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical",
							overflow: "hidden",
							fontWeight: 600,
							fontSize: 24,
							lineHeight: 1.2,
							mb: 2,
						}}
					>
						{title}
					</Typography>

					<Chip
						extraColor={getBadgeStyle()}
						label={status}
						size="small"
						variant="outlined"
					/>
					<Typography
						component="h3"
						variant="h6"
						sx={{
							display:
								"-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical",
							overflow: "hidden",
							color: "#808080",
							fontWeight: 400,
							fontSize: 16,
							lineHeight: 1.4,
							mt: 2,
							mb: 2,
						}}
					>
						{description}
					</Typography>
				</Box>

				<Box
					sx={{
						width: "170px",
						display: "block",
					}}
				>
					<Timeline
						sx={{
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "flex-start",
							minHeight: "120%",
							padding: 0,
							margin: 0,
						}}
					>
						<TimelineItem sx={{ flexGrow: 1 }}>
							<TimelineOppositeContent color="textSecondary">
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}
								>
									<Box sx={{ color: "text.secondary", fontSize: 10 }}>
										Date Created
									</Box>
									<Box
										sx={{
											color: "text.primary",
											display: "inline",
											fontSize: 12,
											fontWeight: "bold",
										}}
									>
										{dateCreated}
									</Box>
								</Box>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<FormControlLabel
									value="due-date"
									control={
										<Radio
											disableRipple
											sx={{
												color: "#3754DB",
											}}
										/>
									}
								/>
								<TimelineConnector sx={{ mr: 3.5, bgcolor: "neutral.main" }} />
							</TimelineSeparator>
						</TimelineItem>

						<TimelineItem>
							<TimelineOppositeContent color="textSecondary">
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<Box sx={{ color: "text.secondary", fontSize: 10 }}>
										Due Date
									</Box>
									<Box
										sx={{
											color: "text.primary",
											display: "inline",
											fontSize: 12,
											fontWeight: "bold",
										}}
									>
										{dueDate}
									</Box>
								</Box>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<FormControlLabel
									value="due-date"
									control={
										<Radio
											checked
											disableRipple
											sx={{
												color: "#3754DB",
											}}
										/>
									}
								/>
							</TimelineSeparator>
						</TimelineItem>
					</Timeline>
				</Box>
			</Stack>
<<<<<<< HEAD:src/pages/components/view-task-card/ViewTaskCard.jsx
			<Stack alignItems="center" direction="row" spacing={2}>
				{getButtonStyle(status)}
				<IconButton
					aria-label="delete"
					color="secondary"
					sx={{
						borderRadius: 2,
						backgroundColor: "#FFF0F0",
					}}
					// sx={{ background: alpha(red, 0.1), color: "secondary" }}
				>
					<DeleteIcon />
				</IconButton>
				<IconButton
					aria-label="border-color"
					color="primary"
					sx={{
						borderRadius: 2,
						backgroundColor: "#F6F8FD",
					}}
				>
=======
			<Stack alignItems="center" direction="row" spacing={1}>
				<DoneButton variant="contained">Mark As Done</DoneButton>
				<IconButton aria-label="delete" color="secondary">
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="border-color" color="primary">
>>>>>>> 9557e9607118513b1664763399f807c3af36d537:src/components/view-task-card/ViewTaskCard.jsx
					<BorderColorIcon />
				</IconButton>
			</Stack>
		</Box>
	);
}

ViewTaskCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	dueDate: PropTypes.string.isRequired,
	dateCreated: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
};
