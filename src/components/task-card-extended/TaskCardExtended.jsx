import React from "react";
import PropTypes from "prop-types";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
	Avatar,
	Box,
	Button,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";

import Chip from "../shared/chip/Chip";

const UserButton = styled(Button)(({ theme }) => ({
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

export default function TaskCardExtended({
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
				return <UserButton variant="markAsDone">Mark As Done</UserButton>;
			case "Pending":
				return <UserButton variant="onWorking">Work on it Now</UserButton>;
			case "Unassigned":
				return <UserButton variant="onWorking">Request Task</UserButton>;
			case "In Review":
				return "";
			case "Completed":
				return (
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<img alt="" src="check-circle.png" />
						<Typography sx={{ color: "#00A35F", fontWeight: 550 }}>
							This task has been completed
						</Typography>
					</Box>
				);
			default:
				return <UserButton variant="markAsDone">Mark As Done</UserButton>;
		}
	};

	const isDisplay = () => {
		switch (status) {
			case "Unassigned":
				return "none";
			case "Pending":
				return "none";
			default:
				return "";
		}
	};

	const isDisplayAvatar = () => {
		switch (status) {
			case "Unassigned":
				return "none";
			default:
				return "";
		}
	};

	return (
		<Box
			sx={{
				maxWidth: 750,
				minHeight: "100",
				backgroundColor: "#FFFFFF",
				display: "block",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "16px",
				padding: "24px 0px 24px 24px",
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
					<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<Chip
							extraColor={getBadgeStyle()}
							label={status}
							size="small"
							variant="outlined"
						/>
						<Typography
							display={isDisplay}
							sx={{ fontWeight: 550, fontSize: "12px" }}
						>
							-By You
						</Typography>
					</Box>
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

					<Stack
						alignItems="center"
						direction="row"
						display={isDisplayAvatar}
						mb={2}
						spacing={1}
					>
						<Avatar
							src="Rectangle 19.png"
							sx={{ borderRadius: 2 }}
							variant="square"
						/>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography
								sx={{
									color: "#3754DB",
									fontSize: 12,
									fontWeight: "bold",
								}}
							>
								Adeeko Emmanuel
							</Typography>
							<Typography
								sx={{
									color: "text.secondary",
									fontSize: 10,
								}}
							>
								Adeeko Emmanuel
							</Typography>
						</Box>
					</Stack>
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
							minHeight: "110%",
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
			<Stack
				direction="row"
				justifyContent="space-between"
				mr={3}
				mt={1}
				spacing={2}
			>
				{getButtonStyle(status)}

				<Stack
					alignItems="center"
					direction="row"
					display={isDisplay}
					mb={2}
					spacing={1}
				>
					<IconButton
						aria-label="delete"
						color="secondary"
						sx={{
							borderRadius: 2,
							backgroundColor: "#FFF0F0",
						}}
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
						<BorderColorIcon />
					</IconButton>
				</Stack>
			</Stack>
		</Box>
	);
}

TaskCardExtended.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	dueDate: PropTypes.string.isRequired,
	dateCreated: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
};
