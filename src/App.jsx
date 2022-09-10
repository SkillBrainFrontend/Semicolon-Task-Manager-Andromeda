import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import Test from "./pages/TestPage";
import Tasks from "./pages/Tasks";

import LoginPage from "./pages/Login";
import "./App.css";

function App() {
	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/test" element={<Test />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Grid>
	);
}

export default App;
