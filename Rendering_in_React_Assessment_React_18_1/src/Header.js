import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <img src={} alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <h1>{name}</h1>
        <p>Birthday: {birthday}</p>
      </div>
    </div>
  );
}

export default Header;
