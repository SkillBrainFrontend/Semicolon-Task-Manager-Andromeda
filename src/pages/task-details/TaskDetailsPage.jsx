/* eslint-disable radix */
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function TaskDetailsPage() {
	const params = useParams();
	const task = useSelector((state) =>
		state.entities.tasks.data.find((item) => item.id === parseInt(params.id))
	);
	return <div>TaskDetailsPage id={task.title}</div>;
}
