import React from "react";

function StudentNavbar() {
  return (
    <nav className="navbar">
      <h2>LearnHub</h2>

      <div>
        <a href="#dashboard">Dashboard</a>
        <a href="#courses">My Courses</a>
        <a href="#available">Available Courses</a>
      </div>
    </nav>
  );
}

export default StudentNavbar;