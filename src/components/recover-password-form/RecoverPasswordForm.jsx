import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Box,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";

import { Button } from "../shared";

const RecoverPasswordFormSchema = Yup.object().shape({
	password: Yup.string().min(8).required("Required"),
	confirmPassword: Yup.string()
		.required("Required")
		.oneOf([Yup.ref("password"), null], "passwords must match"),
});

function RecoverPasswordForm() {
	const theme = useTheme();
	const [showPassword, setShowPassword] = useState(false);

	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
			password: "",
			confirmPassword: "",
		},

		validationSchema: RecoverPasswordFormSchema,
		onSubmit: (formValues) => {
			console.log(formValues);
		},
	});

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<Stack alignItems="flex-start" display="flex" flexDirection="column">
				<Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h5">
					Enter New Password
				</Typography>
				<Typography
					maxWidth="40%"
					sx={{ mb: 4, color: theme.palette.text.grey }}
					variant="body1"
				>
					Your account has been recovered. Enteryour new password to gain full
					control of your account.
				</Typography>

				<FormControl sx={{ m: 1, width: "70ch" }} variant="outlined">
					<InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
					<OutlinedInput
						autoFocus
						error={errors.password}
						id="filled-adornment-password"
						name="password"
						onChange={handleChange("password")}
						required
						type={showPassword ? "text" : "password"}
						value={values.password}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									edge="end"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					<FormHelperText>{errors.password}</FormHelperText>
				</FormControl>
				<FormControl sx={{ m: 1, width: "70ch" }} variant="outlined">
					<InputLabel htmlFor="filled-adornment-password">
						Confirm Password
					</InputLabel>
					<OutlinedInput
						error={errors.confirmPassword}
						id="filled-adornment-password"
						name="confirmPassword"
						onChange={handleChange("confirmPassword")}
						required
						type={showPassword ? "text" : "password"}
						value={values.confirmPassword}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									edge="end"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					<FormHelperText>{errors.confirmPassword}</FormHelperText>
				</FormControl>

				<Button
					disabled={!isValid}
					size="medium"
					sx={{ mt: 3, mb: 2 }}
					type="submit"
					variant="contained"
				>
					Save
				</Button>
			</Stack>
		</Box>
	);
}
export default RecoverPasswordForm;
