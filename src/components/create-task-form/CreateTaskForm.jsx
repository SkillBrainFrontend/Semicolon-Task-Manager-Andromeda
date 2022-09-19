import React from "react";
import { useFormik } from "formik";
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
import { Stack } from "@mui/system";

import { Button, Input } from "../shared";

const LoginFormSchema = Yup.object().shape({
	taskName: Yup.string().min(5, "Min lenght is 5!").required("Required"),
	taskPriority: Yup.string().required("Required"),
	date: Yup.string().required("Required"),
	description: Yup.string().min(5, "Min lenght is 5!").required("Required"),
});
function SelectButton() {
	const [priority, setPriority] = React.useState("");

	const handleChange = (event) => {
		setPriority(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Task Priority</InputLabel>
				<Select
					id="demo-simple-select"
					label="Age"
					labelId="demo-simple-select-label"
					onChange={handleChange}
					value={priority}
				>
					<MenuItem value={10}>Less Important</MenuItem>
					<MenuItem value={20}>Important</MenuItem>
					<MenuItem value={30}>Very important</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

function CreateTaskForm() {
	const theme = useTheme();
	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
			taskName: "",
			taskPriority: "",
			date: "",
			description: "",
		},

		validationSchema: LoginFormSchema,
		onSubmit: (formValues) => {
			console.log(formValues);
		},
	});

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<Typography component="h1" sx={{ fontWeight: "bold" }} variant="h5">
				Create Task
			</Typography>
			<Input
				autoComplete="taskName"
				autoFocus
				error={errors.taskName}
				fullWidth
				helperText={errors.taskName}
				id="Task Name"
				label="Task Name"
				margin="normal"
				name="taskName"
				onChange={handleChange}
				required
				value={values.taskName}
			/>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="flex-start"
				spacing={2}
				sx={{ width: "100%", padding: theme.spacing(3, 0) }}
			>
				<SelectButton
					autoComplete="Task Priority"
					error={errors.taskPriority}
					fullWidth
					helperText={errors.taskPriority}
					id="taskPriority"
					label="Task Priority"
					margin="normal"
					name="taskPriority"
					onChange={handleChange}
					required
					value={values.taskPriority}
				/>

				<Input
					autoComplete="date"
					error={errors.date}
					fullWidth
					helperText={errors.date}
					id="date"
					label="Select A Date"
					margin="normal"
					name="date"
					onChange={handleChange}
					required
					type="date"
					value={values.date}
				/>
			</Stack>

			<Input
				autoComplete="description"
				error={errors.description}
				fullWidth
				helperText={errors.description}
				id="description"
				label="Task Description"
				margin="normal"
				name="description"
				onChange={handleChange}
				placeholder="Type your content here..."
				required
				type="text"
				value={values.description}
			/>

			<Button
				disabled={!isValid}
				sx={{ mt: 3, mb: 2 }}
				type="submit"
				variant="contained"
			>
				Create Task
			</Button>
		</Box>
	);
}
export default CreateTaskForm;
