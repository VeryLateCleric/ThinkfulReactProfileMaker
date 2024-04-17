import React from "react";
import "./Activity.css";

function Activity(time, description) {
  return (
    <div className="activity">
      <p className="time">{time}</p>
      <p className="description">{description}</p>
    </div>
  );;
}

export default Activity;
