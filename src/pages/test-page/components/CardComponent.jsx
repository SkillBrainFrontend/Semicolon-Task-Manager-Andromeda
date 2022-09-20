import * as React from "react";

import {
	Box,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";

import SvgAlertCircle from "../../../assets/icons/AlertCircle";
import SvgMoreDots from "../../../assets/icons/MoreDots";
import { Button, Card } from "../../../components/shared";

export default function ActionAreaCard() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				gap: 2,
			}}
		>
			{/* FIRST TYPE OF CARDS */}
			{/* FIRST CARD + ALERTCIRCLE */}

			<Card sx={{ maxWidth: 345, padding: "24px" }}>
				<CardActionArea>
					<SvgAlertCircle />
				</CardActionArea>
				<CardContent>
					<Typography
						component="div"
						fontWeight={700}
						gutterBottom
						variant="h5"
					>
						Card
					</Typography>
					<Typography color="text.secondary" variant="body2">
						Emmanuel, always have in mind tht you are a great person. A man of
						valor.No matter you would excel.
					</Typography>
				</CardContent>
			</Card>

			{/* SECOND CARD + BUTTON */}
			<Card sx={{ maxWidth: 345, padding: "24px" }}>
				<CardActionArea>
					<CardContent>
						<Typography
							component="div"
							fontWeight={700}
							gutterBottom
							variant="h5"
						>
							Card
						</Typography>
						<Typography color="text.secondary" variant="body2">
							Emmanuel, always have in mind tht you are a great person. A man of
							valor.No matter you would excel.
						</Typography>
					</CardContent>
					<Stack
						alignItems="center"
						direction="row"
						justifyContent="space-evenly"
					>
						<Button color="primary" size="small" variant="contained">
							Button
						</Button>
						<SvgAlertCircle />
					</Stack>
				</CardActionArea>
			</Card>

			{/* THIRD BUTTON + BUTTON + MOREDOTS */}

			<Card sx={{ maxWidth: 345, padding: "24px" }}>
				<CardActionArea>
					<CardContent>
						<CardActions>
							<Typography
								component="div"
								fontWeight={700}
								gutterBottom
								variant="h5"
							>
								Card
							</Typography>
							<SvgMoreDots />
						</CardActions>
						<Typography color="text.secondary" variant="body2">
							Emmanuel, always have in mind tht you are a great person. A man of
							valor.No matter you would excel.
						</Typography>
					</CardContent>
					<CardActions>
						<Button color="primary" size="small" variant="contained">
							Button
						</Button>
						<SvgAlertCircle />
					</CardActions>
				</CardActionArea>
			</Card>

			{/* /////////////////////////////////////////// */}
			{/* SECOND TYPE OF CARDS */}
			{/* FIRST IMAGE CARD + BUTTON */}

			<Card sx={{ maxWidth: 345, padding: "24px" }}>
				<CardActionArea>
					<CardMedia
						alt="backgroundImage"
						component="img"
						height="140"
						// image=""
					/>
				</CardActionArea>
				<CardContent>
					<Typography
						component="div"
						fontWeight={700}
						gutterBottom
						variant="h5"
					>
						Card
					</Typography>
					<Typography color="text.secondary" variant="body2">
						Emmanuel, always have in mind tht you are a great person. A man of
						valor.No matter you would excel.
					</Typography>
				</CardContent>
				<CardActions>
					<Button color="primary" size="small" variant="contained">
						Button
					</Button>
				</CardActions>
			</Card>

			{/* SECOND IMAGE CARD WITHOUT BUTTON */}
			<Card sx={{ maxWidth: 345, padding: "24px" }}>
				<CardActionArea>
					<CardMedia
						alt="backgroundImage"
						component="img"
						height="140"
						// image=""
					/>
				</CardActionArea>

				<CardContent>
					<Typography
						component="div"
						fontWeight={700}
						gutterBottom
						variant="h5"
					>
						Card
					</Typography>
					<Typography color="text.secondary" variant="body2">
						Emmanuel, always have in mind tht you are a great person. A man of
						valor.No matter you would excel.
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
}
