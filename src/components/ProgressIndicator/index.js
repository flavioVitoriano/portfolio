import React from "react";
import "./styles.css";

const ProgressIndicator = ({ value, label, funnyLabel }) => {
  return (
    <div>
      <h4>{label}</h4>
      <div className="progress" style={{ height: "25px", width: "100%" }}>
        <div
          className="progress-bar bg-dark"
          role="progressbar"
          style={{ width: `${value}%` }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <p className="progress-text">{value}</p>
        </div>
      </div>
      <p style={{ display: "inline-block" }}>{ funnyLabel }</p>
    </div>
  );
};

export default ProgressIndicator;
