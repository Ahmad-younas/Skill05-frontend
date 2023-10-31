import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icon.png";
const SideBar = () => {
  const [style, setStyle] = useState(
    "navbar-nav  sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-danger sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-danger sidebar sidebar-dark accordion");
    }
  };
  return (
    <ul
      className={style}
      id="accordionSidebar"
      style={{ backgroundColor: "	#ff6700" }}
    >
      {/*  <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/dashboard"
      >
        <div className="sidebar-brand-icon">
          <img src={logo} height={"60px"} width={"60px"} />
        </div>
        <div className="sidebar-brand-text mx-3">SkillQ5</div>
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={changeStyle}
          ></button>
        </div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/recuriterdasboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>

      {/*  <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/profile">
          <i className="fas fa-fw fa-user"></i>
          <span>profile</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          onTouchCancelCapture="#"
          to={"/setting"}
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Setting</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          onTouchCancelCapture="#"
          to={"/allcandidate"}
        >
          <i className="fas fa-fw fa-user"></i>

          <span>All Candidate</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          onTouchCancelCapture="#"
          to={"/shortlistedCandidate"}
        >
          <i className="fas fa-fw fa-graduation-cap"></i>
          <span>Short Listed</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};

export default SideBar;
