import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <header className="sidebar-header">
          <h1 className="sidebar-heading">Remote SalesFuel</h1>
          <div className="sidebar-header-nav">
            <button className="sidebar-header-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-house"></i>
              </span>
              Dashboard
            </button>
            <button className="sidebar-header-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </span>
              Knowledge
            </button>
            <button className="sidebar-header-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-user-group"></i>
              </span>
              Members
            </button>

            <button className="sidebar-header-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-layer-group"></i>
              </span>
              Teams
            </button>
            <button className="sidebar-header-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-folder"></i>
              </span>
              Vault
            </button>
            <button className="sidebar-header-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-message"></i>
              </span>
              Chat
            </button>
          </div>
        </header>
        <footer className="sidebar-footer">
          <div className="sidebar-footer-nav">
            <button className="sidebar-footer-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-gear"></i>
              </span>
              Settings
            </button>
            <button className="sidebar-footer-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-building"></i>
              </span>
              Company
            </button>
            <button className="sidebar-footer-nav-item">
              <span class="sidebar-icon">
                <i class="fa-solid fa-circle-user"></i>
              </span>
              My Profile
            </button>
          </div>
          <div className="sidebar-footer-sponsor">Powered by TeamJeenyus</div>
        </footer>
      </aside>
    </>
  );
}

export default SideBar;
