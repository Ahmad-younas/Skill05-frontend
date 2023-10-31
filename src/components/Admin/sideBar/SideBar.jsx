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

      {/*   <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/*  <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/*  <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/*   <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/*  <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="/jobapplicants"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-user"></i>
          <span>Applicants List</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};

export default SideBar;
