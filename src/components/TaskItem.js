import React, { useState } from "react";

function TaskItem({ task, updateTask, deleteTask, toggleCompletion }) {
	const [isEditing, setIsEditing] = useState(false);
	const [updatedTask, setUpdatedTask] = useState(task);

	// Handle input changes while editing
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdatedTask({ ...updatedTask, [name]: value });
	};

	// Submit updated task
	const handleUpdate = () => {
		updateTask(task.id, updatedTask);
		setIsEditing(false);
	};

	return (
		<div className={`task-item ${task.completed ? "completed" : ""}`}>
			{isEditing ? (
				<div>
					<input
						type="text"
						name="name"
						value={updatedTask.name}
						onChange={handleChange}
					/>
					<textarea
						name="description"
						value={updatedTask.description}
						onChange={handleChange}
					/>
					<button onClick={handleUpdate}>Save</button>
					<button onClick={() => setIsEditing(false)}>Cancel</button>
				</div>
			) : (
				<div>
					<h3>{task.name}</h3>
					<p>{task.description}</p>
					<button onClick={() => toggleCompletion(task.id)}>
						{task.completed ? "Mark Incomplete" : "Mark Complete"}
					</button>
					<button onClick={() => setIsEditing(true)}>Edit</button>
					<button onClick={() => deleteTask(task.id)}>Delete</button>
				</div>
			)}
		</div>
	);
}

export default TaskItem;
