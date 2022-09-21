import React from "react";

import {
	AlertTitle,
	Box,
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";

import { Alert, Button, Card, Chip, Input } from "../components/shared";
import Vector from "../components/shared/card/Vector.png";

import BasicTabs from "./TabTest";

function Test() {
	const theme = useTheme();

	return (
		<div>
			<Container
				sx={{
					backgroundColor: theme.palette.background.surface,
				}}
			>
				<Paper
					sx={{
						border: "1px solid blue",
						"&:hover": {
							backgroundColor: theme.palette.custom.purple,
							opacity: [0.9, 0.8, 0.7],
						},
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
					justifyContent="flex-start"
					spacing={2}
					sx={{ width: "100%" }}
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
					justifyContent="flex-start"
					spacing={2}
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
					justifyContent="flex-start"
					spacing={2}
					sx={{ width: "100%" }}
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

				<Box sx={{ flexGrow: 0 }}>
					<Grid container direction="row" spacing={2} sx={{ width: "100%" }}>
						<Grid item lg={3} md={6} sm={6} xs={12}>
							<Alert
								onClose={() => {}}
								severity="error"
								variant="filled"
								sx={{
									width: 300,
								}}
							>
								<AlertTitle>Error</AlertTitle>
								This is an error message!
							</Alert>
						</Grid>

						<Grid item lg={3} md={6} sm={6} xs={12}>
							<Alert
								onClose={() => {}}
								severity="warning"
								variant="filled"
								sx={{
									width: 300,
								}}
							>
								<AlertTitle>Warning</AlertTitle>
								This is a warning message!
							</Alert>
						</Grid>

						<Grid item lg={3} md={6} sm={6} xs={11}>
							<Alert
								onClose={() => {}}
								severity="info"
								variant="filled"
								sx={{
									width: 300,
								}}
							>
								<AlertTitle>Info</AlertTitle>
								This is an information message!
							</Alert>
						</Grid>

						<Grid item lg={3} md={6} sm={6} xs={12}>
							<Alert
								onClose={() => {}}
								severity="success"
								variant="filled"
								sx={{
									width: 300,
								}}
							>
								<AlertTitle>Success</AlertTitle>
								This is a success message!
							</Alert>
						</Grid>
					</Grid>
				</Box>

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

				<Box display="flex" sx={{ flexGrow: 0 }}>
					<Grid container margin="20px">
						<Card sx={{ minWidth: 248 }}>
							<CardContent justifyContent="space-betweem">
								<Stack
									alignItems="flex-start"
									direction="row"
									justifyContent="space-between"
								>
									<Typography
										color="#B9B9B9"
										gutterBottom
										sx={{ fontSize: 14, font: "gelion", fontWeight: 600 }}
									>
										T - 25
									</Typography>
									<Typography
										backgroundColor="#F2F4FD;"
										borderRadius={12}
										color=" #3754DB;"
										fontSize={14}
										fontWeight={500}
										padding="5px"
									>
										In Progress
									</Typography>
								</Stack>
								<Typography
									color="#16171D;"
									component="div"
									fontWeight={600}
									margin="10px 0 10px 0"
									variant="h6"
								>
									Create a Design System for <br />
									Enum Workspace.
								</Typography>

								<Stack direction="row">
									<Typography
										color=" #3754DB;"
										fontSize={12}
										fontWeight={600}
										variant="body2"
									>
										View Task
									</Typography>
									<Stack justifyContent="center" padding="0 20px">
										<img alt="" src={Vector} />
									</Stack>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Box>

				<Stack
					alignItems="center"
					direction="row"
					justifyContent="flex-start"
					spacing={2}
					sx={{ width: "100%", padding: theme.spacing(3, 0) }}
				>
					<Chip extraColor="wine" label="23" size="small" variant="outlined" />
					<Chip
						extraColor="primary"
						label="23"
						size="small"
						variant="outlined"
					/>
					<Chip
						extraColor="primary"
						label="Some Text Yunno"
						size="small"
						variant="outlined"
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
						extraColor="secondary"
						label="23"
						size="small"
						variant="contained"
					/>
					<Chip color="primary" label="23" size="small" variant="contained" />
					<Chip
						extraColor="secondary"
						label="Some Text Yunno"
						size="small"
						variant="contained"
					/>
					<Chip
						extraColor="primary"
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
			</Container>
		</div>
	);
}

export default Test;
