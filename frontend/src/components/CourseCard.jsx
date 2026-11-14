
import React from "react";
import ProgressBar from "./ProgressBar";

function CourseCard({ title, instructor, progress }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>

      <ProgressBar percentage={progress} />

      <button>Continue Learning</button>
    </div>
  );
}

export default CourseCard;
