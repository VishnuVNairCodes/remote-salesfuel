import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <header className="sidebar-header">
          <h1 className="sidebar-heading">Remote SalesFuel</h1>
          <div className="sidebar-header-nav">
            <div className="sidebar-header-nav-item">Dashboard</div>
            <div className="sidebar-header-nav-item">Knowledge</div>
            <div className="sidebar-header-nav-item">Members</div>
            <div className="sidebar-header-nav-item">Members</div>
            <div className="sidebar-header-nav-item">Teams</div>
            <div className="sidebar-header-nav-item">Vault</div>
            <div className="sidebar-header-nav-item">Chat</div>
          </div>
        </header>
        <footer className="sidebar-footer">
          <div className="sidebar-footer-nav">
            <div className="sidebar-footer-nav-item">Settings</div>
            <div className="sidebar-footer-nav-item">Company</div>
            <div className="sidebar-footer-nav-item">My Profile</div>
          </div>
          <div className="sidebar-footer-sponsor">Powered by TeamJeenyus</div>
        </footer>
      </aside>
    </>
  );
}

export default SideBar;
