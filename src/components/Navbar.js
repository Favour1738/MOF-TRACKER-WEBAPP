import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/logo.png" alt="Ministry Logo" />

        <span className="brand-text">Ministry ICT Tracker</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <NavLink exact="true" to="/" activeclassname="active" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/assets" activeclassname="active" onClick={() => setMenuOpen(false)}>
          Assets
        </NavLink>
        <NavLink to="/tasks" activeclassname="active" onClick={() => setMenuOpen(false)}>
          Tasks
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
