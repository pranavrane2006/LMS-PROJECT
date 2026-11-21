
import React from "react";

function EnrolledCourses() {
  const courses = [
    { id: 1, title: "React JS", progress: 60 },
    { id: 2, title: "Node JS", progress: 35 },
    { id: 3, title: "MongoDB", progress: 80 }
  ];

  return (
    <div className="dashboard">
      <h1>My Enrolled Courses</h1>
      <p>Continue learning from where you left off.</p>

      <div className="course-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>

            <p>{course.progress}% Completed</p>

            <div className="progress-bg">
              <div
                className="progress-fill"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <button>Continue Learning</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EnrolledCourses;
