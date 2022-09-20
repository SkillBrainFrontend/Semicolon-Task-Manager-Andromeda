import React from "react";

import {
	AlertTitle,
	Chip,
	Container,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Alert, Button, Input } from "../components/shared";
 


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

				<Stack spacing={2} sx={{ width: "100%" }}>
					<Alert
						onClose={() => {}}
						severity="error"
						variant="filled"
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
			
			</Container>
		</div>
	);
}

export default Test;
