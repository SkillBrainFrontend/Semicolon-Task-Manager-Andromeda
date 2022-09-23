import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
	Box,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	Typography,
} from "@mui/material";

import { Button, Input } from "../../../../components/shared";

const LoginFormSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().min(8, "Min lenght is 8!").required("Required"),
});

function LoginForm() {
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
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				mt: 2,
				width: "90%",
				display: "flex",
				flexDirection: "column",
			}}
		>
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
				control={
					<Checkbox
						checked={values.rememberMe.checked}
						color="primary"
						name="rememberMe"
						onChange={handleChange}
						value="remember"
					/>
				}
				label={
					<Typography sx={{ fontWeight: 600 }} variant="body2">
						Keep me Signed in
					</Typography>
				}
				sx={{
					mt: 5,
				}}
			/>
			<Button
				disabled={!isValid}
				sx={{ mt: 6, mb: 6, width: "60%" }}
				type="submit"
				variant="contained"
			>
				Log In
			</Button>
			<Grid container>
				<Grid item xs>
					<Link
						href="/recover-password"
						sx={{ fontWeight: 600 }}
						variant="body1"
					>
						Forgot password?
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
}
export default LoginForm;
