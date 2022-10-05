import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogActions, IconButton } from "@mui/material";

import { closeModal } from "../../store/app/app.slice";
import { modalTypes } from "../../store/app/constants";
import { CreateTaskForm, DeleteTask, EditTaskForm, LogOutModal } from "..";

export default function Modal() {
	const [fullWidth, setFullWidth] = React.useState(true);
	const [maxWidth, setMaxWidth] = React.useState("sm");

	const open = useSelector((state) => state.app.ui.modal.isOpen);
	const modalType = useSelector((state) => state.app.ui.modal.modalType);
	const dispatch = useDispatch();

	const getModalContent = () => {
		switch (modalType) {
			case modalTypes.createTask:
				return <CreateTaskForm />;
			case modalTypes.editTask:
				return <EditTaskForm />;
			case modalTypes.deleteTask:
				return <DeleteTask />;
			case modalTypes.logOut:
				return <LogOutModal />;
			default:
				return null;
		}
	};

	/*
	const handleClickOpen = () => {
		dispatch(openModal());
	};
   */

	const handleClose = () => {
		dispatch(closeModal());
	};
	/*
	const handleMaxWidthChange = (event) => {
		setMaxWidth(
			// @ts-expect-error autofill of arbitrary value is not handled.
			event.target.value
		);
	};
	*/

	/*
	const handleFullWidthChange = (event) => {
		setFullWidth(event.target.checked);
	};
	*/
	return (
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

			{getModalContent()}
		</Dialog>
	);
}
