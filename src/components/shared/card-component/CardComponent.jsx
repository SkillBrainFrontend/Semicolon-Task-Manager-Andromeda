import * as React from "react";

import { Box, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

import SvgAlertCircle from "../../../assets/icons/AlertCircle";
import SvgMoreDots from "../../../assets/icons/MoreDots";
import Button from "../button/Button";

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
				</CardActionArea>
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
						<Stack
							alignItems="center"
							direction="row"
							justifyContent="space-between"
						>
							<Typography
								component="div"
								fontWeight={700}
								gutterBottom
								variant="h5"
							>
								Card
							</Typography>
							<SvgMoreDots />
						</Stack>
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
					<Button color="primary" size="small" variant="contained">
						Button
					</Button>
				</CardActionArea>
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
				</CardActionArea>
			</Card>
		</Box>
	);
}
