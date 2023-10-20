import React from "react";
import Navbar from "../navbar/Navbars";
import img2 from "../../assets/img-2.svg";
import img1 from "../../assets/img-1.svg";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Styles from "../registerPage/registerPage.module.css";
import Footer from "../footer/Footer";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const RecuriterRegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
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
      .post("/api/recruiter/recruiterSignUp", formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Login Successfully");
          console.log("Form data sent successfully");
          setFormData({
            name: "",
            email: "",
            username: "",
            password: "",
            repassword: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1 style={{ fontWeight: "bold" }}>Start Today</h1>
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
                    backgroundColor: "#D63232",
                    border: "none",
                  }}
                >
                  Resgister AS Recuriter
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
                  continue with
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
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Steven Job"
                      required
                      value={formData.name}
                      className={Styles.placeholderColor}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Stevenjobe@gmail.com"
                      required
                      onChange={handleChange}
                      className={Styles.placeholderColor}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Username*</Form.Label>
                    <Form.Control
                      value={formData.username}
                      type="text"
                      onChange={handleChange}
                      placeholder="Steven Job"
                      name="username"
                      required
                      className={Styles.placeholderColor}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      value={formData.password}
                      type="password"
                      onChange={handleChange}
                      name="password"
                      placeholder="........."
                      required
                      className={Styles.placeholderColor}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Re-Password*</Form.Label>
                    <Form.Control
                      name="repassword"
                      onChange={handleChange}
                      type="password"
                      placeholder="........."
                      required
                      value={formData.repassword}
                      className={Styles.placeholderColor}
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
                      label={"Agree our terms and policy"}
                    />
                    <p>Learn more</p>
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
                      Submit & Register
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
                    <p>Already have an account?</p>
                    <Link to={"/recuritersignin"}>Sign in</Link>
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
              <img className={Styles.updownanimation} src={img1} />
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
              <img src={img2} />
            </Col>
          </Row>
          <Footer />
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default RecuriterRegisterPage;
