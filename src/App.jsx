import React from "react";
import { Route, Routes } from "react-router-dom";

import Tasks from "./pages/Tasks";
import Test from "./pages/TestPage";

import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<Tasks />} path="/" />
				<Route element={<Test />} path="/test" />
			</Routes>
		</div>
	);
}

export default App;
