/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Frame from "../../../assets/images/Frame 22.png";

import CreateAccountForm from "./CreateAccountForm";

import "./WelcomeScreen.css";

function WelcomeScreen() {
	return (
		<div className="content">
			<div className="orientation">
				<img className="blueImg" src={Frame} />
				<CreateAccountForm />
			</div>
		</div>
	);
}

export default WelcomeScreen;
