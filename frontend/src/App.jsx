
import React, { useState, useEffect } from "react";

import StudentDashboard from "./pages/student/StudentDashboard";
import AvailableCourses from "./pages/student/AvailableCourses";
import EnrolledCourses from "./pages/student/EnrolledCourses";
import CourseDetails from "./pages/student/CourseDetails";
import LearningPage from "./pages/student/LearningPage";
import StudentNavbar from "./components/StudentNavbar";
import StudentProfile from "./pages/student/StudentProfile";

function App() {
  const [page, setPage] = useState(
    window.location.hash || "#dashboard"
  );

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleNavigation = () => {
      setPage(window.location.hash || "#dashboard");
    };

    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

  function enrollCourse(course) {
    if (enrolledCourses.some(item => item.id === course.id)) {
      setMessage("You are already enrolled in this course!");
      return;
    }

    setEnrolledCourses([...enrolledCourses, course]);
    setMessage(`${course.title} enrolled successfully!`);
  }

  function unenrollCourse(id) {
    setEnrolledCourses(
      enrolledCourses.filter(course => course.id !== id)
    );
    setMessage("Course removed successfully!");
  }

  return (
    <>
      <StudentNavbar />

      {message && (
        <div className="notification">
          {message}
          <button onClick={() => setMessage("")}>×</button>
        </div>
      )}

      {page === "#dashboard" && <StudentDashboard />}

      {page === "#available" && (
        <AvailableCourses
          enrolledCourses={enrolledCourses}
          onEnroll={enrollCourse}
        />
      )}

      {page === "#courses" && (
        <EnrolledCourses
          enrolledCourses={enrolledCourses}
          onUnenroll={unenrollCourse}
        />
      )}

      {page === "#details" && <CourseDetails />}

      {page === "#learning" && <LearningPage />}
      {page === "#profile" && <StudentProfile />}
    </>
  );
}

export default App;
