import React from "react";
import icon from "../../assets/icon.png";
import Styles from "../navbar/navbar.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Nav, Container, Navbar, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import profileicon from "../../assets/profileicon.png";
function Navbars() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const logoutSession = () =>{
    localStorage.removeItem('token');
    navigate('/');
  } 
  return (

    // <Navbar
    //   bg="white"
    //   data-bs-theme="light"
    //   expand={"xl"}
    // >
    //   <div
    //     style={{
    //       marginLeft: "5rem",
    //       display: "flex",
    //       justifyContent: "space-evenly",
    //       width: "100%",
    //       backgroundColor:'red'
    //     }}
    //   >
    //     <Navbar.Brand href="/" className="d-flex align-items-center">
    //       <img src={icon} height={"50px"} width={"50px"} />
    //       <h2>
    //         <span style={{ fontWeight: "bold" }}>SkillQ5</span>
    //       </h2>
    //     </Navbar.Brand>

    //     {/* Toggle Button for Medium Screens */}
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />

    //     {/* Links */}
        
    //       <Navbar.Collapse
    //         id="basic-navbar-nav"
    //         style={{ marginLeft: "100px", backgroundColor:'orange', justifyContent:'space-evenly' }}
    //       >
    //         <Nav>
    //           <Link
    //             to="/"
    //             style={{
    //               textDecoration: "none",
    //               color: "black",
    //               marginRight: "4rem",
    //             }}
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             to="/jobs"
    //             style={{
    //               textDecoration: "none",
    //               color: "black",
    //               marginRight: "4rem",
    //             }}
    //           >
    //             Jobs
    //           </Link>
    //           <Link
    //             to="/aboutus"
    //             style={{
    //               textDecoration: "none",
    //               color: "black",
    //               marginRight: "4rem",
    //             }}
    //           >
    //             About us
    //           </Link>
    //         </Nav>
    //         <Nav>
    //         <div className="d-flex align-items-center">
    //       <Link
    //         to="/register"
    //         style={{
    //           textDecoration: "underline",
    //           color: "black",
    //           paddingRight: "65px",
    //         }}
    //       >
    //         Register As Candidate
    //       </Link>
    //       <Button
    //         variant="contained"
    //         sx={{
    //           backgroundColor: "#D63232",
    //           borderRadius: "0.5rem",
    //           width: "auto",
    //           height: "50px",
    //         }}
    //         onClick={() => {
    //           navigate("/recuritersignin");
    //         }}
    //       >
    //         Post Job
    //       </Button>
    //     </div>
    //         </Nav>
    //       </Navbar.Collapse>
    //   </div>
    // </Navbar>
    <Navbar  expand={'md'} className="bg-body-tertiary mb-3">
          <Container fluid >
            <Navbar.Brand href="/" className="d-flex align-items-center px-5">
            <img src={icon} height={"50px"} width={"50px"} />
            <span style={{ fontWeight: "bold" }}>SkillQ5</span>
            <h2>

            </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Skill05
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav style={{alignItems:'center', width:'100%', justifyContent:'space-evenly'}}>
                  <Link to={"/"} style={{
                    textDecoration: "none",
                    color: "black",
                     
                 }}>
                    Home 
                  </Link>
                  <Link to={"/jobs"}  style={{
                          textDecoration: "underline",
                          color: "black",
                        }}>
                    Jobs
                  </Link>
                  <Link to={"/aboutus"} style={{
                          textDecoration: "underline",
                          color: "black",
                        }}>
                    About
                  </Link>
                </Nav>
                <Nav className="justify-content-end ">
                  {token?  <div className={Styles.profiledropdown}>
      <div className={Styles.profileicon}>
        {/* You can use an image or an icon for the profile icon */}
        <img src={profileicon} alt="Profile Icon" />
      </div>
      <div className={Styles.dropdowncontent}>
        <Link to="/portfolio">My Profile</Link>
        <Link onClick={logoutSession}>Logout</Link>
      </div>
    </div> : <div style={{display:'flex'}}>
                  <Link
                        to="/register"
                        style={{
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        <span>Register As Candidate</span>
                    </Link>  
                    {/* <button className={Styles.logInButton} onClick={()=>{navigate("/signin")}}>Login</button>
                    <button className={Styles.logInButton} onClick={()=>{navigate("/register")}}>Sign Up</button> */}

                    <Link to={"/signin"} 
                       style={{
                        textDecoration: "underline",
                        color: "black",
                        marginRight:'30px',
                        marginLeft:'10px',
                        marginTop:'10px'
                      }}
                    >Login
                    </Link>
                    <Link
                     to={"/register"}
                       style={{
                        textDecoration: "underline",
                        color: "black",
                        marginRight:'30px',
                        marginTop:'10px'
                      }}
                    >
                      <span>SignUp</span>
                    </Link>

                  <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#D63232",
                        borderRadius: "5px",
                        width: "auto",
                         height: "50px", 
                      }}
                      onClick={() => {
                        navigate("/recuritersignin");
                      }}
                    >
                      Post Job
                  </Button>
                  </div> }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default Navbars;
