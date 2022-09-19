import React from "react";
import { Route, Routes } from "react-router-dom";

import { RegisterPage, SingInPage, TasksPage, TestPage } from "./pages";

import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<TasksPage />} path="/" />

				<Route element={<TestPage />} path="/test" />
				<Route element={<SingInPage />} path="/login" />
				<Route element={<RegisterPage />} path="/register" />
			</Routes>
		</div>
	);
}

export default App;
