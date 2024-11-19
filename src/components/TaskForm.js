import React, { useState } from "react";

function TaskForm({ addTask }) {
	// State for task form inputs
	const [task, setTask] = useState({ name: "", description: "" });

	// Handle form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setTask({ ...task, [name]: value });
	};

	// Validate and submit the form
	const handleSubmit = (e) => {
		e.preventDefault();
		if (task.name && task.description) {
			addTask(task);
			setTask({ name: "", description: "" }); // Clear the form
		} else {
			alert("Both fields are required.");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				placeholder="Task Name"
				value={task.name}
				onChange={handleChange}
				required
			/>
			<textarea
				name="description"
				placeholder="Task Description"
				value={task.description}
				onChange={handleChange}
				required
			/>
			<button type="submit">Add Task</button>
		</form>
	);
}

export default TaskForm;
