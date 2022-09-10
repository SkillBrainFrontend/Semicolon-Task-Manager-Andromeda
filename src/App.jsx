import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/TestPage";
import Tasks from "./pages/Tasks";

import LoginPage from "./pages/Login";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/test" element={<Test />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</div>
	);
}

export default App;
