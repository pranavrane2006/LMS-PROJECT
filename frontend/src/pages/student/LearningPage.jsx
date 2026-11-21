
import React, { useState } from "react";

function LearningPage() {
  const lessons = [
    {
      id: 1,
      title: "Introduction to React",
      content: "React is a JavaScript library used to build interactive user interfaces."
    },
    {
      id: 2,
      title: "Components and Props",
      content: "Components are reusable parts of a React application. Props are used to pass data between components."
    },
    {
      id: 3,
      title: "State and Events",
      content: "State stores component data. Events handle user actions like clicks and typing."
    },
    {
      id: 4,
      title: "React Hooks",
      content: "Hooks allow functional components to use state and other React features."
    },
    {
      id: 5,
      title: "Working with Forms",
      content: "Forms collect user input and help create interactive applications."
    },
    {
      id: 6,
      title: "Building a React Project",
      content: "Use components, state and events together to build a complete React application."
    }
  ];

  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [completed, setCompleted] = useState([]);

  const progress = Math.round(
    (completed.length / lessons.length) * 100
  );

  function markCompleted() {
    if (!completed.includes(selectedLesson.id)) {
      setCompleted([...completed, selectedLesson.id]);
    }
  }

  function nextLesson() {
    const index = lessons.findIndex(
      lesson => lesson.id === selectedLesson.id
    );

    if (index < lessons.length - 1) {
      setSelectedLesson(lessons[index + 1]);
    }
  }

  return (
    <div className="dashboard learning-page">
      <h1>React JS Learning Portal</h1>

      <div className="course-card">
        <h2>Your Learning Progress</h2>
        <h3>{progress}% Completed</h3>

        <div className="progress-bg">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>
          {completed.length} of {lessons.length} lessons completed
        </p>
      </div>

      <div className="learning-layout">
        <div className="course-card lesson-sidebar">
          <h2>Course Lessons</h2>

          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              className="lesson-button"
              onClick={() => setSelectedLesson(lesson)}
            >
              {lesson.title}
              {completed.includes(lesson.id) ? " ✓" : ""}
            </button>
          ))}
        </div>

        <div className="course-card lesson-content">
          <h2>{selectedLesson.title}</h2>
          <p>{selectedLesson.content}</p>

          {completed.includes(selectedLesson.id) ? (
            <p>Lesson Completed ✓</p>
          ) : (
            <button onClick={markCompleted}>
              Mark as Completed
            </button>
          )}

          <button onClick={nextLesson}>
            Next Lesson
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearningPage;
