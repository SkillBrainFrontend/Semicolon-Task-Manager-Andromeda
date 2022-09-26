import React from "react";
import { Route, Routes } from "react-router-dom";

import { TaskCard } from "./components";
import {
	OverviewPage,
	RecoverPassword,
	RegisterPage,
	ResetPassword,
	SettingsPage,
	SingInPage,
	TasksBoardPage,
	TasksPage,
	TestPage,
} from "./pages";

import "./App.css";

function App() {
	return (
		<Routes>
			<Route element={<TestPage />} path="/test" />
			<Route element={<SingInPage />} path="/login" />
			<Route element={<RegisterPage />} path="/register" />
			<Route element={<ResetPassword />} path="/reset-password" />
			<Route element={<RecoverPassword />} path="/recover-password" />
			<Route element={<TasksBoardPage />} path="/tasks-board" />
			<Route element={<SettingsPage />} path="/settings" />
			<Route element={<OverviewPage />} path="/overview" />
			<Route element={<TasksPage />} path="/" />
			<Route element={<TaskCard />} path="/task" />
		</Routes>
	);
}

export default App;
