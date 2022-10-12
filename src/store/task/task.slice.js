import { createSlice } from "@reduxjs/toolkit";

const data = [
	{
		id: "T-1",
		name: "Create a Design System for Enum Workspace.",
		status: "Todo",
		dueDate: new Date(2022, 5, 23),
	},
	{
		id: "T-2",
		name: "12 Create a Design System for Enum Workspace.",
		status: "In Progress",
		dueDate: new Date(2022, 7, 24),
	},
	{
		id: "T-3",
		name: "13 Create a Design System for Enum Workspace.",
		status: "Completed",
		dueDate: new Date(2022, 6, 13),
	},
	{
		id: "T-4",
		name: "14 Create a Design System for Enum Workspace.",
		status: "Todo",
		dueDate: new Date(2022, 5, 23),
	},
	{
		id: "T-5",
		name: "15 Create a Design System for Enum Workspace.",
		status: "Completed",
		dueDate: new Date(2022, 6, 13),
	},
	{
		id: "T-6",
		name: "Create a Design System for Enum Workspace.",
		status: "Pending",
		dueDate: new Date(2022, 5, 23),
	},
	{
		id: "T-7",
		name: "16 Create a Design System for Enum Workspace.",
		status: "Todo",
		dueDate: new Date(2022, 5, 23),
	},
];

const taskSlice = createSlice({
	name: "tasks",
	initialState: data,
	reducers: {
		createTask: (state, action) => {
			const id = Math.random().toString(36).slice(2, 10);
			state.push({ ...action.payload, id, status: "Todo" });
		},
	},
});

export const { createTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
