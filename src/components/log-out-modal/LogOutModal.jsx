import React from "react";
import { useDispatch } from "react-redux";

import { Stack, Typography } from "@mui/material";

import { closeModal, logOut } from "../../store/app/app.slice";
import { Button, Card } from "../shared";

function LogOutModal() {
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(closeModal());
	};

	const onLogOutClick = () => {
		dispatch(logOut());
		handleCloseModal();
	};
	return (
		<Card>
			<Typography
				component="h1"
				sx={{ fontWeight: "bold", mb: 3 }}
				variant="h5"
			>
				You are about to LogOut
			</Typography>
			<Typography color="text.secondary" component="h1" variant="body1">
				Are you sure you delete the task{" "}
				<b>‘Create a Design System for Enum’</b> ? This task is in-progress?{" "}
			</Typography>

			<Stack
				alignItems="center"
				direction="row"
				gap={2}
				justifyContent="flex-start"
				sx={{
					my: 5,
				}}
			>
				<Button
					onClick={handleCloseModal}
					sx={{ textTransform: "none" }}
					type="submit"
					variant="contained"
				>
					<b>No, This was a Mistake </b>
				</Button>

				<Button
					color="secondary"
					onClick={onLogOutClick}
					sx={{ textTransform: "none" }}
					type="submit"
					variant="outlined"
				>
					<b>Yes, Log Me Out</b>
				</Button>
			</Stack>
		</Card>
	);
}
export default LogOutModal;
