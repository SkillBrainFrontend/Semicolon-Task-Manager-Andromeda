import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { createTask } from "../../store/task/task.slice";
import { Button, Input } from "../shared";

const priorityMock = [
	{
		id: 1,
		priority: "Less important",
	},

	{
		id: 2,
		priority: "Important",
	},

	{
		id: 3,
		priority: "Very Important",
	},
];

const LoginFormSchema = Yup.object().shape({
	taskName: Yup.string().min(5).required("Required"),
	// taskPriority: Yup.string().required("Required"),
	date: Yup.string().required("Required"),
	description: Yup.string().min(5).required("Required"),
});
function SelectButton() {
	return (
		<Box sx={{ width: "auto" }}>
			<FormControl fullWidth>
				<InputLabel>Task Priority</InputLabel>
				<Select id="Priority" label="Priority">
					{priorityMock.map((item) => (
						<MenuItem id={item.id} key={item.id} value={item.id}>
							{`${item.priority}`}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

function EditTaskForm() {
	const theme = useTheme();
	const dispatch = useDispatch();
	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
			taskName: "",
			date: "",
			description: "",
			isValid: true,
		},

		validationSchema: LoginFormSchema,
		onSubmit: (formValues) => {
			console.log(formValues);
			dispatch(createTask({ name: formValues.taskName }));
		},
	});

	return (
		<Box component="form" onSubmit={handleSubmit} padding="30px" sx={{ mt: 1 }}>
			<Typography component="h1" sx={{ fontWeight: "bold" }} variant="h5">
				Edit Profile
			</Typography>
			<Input
				autoComplete="dullname"
				autoFocus
				error={errors.dullname}
				fullWidth
				helperText={errors.dullname}
				id="Task Name"
				label="Dullname"
				margin="normal"
				name="dullname"
				onChange={handleChange}
				placeholder="Type your name here..."
				required
				value={values.dullname}
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
