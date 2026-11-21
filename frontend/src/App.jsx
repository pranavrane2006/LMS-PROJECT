
import React, { useState, useEffect } from "react";

import StudentDashboard from "./pages/student/StudentDashboard";
import AvailableCourses from "./pages/student/AvailableCourses";
import EnrolledCourses from "./pages/student/EnrolledCourses";
import CourseDetails from "./pages/student/CourseDetails";
import LearningPage from "./pages/student/LearningPage";
import StudentNavbar from "./components/StudentNavbar";

function App() {
  const [page, setPage] = useState(
    window.location.hash || "#dashboard"
  );

  useEffect(() => {
    const handleNavigation = () => {
      setPage(window.location.hash || "#dashboard");
    };

    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

  return (
    <>
      <StudentNavbar />

      {page === "#dashboard" && <StudentDashboard />}
      {page === "#available" && <AvailableCourses />}
      {page === "#courses" && <EnrolledCourses />}
      {page === "#details" && <CourseDetails />}
      {page === "#learning" && <LearningPage />}
    </>
  );
}

export default App;
