import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { loadTasks, saveTasks } from "./utils/localStorage";
import "./App.css";

function App() {
	// State to hold the list of tasks
	const [tasks, setTasks] = useState([]);

	// Load tasks from localStorage when the app initializes
	useEffect(() => {
		const storedTasks = loadTasks();
		if (storedTasks) {
			setTasks(storedTasks);
		}
	}, []);

	// Save tasks to localStorage whenever the task list changes
	useEffect(() => {
		saveTasks(tasks);
	}, [tasks]);

	// Add a new task to the list
	const addTask = (task) => {
		setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
	};

	// Update an existing task
	const updateTask = (id, updatedTask) => {
		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
		);
	};

	// Delete a task from the list
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Mark a task as completed
	const toggleCompletion = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	return (
		<div className="app">
			<h1>To-Do List</h1>
			<TaskForm addTask={addTask} />
			<TaskList
				tasks={tasks}
				updateTask={updateTask}
				deleteTask={deleteTask}
				toggleCompletion={toggleCompletion}
			/>
		</div>
	);
}

export default App;
