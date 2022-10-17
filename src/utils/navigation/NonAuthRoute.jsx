import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function NonAuthRoute({ children }) {
	const isLoggedIn = useSelector((state) => state.app.auth.isLoggedIn);
	return !isLoggedIn ? children : <Navigate replace to="/overview" />;
}

NonAuthRoute.propTypes = {
	children: PropTypes.node,
};
