import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <>
      <aside>
        <header>
          <h1>Remote SalesFuel</h1>
          <div>
            <div>Dashboard</div>
            <div>Knowledge</div>
            <div>Members</div>
            <div>Members</div>
            <div>Teams</div>
            <div>Vault</div>
            <div>Chat</div>
          </div>
        </header>
        <footer>
          <div>
            <div>Settings</div>
            <div>Company</div>
            <div>My Profile</div>
          </div>
          <div>Powered by TeamJeenyus</div>
        </footer>
      </aside>
    </>
  );
}

export default SideBar;
