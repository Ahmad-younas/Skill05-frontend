import React from "react";
import icon from "../../assets/icon.png";
import Styles from "../navbar/navbar.module.css";
import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
import Button from 'react-bootstrap/Button';
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
                <Nav style={{alignItems:'center', width:'100%', justifyContent:'center'}}>
                  {/* <Link to={"/"} style={{
                    textDecoration: "none",
                    color: "black",
                     
                 }}>
                    Home 
                  </Link> */}
                   <Button variant="danger" onClick={()=>{navigate("/")}} style={{marginRight:'20px', marginLeft:'20px'}}>
                    Home
                  </Button>
                  <Button variant="danger" onClick={()=>{navigate("/jobs")}} style={{marginRight:'20px', marginLeft:'20px'}}>
                    Jobs
                  </Button>
                  {/* <Link to={"/jobs"}  style={{
                          textDecoration: "underline",
                          color: "black",
                        }}>
                    Jobs
                  </Link> */}
                  <Button variant="danger" onClick={()=>{navigate("/aboutus")}} style={{marginLeft:'20px'}}>
                    About
                  </Button>
                  {/* <Link to={"/aboutus"} style={{
                          textDecoration: "underline",
                          color: "black",
                        }}>
                    About
                  </Link> */}
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
                      variant="danger"
                      style={{width:'180px'}}
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
