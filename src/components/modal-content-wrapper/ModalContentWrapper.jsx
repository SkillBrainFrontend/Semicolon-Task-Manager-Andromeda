import * as React from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	FormControl,
	IconButton,
} from "@mui/material";

export default function ModalContentWrapper() {
	const [open, setOpen] = React.useState(true);
	const [fullWidth, setFullWidth] = React.useState(true);
	const [maxWidth, setMaxWidth] = React.useState("sm");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleMaxWidthChange = (event) => {
		setMaxWidth(
			// @ts-expect-error autofill of arbitrary value is not handled.
			event.target.value
		);
	};

	const handleFullWidthChange = (event) => {
		setFullWidth(event.target.checked);
	};

	return (
		<>
			<Button
				onClick={handleClickOpen}
				variant="outlined"
				sx={{
					display: "flex",
					justifyContent: "center",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				Open dialog
			</Button>
			<Dialog
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				onClose={handleClose}
				open={open}
			>
				<DialogActions>
					<IconButton onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</DialogActions>

				<Box
					component="form"
					noValidate
					sx={{
						display: "flex",
						flexDirection: "column",
						m: "auto",
						width: "fit-content",
					}}
				>
					<FormControl sx={{ mt: 35, minWidth: 30 }} />
				</Box>
			</Dialog>
		</>
	);
}
