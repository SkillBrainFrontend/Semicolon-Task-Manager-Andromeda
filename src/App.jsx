import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import { SingIn, TestPage } from "./pages";

import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<LandingPage />} path="/" />
				<Route element={<TestPage />} path="/test" />
				<Route element={<SingIn />} path="/login" />
			</Routes>
		</div>
	);
}

export default App;
