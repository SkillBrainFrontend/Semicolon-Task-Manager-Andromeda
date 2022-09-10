import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/TestPage";
import Tasks from "./pages/Tasks";
import RegisterPage from "./pages/Register";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/test" element={<Test />} />
				<Route path="/login" element={<RegisterPage />} />
			</Routes>
		</div>
	);
}

export default App;
