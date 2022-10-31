import * as React from "react";

import {
	Box,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
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
				flexDirection: { xs: "column", md: "column" },
				gap: 2,
			}}
		>
			{/* FIRST TYPE OF CARDS */}
			{/* FIRST CARD + ALERTCIRCLE */}

			<Card sx={{ maxWidth: 345 }}>
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
			<Card sx={{ maxWidth: 345 }}>
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
				<CardActions sx={{ justifyContent: "space-between" }}>
					<Button color="primary" size="small" variant="contained">
						Button
					</Button>
					<SvgAlertCircle />
				</CardActions>
			</Card>

			{/* THIRD BUTTON + BUTTON + MOREDOTS */}

			<Card sx={{ maxWidth: 345 }}>
				<CardContent>
					<CardActions sx={{ justifyContent: "space-between", padding: 0 }}>
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
				<CardActions sx={{ justifyContent: "space-between" }}>
					<Button color="primary" size="small" variant="contained">
						Button
					</Button>
					<SvgAlertCircle />
				</CardActions>
			</Card>

			{/* /////////////////////////////////////////// */}
			{/* SECOND TYPE OF CARDS */}
			{/* FIRST IMAGE CARD + BUTTON */}

			<Card sx={{ maxWidth: 345 }}>
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
			<Card sx={{ maxWidth: 345 }}>
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
