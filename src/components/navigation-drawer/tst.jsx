import React, { useState } from "react";

const colors = ["green", "red", "green"];
const Square = null; // mock

function App() {
	const [displayedColors, setDisplayedColors] = useState(colors);

	const onSquareClick = (position) => {
		if (displayedColors(position === "red")) {
			const newColors = displayedColors.filter(
				(item, index) => index !== position
			);
			setDisplayedColors(newColors);
		} else {
			const newColors = displayedColors.map((item, index) => {
				if (index === position) {
					return "red";
				}
				return item;
			});
			setDisplayedColors([...newColors, "green"]);
		}
	};
	return (
		<div>
			{displayedColors.map((item) => (
				<Square color={item} onClick={onSquareClick} />
			))}
		</div>
	);
}
