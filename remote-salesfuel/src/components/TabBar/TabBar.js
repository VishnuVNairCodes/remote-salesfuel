import React from "react";
import "./TabBar.css";

function TabBar() {
  return (
    <>
      <div className="tab">
        <div className="tab-btn-group">
          <button className="tab-btn">All</button>
          <button className="tab-btn">Live</button>
          <button className="tab-btn">Draft</button>
          <button className="tab-btn">Archived</button>
        </div>
        <select name="teams" className="tab-dropdown">
          <option value="" disabled selected>
            Select team{" "}
          </option>
          <option value="team-1">Team 1</option>
          <option value="team-2">Team 2</option>
          <option value="team-3">Team 3</option>
          <option value="team-4">Team 4</option>
        </select>
      </div>
    </>
  );
}

export default TabBar;
