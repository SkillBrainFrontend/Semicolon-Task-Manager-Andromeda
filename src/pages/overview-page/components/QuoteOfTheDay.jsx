import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { Button } from "../../../components/shared";

export default function QuoteOfTheDay() {
	// States
	const loggedUser = useSelector((state) => state.app.auth.loggedUser.userInfo);
	const [quote, setQuote] = useState("");
	const [backgroundQoute, setBackgroundQoute] = useState("");
	// Fetch Data
	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(`https://quotes.rest/qod?category=inspire`);
				const data = await res.json();
				setQuote(data.contents.quotes[0].quote);
				setBackgroundQoute(data.contents.quotes[0].background);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, []);

	// App
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					m: "3rem 0 0 0",
					alignItems: "center",
				}}
			>
				<Box
					sx={{ fontSize: "5rem", textAlign: "center", padding: "0 1rem 0 0" }}
				>
					&#128075;
				</Box>

				<Box>
					<Typography variant="h4" sx={{ fontWeight: "bold" }}>
						Hi {loggedUser?.fullname},
					</Typography>
					<Typography variant="h6">
						Welcome To Semicolon Task Manager
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{
					background: `url(${backgroundQoute})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					margin: "2rem 0",
					width: "100%",
					height: "180px",
					borderRadius: "20px",
					color: "#fff",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						padding: "0 3rem",
						display: "flex",
						justifyContent: "space-between",
						height: "100%",
						width: "100%",
						alignItems: "center",
					}}
				>
					<Box>
						<Typography variant="h5" fontWeight="bold">
							{quote}
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							width: "100%",
							height: "70%",
							alignItems: "flex-end",
						}}
					>
						<CloseIcon fontSize="large" />
						<Button size="small" variant="contained">
							Small
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
