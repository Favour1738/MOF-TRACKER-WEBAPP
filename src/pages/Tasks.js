import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    if (editTask) {
      setTasks(tasks.map((t) => (t.id === editTask.id ? task : t)));
      setEditTask(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <AddTask onAdd={handleAddTask} taskToEdit={editTask} />
      {tasks.map((task) => (
        <div key={task.id} className="card">
          <h4>{task.title}</h4>
          <p>Status: {task.status}</p>
          <p>Assigned To: {task.assignedTo}</p>
          <Link to={`/task/${task.id}`}>View Details</Link>
          <button onClick={() => handleEdit(task)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
