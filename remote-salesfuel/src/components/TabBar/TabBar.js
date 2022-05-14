import React from "react";

function TabBar() {
  return (
    <>
      <div>
        <button>All</button>
        <button>Live</button>
        <button>Draft</button>
        <button>Archived</button>
      </div>
      <div>
        <select name="teams" id="teams">
          <option value="" disabled selected>
            Select your option
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
