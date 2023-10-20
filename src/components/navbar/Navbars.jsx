import React from "react";
import icon from "../../assets/icon.png";
import Styles from "../navbar/navbar.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Nav, Container, Navbar, Offcanvas } from "react-bootstrap";
import { useState } from "react";
function Navbars() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const navigate = useNavigate();
  return (
    <Navbar
      bg="white"
      data-bs-theme="light"
      expand={"md"}
      className="justify-content-between"
    >
      <div
        style={{
          marginLeft: "10rem",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginRight: "10rem",
        }}
      >
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={icon} height={"50px"} width={"50px"} />
          <h2>
            <span style={{ fontWeight: "bold" }}>SkillQ5</span>
          </h2>
        </Navbar.Brand>

        {/* Toggle Button for Medium Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <div className="d-flex justify-content-center">
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ marginLeft: "100px" }}
          >
            <Nav>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "4rem",
                }}
              >
                Home
              </Link>
              <Link
                to="/jobs"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "4rem",
                }}
              >
                Jobs
              </Link>
              <Link
                to="/aboutus"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "4rem",
                }}
              >
                About us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        {/* Buttons */}
        <div className="d-flex align-items-center">
          <Link
            to="/register"
            style={{
              textDecoration: "underline",
              color: "black",
              paddingRight: "65px",
            }}
          >
            Register As Candidate
          </Link>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D63232",
              borderRadius: "0.5rem",
              width: "auto",
              height: "50px",
            }}
            onClick={() => {
              navigate("/recuritersignin");
            }}
          >
            Post Job
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export default Navbars;
