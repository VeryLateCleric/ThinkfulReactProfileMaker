import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

function ActivityList({ activities }) {
  return activities.length === 0 ? null : (
    <div className="activity-list">
      {activities.map((activity, index) => (
        <Activity key={index} time={activity.time} description={activity.description} />
      ))}
    </div>
  );
}

export default ActivityList;
