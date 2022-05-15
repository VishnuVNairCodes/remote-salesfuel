import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav">
        <h1 className="nav-heading">Knowledge</h1>
        <div className="nav-items">
          <button className="nav-btn">Create Course</button>
          <img
            class="nav-avatar"
            src="https://i.pravatar.cc/300"
            alt="nav-avatar"
          />
          <span className="nav-options-icon">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
