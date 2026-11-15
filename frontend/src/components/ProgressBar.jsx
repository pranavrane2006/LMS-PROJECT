import React from "react";

function ProgressBar({ percentage }) {
  return (
    <div>
      <div
        style={{
          background: "#ddd",
          height: "10px",
          borderRadius: "10px"
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: "blue",
            height: "10px",
            borderRadius: "10px"
          }}
        />
      </div>

      <p>{percentage}% Completed</p>
    </div>
  );
}

export default ProgressBar;