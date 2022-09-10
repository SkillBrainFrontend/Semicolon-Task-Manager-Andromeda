import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/TestPage";
import Tasks from "./pages/Tasks";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
			  <Route path="/" element={<Test />} />
				<Route path="/" element={<Tasks />} />
				{/* <Route path="/" element={<Test />} /> */}
			</Routes>
		</div>
	);
}

export default App;
