import React from "react";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import { NonAuthRoute } from "./utils/navigation/NonAuthRoute";
import { ProtectedRoute } from "./utils/navigation/ProtectedRoute";
import { Modal } from "./components";
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
		<Box>
			<Routes>
				<Route
					path="/login"
					element={
						<NonAuthRoute>
							<SingInPage />
						</NonAuthRoute>
					}
				/>
				<Route
					path="/register"
					element={
						<NonAuthRoute>
							<RegisterPage />
						</NonAuthRoute>
					}
				/>
				<Route element={<TestPage />} path="/test" />
				<Route element={<ResetPassword />} path="/reset-password" />
				<Route element={<RecoverPassword />} path="/recover-password" />
				<Route
					path="/tasks-board"
					element={
						<ProtectedRoute>
							<TasksBoardPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/settings"
					element={
						<ProtectedRoute>
							<SettingsPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/overview"
					element={
						<ProtectedRoute>
							<OverviewPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<TasksPage />
						</ProtectedRoute>
					}
				/>
			</Routes>

			<Modal />
		</Box>
	);
}

export default App;
