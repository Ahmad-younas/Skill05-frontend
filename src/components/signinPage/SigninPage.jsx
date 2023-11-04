import React from "react";
import Navbar from "../navbar/Navbars";
import Footer from "../footer/Footer";
import { useState } from "react";
import img3 from "../../assets/img-3.svg";
import img4 from "../../assets/img-4.svg";
import axios from "axios";
import Styles from "../signinPage/signinPage.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import ReCAPTCHA from "react-google-recaptcha";
const SigninPage = (props) => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginType, setLoginType] = useState('candidate');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const handleSubmit = async (e) => {
    if (loginType === 'candidate') {
      setLoading(true);
      e.preventDefault();
      await axios
        .post("/api/candidate/candidateLogin", formData)
        .then(async (res) => {
          if (res.status === 200) {
            setLoading(false);
            const { token } = res.data;
            localStorage.setItem("token", token);
            console.log("Form data sent successfully");
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'please verify email for verification of your Account',
              showConfirmButton: false,
              timer: 1500
            })
            setFormData({
              email: "",
              password: "",
            });
  
            setTimeout(() => {
              navigation("/");
            }, 1500);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            console.log("message", err.response.data.error);
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: err.response.data.error,
              showConfirmButton: false,
              timer: 1500
            })
            setFormData({
              name: "",
              email: "",
              username: "",
              password: "",
              repassword: "",
            });
          }
          console.log("error", err);
        }); 
    } else if (loginType === 'recruiter') {
      setLoading(true);
      e.preventDefault();
      await axios
        .post("/api/recruiter/recruiterLogin", formData)
        .then(async (res) => {
          if (res.status === 200) {
            setLoading(false);
            const { token } = res.data;
            localStorage.setItem("token", token);
            console.log("Form data sent successfully");
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            setFormData({
              email: "",
              password: "",
            });
  
            setTimeout(() => {
              navigation("/recuriterdasboard");
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <div>
        {loading?(
          <div>
             <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
             >
                <CircularProgress color="inherit"/>
            </Backdrop>
          </div>
        ):null}        
      </div>
      <div>
        <Container style={{ paddingTop: "5rem" }}>
          <Row>
            <Col></Col>
            <Col xl={4} md={4} sm={12}>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ff7400",
                }}
              >
                Welcome back!
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>Member Login</h1>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Username or Email address*</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={formData.email}
                      placeholder="Steven Job"
                      required
                      className="placeholderColor"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      placeholder="........."
                      required
                      className="placeholderColor"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div  style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                      <div>
                      <input type="radio" value="candidate"
                        checked={loginType === 'candidate'}
                        onChange={() => setLoginType('candidate')}
                      /> Login AS Candidate<br/>
                     </div>
                     <div>
                     <input type="radio"
                      value="recruiter"
                      checked={loginType === 'recruiter'}
                      onChange={() => setLoginType('recruiter')}
                     /> Login As Recuriter<br/>
                     </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      label={"Remember me"}
                    />
                    <Link to={"/forgetpassword"}>Forget Password</Link>
                  </div>
                  <ReCAPTCHA style={{marginTop:'20px', marginBottom:'20px'}}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                         onChange={onChange}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={{
                        width: "100%",
                        backgroundColor: "#b50b0b",
                        border: "none",
                      }}
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Don't have an account</p>
                    <Link to="/register">Sign Up</Link>
                  </div>
                </Form>
              </div>
            </Col>
            <Col
              xl={4}
              md={4}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img className={Styles.updownanimation} src={img4} />
            </Col>
          </Row>
          <Row>
            <Col
              xl={12}
              md={12}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <img src={img3} className={Styles.buildingImage}   />
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SigninPage;
