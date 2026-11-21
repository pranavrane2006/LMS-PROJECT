
import React from "react";

function StudentNavbar() {
  return (
    <nav className="navbar">
      <h2>LearnHub</h2>

      <div className="nav-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#courses">My Courses</a>
        <a href="#available">Available Courses</a>
      </div>

      <span>Student</span>
    </nav>
  );
}

export default StudentNavbar;
