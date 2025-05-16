import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AssetsPage from "./pages/AssetsPage";
import TasksPage from "./pages/TasksPage";
import AssetDetails from "./pages/AssetDetails";
import TaskDetails from "./pages/TaskDetails";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/assets/:id" element={<AssetDetails />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default App;
