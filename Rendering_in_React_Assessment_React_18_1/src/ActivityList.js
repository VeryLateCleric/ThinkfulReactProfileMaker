import React from "react";
import "./ActivityList.css";

function ActivityList() {
  return (
    <div className="activity-list">
      {activities.map((activity, index) => (
        <Activity key={index} time={activity.time} description={activity.description} />
      ))}
    </div>
  );
}

export default ActivityList;
