import React from "react";
import { useParams } from "react-router-dom";
import useTasks from "../hooks/useTasks";

function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks[parseInt(id)];

  if (!task) return <p>Task not found.</p>;

  return (
    <div className="page">
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Assignee:</strong> {task.assignee}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Description:</strong> {task.description}</p>
    </div>
  );
}

export default TaskDetails;
