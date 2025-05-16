import React, { useEffect, useState } from "react";
import "./Form.css";

function AddTask({ onAdd, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
      setAssignedTo(taskToEdit.assignedTo);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskToEdit?.id || Math.floor(Math.random() * 10000),
      title,
      description,
      status,
      assignedTo
    };
    onAdd(newTask);
    setTitle("");
    setDescription("");
    setStatus("Pending");
    setAssignedTo("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{taskToEdit ? "Edit Task" : "Add New Task"}</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        type="text"
        placeholder="Assigned To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default AddTask;
