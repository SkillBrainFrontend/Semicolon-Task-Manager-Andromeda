import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { AlertTitle, Box, Snackbar } from "@mui/material";

import { Alert, Button, Input } from "../../../../components/shared";
import { registerAction } from "../../../../store/user/user.slice";

const LoginFormSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.min(8, "Min lenght is 8!")
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			"Password must contain at least 8 characters, one uppercase, one number and one special case character"
		)
		.required("Required"),
});

function CreateAccountForm() {
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);
	const [alertBox, setAlertBox] = React.useState({
		title: "Success",
		type: "success",
		message: "",
	});

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const onSuccess = () => {
		setOpen(true);
		setAlertBox({
			title: "Success",
			message: "Account was created! Go to LogIn page to SingIn.",
			type: "success",
		});
	};

	const onError = (errorArray) => {
		setOpen(true);
		setAlertBox({
			title: "Error",
			message: errorArray,
			type: "error",
		});
	};

	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			rememberMe: false,
		},

		validationSchema: LoginFormSchema,
		onSubmit: (formValues) => {
			dispatch(registerAction({ ...formValues }, onSuccess, onError));
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
			<Snackbar
				onClose={handleClose}
				open={open}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
			>
				<Alert
					onClose={handleClose}
					severity={alertBox.type}
					sx={{
						width: 350,
					}}
				>
					<AlertTitle>{alertBox.title}</AlertTitle>
					{alertBox.message}
				</Alert>
			</Snackbar>
		</Box>
	);
}
export default CreateAccountForm;
