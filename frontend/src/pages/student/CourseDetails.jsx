
import React from "react";

function CourseDetails() {
  const lessons = [
    "Introduction to React",
    "Components and Props",
    "State and Events",
    "React Hooks",
    "Working with Forms",
    "Building a React Project"
  ];

  return (
    <div className="dashboard">
      <h1>React JS Course</h1>

      <p>
        Learn React from basics to advanced concepts
        through practical lessons.
      </p>

      <div className="course-card">
        <h2>Course Information</h2>
        <p>Instructor: Pranav</p>
        <p>Level: Beginner</p>
        <p>Duration: 4 Weeks</p>
        <p>Total Lessons: {lessons.length}</p>
      </div>

      <h2>Course Curriculum</h2>

      {lessons.map((lesson, index) => (
        <div className="course-card" key={index}>
          <p>Lesson {index + 1}: {lesson}</p>
        </div>
      ))}

      <a href="#learning">
        <button>Start Learning</button>
      </a>
    </div>
  );
}

export default CourseDetails;
