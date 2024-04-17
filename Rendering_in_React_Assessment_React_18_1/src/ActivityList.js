import React from "react";
import "./ActivityList.css";

function ActivityList() {
  return (
    <div className="activity-list">
      {activities.map((activity, index) => (
        <Activity key={} time={} description={} />
      ))}
    </div>
  );
}

export default ActivityList;
