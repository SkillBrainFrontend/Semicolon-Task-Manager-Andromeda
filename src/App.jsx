import React from "react";
import { Route, Routes } from "react-router-dom";

import { TaskCard } from "./components";
import {
	RecoverPassword,
	RecoverPasswordWrapper,
	RegisterPage,
	ResetPassword,
	SingInPage,
	TasksPage,
	TestPage,
} from "./pages";

import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<TasksPage />} path="/" />
				<Route element={<RecoverPasswordWrapper />} path="/recover" />
				<Route element={<TestPage />} path="/test" />
				<Route element={<SingInPage />} path="/login" />
				<Route element={<RegisterPage />} path="/register" />
				<Route element={<ResetPassword />} path="/reset-password" />
				<Route element={<RecoverPassword />} path="/recover-password" />
				<Route element={<TaskCard />} path="/task" />
			</Routes>
		</div>
	);
}

export default App;
