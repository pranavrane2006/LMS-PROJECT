
import React from "react";
import StudentNavbar from "../../components/StudentNavbar";
import CourseCard from "../../components/CourseCard";
import "./StudentDashboard.css";

function StudentDashboard() {
  return (
    <div>
      <StudentNavbar />

      <div className="dashboard" id="dashboard">
        <h1>Welcome Back, Student!</h1>
        <p>Continue your learning journey.</p>

        <h2>My Courses</h2>

        <div className="course-list" id="courses">
          <CourseCard
            title="React JS"
            instructor="Pranav"
            progress={60}
          />

          <CourseCard
            title="Node JS"
            instructor="Disha"
            progress={35}
          />

          <CourseCard
            title="MongoDB"
            instructor="Gaurav"
            progress={80}
          />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
