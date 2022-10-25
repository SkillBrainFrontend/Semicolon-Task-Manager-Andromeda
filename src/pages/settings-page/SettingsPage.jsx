import React from "react";
import { useDispatch, useSelector } from "react-redux";

import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid, InputAdornment, Typography } from "@mui/material";

import { withNavigationDrawer } from "../../components/navigation-drawer/withNavigationDrawer";
import { Button, Card, GlobalSearchBar, Input } from "../../components/shared";
import { openModal } from "../../store/app/app.slice";
import { modalTypes } from "../../store/app/constants";

function SettingsPage() {
	const dispatch = useDispatch();
	const loggedUser = useSelector((state) => state.app.auth.loggedUser.userInfo);
	const onLogOutClick = () => {
		dispatch(openModal(modalTypes.logOut));
	};
	const onEditProfileClick = () => {
		dispatch(openModal(modalTypes.editProfile));
	};

	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
			}}
		>
			<Grid
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					pb: "45px",
				}}
			>
				<GlobalSearchBar />
			</Grid>
			<Typography variant="h3">Settings</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}
			>
				<Button
					color="secondary"
					onClick={onLogOutClick}
					size="small"
					variant="contained"
				>
					Log Out
				</Button>
			</Box>
			<Typography variant="h6">Account Settings</Typography>
			<Card>
				<Box
					component="form"
					padding="30px"
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
					}}
				>
					<Input
						id="input-with-icon-adornment"
						margin="normal"
						placeholder="Fullname"
						value={loggedUser.fullName}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PersonIcon color="primary" />
								</InputAdornment>
							),
						}}
					/>
					<Input
						margin="normal"
						placeholder="Email Address"
						value={loggedUser.email}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailIcon color="primary" />
								</InputAdornment>
							),
						}}
					/>

					<Input
						disabled
						margin="normal"
						placeholder="Password "
						type="password"
						value="************"
					/>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-end",
					}}
				>
					<Button
						onClick={onEditProfileClick}
						size="small"
						type="submit"
						variant="contained"
					>
						Edit
					</Button>
				</Box>
			</Card>
		</Box>
	);
}

export default withNavigationDrawer(SettingsPage);
