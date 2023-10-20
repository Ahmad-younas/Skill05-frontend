import React from "react";
import Navbar from "../navbar/Navbars";
import Footer from "../footer/Footer";
import { useState } from "react";
import img3 from "../../assets/img-3.svg";
import img4 from "../../assets/img-4.svg";
import axios from "axios";
import Styles from "../signinPage/signinPage.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SigninPage = (props) => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/candidate/candidateLogin", formData)
      .then(async (res) => {
        if (res.status === 200) {
          const { token } = res.data;
          localStorage.setItem("token", token);
          toast.success("Login Successfully");
          console.log("Form data sent successfully");
          setFormData({
            email: "",
            password: "",
          });

          setTimeout(() => {
            navigation("/");
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("message", err.response.data.error);
          toast.warn(err.response.data.error);
          setFormData({
            name: "",
            email: "",
            username: "",
            password: "",
            repassword: "",
          });
        }
        console.log("error", err);
      }); // Use Axios to send a POST request
  };
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Container style={{ paddingTop: "10rem" }}>
          <Row>
            <Col></Col>
            <Col xl={4} md={4}>
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "#D63232",
                    border: "none",
                  }}
                >
                  Sign up with google
                </Button>
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
                <hr
                  style={{
                    width: "100px",
                    paddingBottom: "13px",
                  }}
                />
                <p
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Or continue with
                </p>
                <hr
                  style={{
                    width: "100px",
                    paddingBottom: "13px",
                  }}
                />
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
                    <Link to="Signin">Sign in</Link>
                  </div>
                </Form>
              </div>
            </Col>
            <Col
              xl={4}
              md={4}
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
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <img src={img3} />
            </Col>
          </Row>
          <Footer />
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default SigninPage;
