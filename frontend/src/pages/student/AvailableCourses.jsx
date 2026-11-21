
import React, { useState } from "react";
import courses from "../../data/courses";

function AvailableCourses({ enrolledCourses, onEnroll }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="dashboard">
      <h1>Available Courses</h1>
      <p>Explore and enroll in courses to start learning.</p>

      <div className="course-filters">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
        </select>

        <button onClick={() => {
          setSearch("");
          setCategory("All");
        }}>
          Reset Filters
        </button>
      </div>

      <h3>
        Showing {filteredCourses.length} of {courses.length} Courses
      </h3>

      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => {
            const isEnrolled = enrolledCourses.some(
              item => item.id === course.id
            );

            return (
              <div className="course-card" key={course.id}>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p>Instructor: {course.instructor}</p>
                <p>Category: {course.category}</p>
                <p>Level: {course.level}</p>
                <p>Duration: {course.duration}</p>

                <button
                  onClick={() => onEnroll(course)}
                  disabled={isEnrolled}
                >
                  {isEnrolled ? "Already Enrolled" : "Enroll Now"}
                </button>
              </div>
            );
          })
        ) : (
          <p className="no-courses">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}

export default AvailableCourses;
