import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { Box, Typography } from "@mui/material";

import { createTask } from "../../store/task/task.slice";
import { Button, Input } from "../shared";

const LoginFormSchema = Yup.object().shape({
	dullName: Yup.string().min(5).required("Required"),
	email: Yup.string().required("Required"),
	password: Yup.string().min(5).required("Required"),
});

function EditTaskForm() {
	const dispatch = useDispatch();
	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
			fullName: "",
			email: "",
			password: "",
			isValid: true,
		},

		validationSchema: LoginFormSchema,
		onSubmit: (formValues) => {
			console.log(formValues);
			dispatch(createTask({ dullName: formValues.fullName }));
		},
	});

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
				id="Full name"
				label="Full name"
				margin="normal"
				name="dullName"
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

			<Input
				autoComplete="password"
				error={errors.password}
				fullWidth
				helperText={errors.password}
				id="password"
				label="Password"
				margin="normal"
				name="password"
				onChange={handleChange}
				placeholder="Type your password here..."
				required
				type="password"
				value={values.password}
			/>

			<Button
				disabled={!isValid}
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
