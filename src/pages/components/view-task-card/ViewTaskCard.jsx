import * as React from "react";

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

import Chip from "../../../components/shared/chip/Chip";

function CustomizedTimeline() {
	return (
		<Box>
			<Timeline
				sx={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "flex-start",
				}}
			>
				<TimelineItem>
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
						<FormControlLabel control={<Radio />} value="due-date" />
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
						<FormControlLabel control={<Radio />} value="due-date" />
					</TimelineSeparator>
				</TimelineItem>
			</Timeline>
		</Box>
	);
}

const DoneButton = styled(Button)(({ theme }) => ({
	color: theme.palette.accent,
	backgroundColor: theme.palette.success.main,
	padding: theme.spacing(1, 4),
	borderRadius: 12,
}));

export default function ViewTaskCard() {
	return (
		<Box
			sx={{
				maxWidth: 750,
				border: "1px solid #A8ABBD",
				backgroundColor: "#FFFFFF",
				display: "block",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "16px",
				padding: 2,
			}}
		>
			<Stack direction="row" justifyContent="center" spacing={2}>
				<Box flex={4}>
					<Typography
						component="h1"
						sx={{ fontWeight: 600, fontSize: 24, lineHeight: 1.2, mb: 2 }}
						variant="h6"
					>
						Create a Design System for Enum Workspace.
					</Typography>
					<Chip
						extraColor="primary"
						label="In Progress"
						size="small"
						variant="outlined"
					/>

					<Typography
						component="h3"
						variant="h6"
						sx={{
							color: "#808080",
							fontWeight: 400,
							fontSize: 16,
							lineHeight: 1.4,
							mt: 2,
							mb: 2,
						}}
					>
						I am to create a simple design system to use to teach aspiring UI /
						UX Designers in my forth-coming cass on the 2nd of october 2020
					</Typography>

					<Stack alignItems="center" direction="row" spacing={1}>
						<DoneButton variant="contained">Mark As Done</DoneButton>
						<IconButton aria-label="delete" color="secondary">
							<DeleteIcon />
						</IconButton>
						<IconButton aria-label="border-color" color="primary">
							<BorderColorIcon />
						</IconButton>
					</Stack>
				</Box>

				<Box flex={1}>
					<CustomizedTimeline />
				</Box>
			</Stack>
		</Box>
	);
}
