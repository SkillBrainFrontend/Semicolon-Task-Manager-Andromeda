import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Box, Checkbox, FormControlLabel, Grid, Link } from "@mui/material";

import { Button, Input } from "../../shared";

const LoginFormSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().min(8, "Min lenght is 8!").required("Required"),
});

function CreateAccountForm() {
	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
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
			<FormControlLabel
				label="Remember me"
				control={
					<Checkbox
						checked={values.rememberMe.checked}
						color="primary"
						name="rememberMe"
						onChange={handleChange}
						value="remember"
					/>
				}
			/>
			<Button
				disabled={!isValid}
				fullWidth
				sx={{ mt: 3, mb: 2 }}
				type="submit"
				variant="contained"
			>
				Sign In
			</Button>
			<Grid container>
				<Grid item xs>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link href="#" variant="body2">
						Don&apos;t have an account? Sign Up
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
}
export default CreateAccountForm;
