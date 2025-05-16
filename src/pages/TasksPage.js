import React, { useState } from "react";
import useTasks from "../hooks/useTasks";
import { NavLink } from "react-router-dom";
import "./TasksPage.css";



function TasksPage() {
  const { tasks, addTask, deleteTask} = useTasks();
  const [newTask, setNewTask] = useState({
    title: "",
    assignee: "",
    dueDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.assignee && newTask.dueDate && newTask.description) {
      addTask(newTask);
      setNewTask({
        title: "",
        assignee: "",
        dueDate: "",
        description: "",
      });
    }
  };
  

  return (
    <div className="page tasks-page">
      <h2>Task Management</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="assignee"
          placeholder="Assignee"
          value={newTask.assignee}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={handleChange}
          required
          rows={3}
        />
        <button type="submit" className="btn-primary">
          Add Task
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty-msg">No tasks added yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-card">
              <h3>{task.title}</h3>
              <p>
                <strong>Assignee:</strong> {task.assignee}
              </p>
              <p>
                <strong>Due:</strong> {task.dueDate}
              </p>
              <p>{task.description}</p>
              <NavLink to={`/tasks/${index}`} className="details-link">
                View Details →
              </NavLink>
              <button
  className="btn-delete"
  onClick={() => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(index);
    }
  }}
>
  Delete
</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TasksPage;
