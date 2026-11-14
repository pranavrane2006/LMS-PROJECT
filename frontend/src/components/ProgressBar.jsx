
import React from "react";

function ProgressBar({ percentage }) {
  return (
    <div className="progress-container">
      <div className="progress-bg">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p>{percentage}% Completed</p>
    </div>
  );
}

export default ProgressBar;
