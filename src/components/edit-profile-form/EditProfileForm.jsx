import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { Box, Typography } from "@mui/material";

import { closeModal, updateLoggedUser } from "../../store/app/app.slice";
import { Button, Input } from "../shared";

const LoginFormSchema = Yup.object().shape({
	fullName: Yup.string().min(5).required("Required"),
	email: Yup.string().email().required("Required"),
});

function EditTaskForm() {
	const dispatch = useDispatch();
	const loggedUser = useSelector((state) => state.app.auth.loggedUser.userInfo);
	const onSuccess = () => {
		dispatch(closeModal());
	};

	const onError = () => {};
	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
			fullName: loggedUser.fullName,
			email: loggedUser.email,
			isValid: true,
		},

		validationSchema: LoginFormSchema,
		onSubmit: (formValues) => {
			dispatch(updateLoggedUser({ ...formValues }, onSuccess, onError));
		},
	});

	const isUpdateButtonDisabled =
		!isValid ||
		(values.fullName === loggedUser.fullName &&
			values.email === loggedUser.email);

	return (
		<Box component="form" onSubmit={handleSubmit} padding="30px" sx={{ mt: 1 }}>
			<Typography component="h1" sx={{ fontWeight: "bold" }} variant="h5">
				Edit Profile
			</Typography>
			<Input
				autoComplete="dullName"
				autoFocus
				error={errors.fullName}
				fullWidth
				helperText={errors.fullName}
				id="Full Name"
				label="Full Name"
				margin="normal"
				name="fullName"
				onChange={handleChange}
				placeholder="Type your name here..."
				required
				value={values.fullName}
			/>

			<Input
				autoComplete="email"
				error={errors.email}
				fullWidth
				helperText={errors.email}
				id="email"
				label="Email address"
				margin="normal"
				name="email"
				onChange={handleChange}
				placeholder="Type your email here..."
				required
				type="text"
				value={values.email}
			/>

			<Button
				disabled={isUpdateButtonDisabled}
				sx={{ mt: 3, mb: 2 }}
				type="submit"
				variant="contained"
			>
				Save
			</Button>
		</Box>
	);
}
export default EditTaskForm;
