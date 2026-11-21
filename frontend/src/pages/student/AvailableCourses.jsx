
import React, { useState } from "react";

function AvailableCourses() {
  const courses = [
    {
      id: 1,
      title: "React JS",
      instructor: "Pranav",
      category: "Frontend",
      level: "Beginner",
      duration: "4 Weeks",
      description: "Learn components, props, hooks and state management."
    },
    {
      id: 2,
      title: "Node JS",
      instructor: "Disha",
      category: "Backend",
      level: "Intermediate",
      duration: "5 Weeks",
      description: "Learn server-side JavaScript and backend development."
    },
    {
      id: 3,
      title: "MongoDB",
      instructor: "Gaurav",
      category: "Database",
      level: "Beginner",
      duration: "3 Weeks",
      description: "Learn database management and MongoDB queries."
    },
    {
      id: 4,
      title: "JavaScript",
      instructor: "Pranav",
      category: "Frontend",
      level: "Beginner",
      duration: "4 Weeks",
      description: "Learn JavaScript fundamentals and ES6 features."
    },
    {
      id: 5,
      title: "Express JS",
      instructor: "Disha",
      category: "Backend",
      level: "Intermediate",
      duration: "3 Weeks",
      description: "Build web applications and APIs using Express."
    },
    {
      id: 6,
      title: "MySQL",
      instructor: "Gaurav",
      category: "Database",
      level: "Beginner",
      duration: "3 Weeks",
      description: "Learn SQL queries and relational database concepts."
    }
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  function resetFilters() {
    setSearch("");
    setCategory("All");
  }

  return (
    <div className="dashboard">
      <h1>Available Courses</h1>
      <p>Explore courses and improve your skills.</p>

      <div className="course-filters">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
        </select>

        <button onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      <h3>
        Showing {filteredCourses.length} of {courses.length} Courses
      </h3>

      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p>Instructor: {course.instructor}</p>
              <p>Category: {course.category}</p>
              <p>Level: {course.level}</p>
              <p>Duration: {course.duration}</p>

              <a href="#details">
                <button>View Course</button>
              </a>
            </div>
          ))
        ) : (
          <p className="no-courses">
            No courses found. Try another search.
          </p>
        )}
      </div>
    </div>
  );
}

export default AvailableCourses;
