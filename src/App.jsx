import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./pages/login-page";
import Tasks, {
	RecoverPassword,
	RecoverPasswordWrapper,
	RegisterPage,
	ResetPassword,
	TestPage,
} from "./pages";

import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<Tasks />} path="/" />
				<Route element={<RecoverPasswordWrapper />} path="/recover" />
				<Route element={<TestPage />} path="/test" />
				<Route element={<LoginForm />} path="/login" />
				<Route element={<RegisterPage />} path="/register" />
				<Route element={<ResetPassword />} path="/reset-password" />
				<Route element={<RecoverPassword />} path="/recover-password" />
			</Routes>
		</div>
	);
}

export default App;
