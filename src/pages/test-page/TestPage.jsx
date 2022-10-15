import React from "react";
import { useDispatch } from "react-redux";

import { AlertTitle, Box, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
	CreateTaskForm,
	DeleteTask,
	EditTaskForm,
	LogOutModal,
	TaskCard,
	ViewTaskCard,
	withNavigationDrawer,
} from "../../components";
import { Alert, Button, Chip, Grid, Input } from "../../components/shared";
import { openModal } from "../../store/app/app.slice";
import { modalTypes } from "../../store/app/constants";
import BasicTabs from "../TabTest";

import ActionAreaCard from "./components/CardComponent";

function Test() {
	const theme = useTheme();
	const dispatch = useDispatch();
	return (
		<div>
			<Paper
				sx={{
					"&:hover": {
						backgroundColor: theme.palette.custom.purple,
						opacity: [0.9, 0.8, 0.7],
					},
					padding: 3,
				}}
			>
				<Typography gutterBottom variant="h1">
					h1. Heading
				</Typography>
			</Paper>
			<Typography gutterBottom variant="h2">
				h2. Heading
			</Typography>
			<Typography gutterBottom variant="h3">
				h3. Heading
			</Typography>
			<Typography gutterBottom variant="h4">
				h4. Heading
			</Typography>
			<Typography gutterBottom variant="h5">
				h5. Heading
			</Typography>
			<Typography gutterBottom variant="h6">
				h6. Heading
			</Typography>
			<Typography gutterBottom variant="subtitle1">
				subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Quos blanditiis tenetur
			</Typography>
			<Typography gutterBottom variant="subtitle2">
				subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Quos blanditiis tenetur
			</Typography>
			<Typography gutterBottom variant="body1">
				body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore
				consectetur, neque doloribus, cupiditate numquam dignissimos laborum
				fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Typography gutterBottom variant="body2">
				body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore
				consectetur, neque doloribus, cupiditate numquam dignissimos laborum
				fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Typography display="block" gutterBottom variant="button">
				button text
			</Typography>
			<Typography display="block" gutterBottom variant="caption">
				caption text
			</Typography>
			<Typography display="block" gutterBottom variant="overline">
				overline text
			</Typography>
			<Stack
				alignItems="center"
				direction="row"
				flexWrap="wrap"
				gap={1}
				justifyContent="flex-start"
				sx={{ width: "100" }}
			>
				<Button size="large" variant="contained">
					Large
				</Button>
				<Button size="medium" variant="contained">
					Medium
				</Button>
				<Button color="accent" size="small" variant="contained">
					Small
				</Button>
				<Button disabled size="small" variant="contained">
					Disabled
				</Button>
			</Stack>
			<Stack
				alignItems="center"
				direction="row"
				flexWrap="wrap"
				gap={1}
				justifyContent="flex-start"
				sx={{ width: "100%", padding: theme.spacing(3, 0) }}
			>
				<Button size="large" variant="outlined">
					Large
				</Button>
				<Button size="medium" variant="outlined">
					Medium
				</Button>
				<Button color="accent" size="small" variant="outlined">
					Small
				</Button>
				<Button disabled size="small" variant="outlined">
					Disabled
				</Button>
			</Stack>
			<Stack
				alignItems="center"
				direction="row"
				flexWrap="wrap"
				gap={1}
				justifyContent="flex-start"
				sx={{ width: "100" }}
			>
				<Button size="large" variant="text">
					Large
				</Button>
				<Button size="medium" variant="text">
					Medium
				</Button>
				<Button color="success" size="small" variant="text">
					Small
				</Button>
				<Button disabled size="small" variant="text">
					Disabled
				</Button>
			</Stack>

			<Stack spacing={2} sx={{ width: "100%" }}>
				<Alert
					onClose={() => {}}
					severity="error"
					variant="outlined"
					sx={{
						width: 350,
					}}
				>
					<AlertTitle>Error</AlertTitle>
					This is an error message!
				</Alert>
				<Alert
					onClose={() => {}}
					severity="warning"
					variant="filled"
					sx={{
						width: 350,
					}}
				>
					<AlertTitle>Warning</AlertTitle>
					This is a warning message!
				</Alert>
				<Alert
					onClose={() => {}}
					severity="info"
					variant="filled"
					sx={{
						width: 350,
					}}
				>
					<AlertTitle>Info</AlertTitle>
					This is an information message!
				</Alert>
				<Alert
					onClose={() => {}}
					severity="success"
					variant="filled"
					sx={{
						width: 350,
					}}
				>
					<AlertTitle>Success</AlertTitle>
					This is a success message!
				</Alert>
			</Stack>

			<BasicTabs />

			<Stack
				alignItems="center"
				direction="row"
				justifyContent="flex-start"
				spacing={2}
				sx={{ width: "100%", padding: theme.spacing(3, 0) }}
			>
				<Chip color="accent" label="Chip Outlined" />
				<Chip color="accent" label="Chip Outlined" />
			</Stack>

			<Input error label="Worjidjasi" />

			<Stack
				alignItems="center"
				direction="row"
				justifyContent="flex-start"
				spacing={2}
				sx={{ width: "100%", padding: theme.spacing(3, 3) }}
			>
				<CreateTaskForm />
				<EditTaskForm />
			</Stack>

			<Stack
				alignItems="center"
				direction="row"
				justifyContent="flex-start"
				spacing={2}
				sx={{ width: "100%", padding: theme.spacing(3, 0) }}
			>
				<DeleteTask />
				<LogOutModal />
			</Stack>

			<Chip extraColor="wine" label="23" size="small" variant="outlined" />
			<Chip extraColor="primary" label="23" size="small" variant="outlined" />
			<Chip
				extraColor="primary"
				label="Some Text Yunno"
				size="small"
				variant="outlined"
			/>

			<Stack
				alignItems="center"
				direction="row"
				justifyContent="flex-start"
				spacing={2}
				sx={{ width: "100%", padding: theme.spacing(3, 0) }}
			>
				<Chip color="secondary" label="23" size="small" variant="contained" />
				<Chip color="primary" label="23" size="small" variant="contained" />
				<Chip
					color="secondary"
					label="Some Text Yunno"
					size="small"
					variant="contained"
				/>
				<Chip
					color="primary"
					label="Some Text Yunno"
					size="small"
					variant="contained"
				/>
			</Stack>

			<Stack
				alignItems="center"
				direction="row"
				justifyContent="flex-start"
				spacing={2}
				sx={{ width: "100%", padding: theme.spacing(3, 0) }}
			>
				<Chip
					extraColor="yellow"
					label="Pending"
					size="small"
					variant="outlined"
				/>
				<Chip
					extraColor="primary"
					label="In Progress"
					size="small"
					variant="outlined"
				/>
				<Chip
					extraColor="accent"
					label="In Review"
					size="small"
					variant="outlined"
				/>
				<Chip
					extraColor="success"
					label="Completed"
					size="small"
					variant="outlined"
				/>
				<Chip
					extraColor="wine"
					label="Unassigned"
					size="small"
					variant="outlined"
				/>
				<Chip
					extraColor="gray"
					label="Unassigned"
					size="small"
					variant="outlined"
				/>
			</Stack>
			<ActionAreaCard />

			<Box py={5}>
				<ViewTaskCard
					dateCreated={new Date().toLocaleDateString()}
					description="I am to create a simple design system to use to teach aspiring UI / UX Designers in my forth-coming cass on the 2nd of october 2021"
					dueDate={new Date().toLocaleDateString()}
					status="In Progress"
					title="Create a Design System for Enum Workspace."
				/>
				<Box py={5}>
					<ViewTaskCard
						dateCreated={new Date().toLocaleDateString()}
						description="I am to create a simple design system to use to teach aspiring UI / UX Designers in my forth-coming cass on the 2nd of october 2021"
						dueDate={new Date().toLocaleDateString()}
						status="Completed"
						title="Create a Design System for Enum Workspace."
					/>
				</Box>
			</Box>
			<Box py={5}>
				<Grid container justifyContent="space-between" spacing={2}>
					<Grid item xs="auto">
						<TaskCard
							id="T - 10"
							name="Create a Design System for Enum Worksace. Create a Design System for Enum Worksace."
							status="Pending"
						/>
					</Grid>
					<Grid item xs="auto">
						<TaskCard id="T - 20" name="Param." status="Completed" />
					</Grid>
					<Grid item xs="auto">
						<TaskCard id="T - 30" name="Well done! " status="In Progress" />
					</Grid>
					<Grid item xs="auto">
						<TaskCard id="T - 40" name="Well done! " status="In Review" />
					</Grid>
					<Grid item xs="auto">
						<TaskCard id="T - 50" name="Well done! " status="Unassigned" />
					</Grid>
					<Grid item xs="auto">
						<TaskCard id="T - 60" name="Well done! " status="None" />
					</Grid>
				</Grid>

				<Stack
					alignItems="center"
					direction="row"
					flexWrap="wrap"
					gap={1}
					justifyContent="flex-start"
					sx={{ width: "100" }}
				>
					<Button
						color="accent"
						onClick={() => dispatch(openModal(modalTypes.createTask))}
						size="small"
						variant="contained"
					>
						Create Task
					</Button>
					<Button
						color="accent"
						onClick={() => dispatch(openModal(modalTypes.editTask))}
						size="small"
						variant="contained"
					>
						Edit Task
					</Button>
					<Button
						color="accent"
						onClick={() => dispatch(openModal(modalTypes.deleteTask))}
						size="small"
						variant="contained"
					>
						Delete Task
					</Button>

					<Button
						color="accent"
						onClick={() => dispatch(openModal(modalTypes.logOut))}
						size="small"
						variant="contained"
					>
						Log Out
					</Button>
				</Stack>

				<Stack sx={{ marginTop: "10px" }}>
					<Button
						color="accent"
						onClick={() => dispatch(openModal(modalTypes.createTask))}
						size="small"
						variant="contained"
					>
						Edit Profile
					</Button>
				</Stack>
			</Box>
		</div>
	);
}

export default withNavigationDrawer(Test);
