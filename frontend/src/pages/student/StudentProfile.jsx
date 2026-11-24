
import React, { useState } from "react";
import "./StudentProfile.css";

function StudentProfile() {
  const [profile, setProfile] = useState({
    name: "Student Name",
    email: "student@example.com",
    studentId: "STU2026001",
    department: "CSE - AIML",
    year: "2nd Year"
  });

  const [editing, setEditing] = useState(false);

  const [stats] = useState({
    enrolledCourses: 3,
    completedLessons: 12,
    totalLessons: 20
  });

  const activities = [
    "Completed Introduction to React",
    "Enrolled in Node JS",
    "Completed JavaScript Basics",
    "Started MongoDB Course"
  ];

  const progress = Math.round(
    (stats.completedLessons / stats.totalLessons) * 100
  );

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  }

  function saveProfile(e) {
    e.preventDefault();
    setEditing(false);
  }

  return (
    <div className="dashboard profile-page">
      <h1>My Profile</h1>
      <p>Manage your personal information and learning activity.</p>

      <div className="profile-card">
        <div className="profile-avatar">
          {profile.name.charAt(0).toUpperCase()}
        </div>

        {editing ? (
          <form onSubmit={saveProfile}>
            <label>Full Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
            />

            <label>Student ID</label>
            <input
              name="studentId"
              value={profile.studentId}
              onChange={handleChange}
              required
            />

            <label>Department</label>
            <input
              name="department"
              value={profile.department}
              onChange={handleChange}
            />

            <label>Year</label>
            <input
              name="year"
              value={profile.year}
              onChange={handleChange}
            />

            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <p>Student ID: {profile.studentId}</p>
            <p>Department: {profile.department}</p>
            <p>Year: {profile.year}</p>

            <button onClick={() => setEditing(true)}>
              Edit Profile
            </button>
          </>
        )}
      </div>

      <h2>Learning Statistics</h2>

      <div className="profile-stats">
        <div className="stat-card">
          <h2>{stats.enrolledCourses}</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="stat-card">
          <h2>{stats.completedLessons}</h2>
          <p>Completed Lessons</p>
        </div>

        <div className="stat-card">
          <h2>{progress}%</h2>
          <p>Overall Progress</p>
        </div>
      </div>

      <h2>Recent Learning Activity</h2>

      <div className="activity-card">
        {activities.map((activity, index) => (
          <p key={index}>
            {index + 1}. {activity}
          </p>
        ))}
      </div>
    </div>
  );
}

export default StudentProfile;
