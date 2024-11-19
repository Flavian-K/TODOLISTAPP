import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask, toggleCompletion }) {
	return (
		<div>
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					task={task}
					updateTask={updateTask}
					deleteTask={deleteTask}
					toggleCompletion={toggleCompletion}
				/>
			))}
		</div>
	);
}

export default TaskList;
