
import React from "react";

function EnrolledCourses({ enrolledCourses, onUnenroll }) {
  return (
    <div className="dashboard">
      <h1>My Enrolled Courses</h1>

      <p>
        You are enrolled in {enrolledCourses.length} courses.
      </p>

      <div className="course-list">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map(course => (
            <div className="course-card" key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p>Instructor: {course.instructor}</p>
              <p>Level: {course.level}</p>
              <p>Duration: {course.duration}</p>

              <a href="#learning">
                <button>Continue Learning</button>
              </a>

              <button
                className="unenroll-button"
                onClick={() => onUnenroll(course.id)}
              >
                Unenroll
              </button>
            </div>
          ))
        ) : (
          <div className="course-card">
            <h2>No Courses Enrolled Yet</h2>
            <p>Visit Available Courses to start learning.</p>
            <a href="#available">
              <button>Explore Courses</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnrolledCourses;
