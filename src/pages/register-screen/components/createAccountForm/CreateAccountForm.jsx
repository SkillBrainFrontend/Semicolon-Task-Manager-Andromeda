import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Box } from "@mui/material";

import { Button, Input } from "../../../../components/shared";

const LoginFormSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().min(8, "Min lenght is 8!").required("Required"),
});

function CreateAccountForm() {
	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			rememberMe: false,
		},

		validationSchema: LoginFormSchema,
		onSubmit: (formValues) => {
			console.log(formValues);
		},
	});

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<Input
				autoComplete="name"
				autoFocus
				error={errors.name}
				fullWidth
				helperText={errors.name}
				id="name"
				label="Full name"
				margin="normal"
				name="name"
				onChange={handleChange}
				required
				value={values.name}
			/>
			<Input
				autoComplete="email"
				autoFocus
				error={errors.email}
				fullWidth
				helperText={errors.email}
				id="email"
				label="Email Address"
				margin="normal"
				name="email"
				onChange={handleChange}
				required
				value={values.email}
			/>
			<Input
				autoComplete="current-password"
				error={errors.password}
				fullWidth
				helperText={errors.password}
				id="password"
				label="Password"
				margin="normal"
				name="password"
				onChange={handleChange}
				required
				type="password"
				value={values.password}
			/>

			<Button
				disabled={!isValid}
				fullWidth
				sx={{ mt: 3, mb: 2 }}
				type="submit"
				variant="contained"
			>
				Create Account
			</Button>
		</Box>
	);
}
export default CreateAccountForm;
