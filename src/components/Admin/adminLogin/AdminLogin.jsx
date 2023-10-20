import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Lottie from "lottie-react";
import ForgetPasswordAnimation from "../../../assets/animation_lmipbmid.json";
import logo from "../../../assets/icon.png";
import arrowIcon from "../../../assets/forward-icons.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
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
    const token = localStorage.getItem("token");

    e.preventDefault();
    await axios
      .post("/api/admin/loginadmin", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
            navigation("/dashboard");
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("message", err.response.data.error);
          toast.warn(err.response.data.error);
          setFormData({
            password: "",
            email: "",
          });
        }
        console.log("error", err);
      }); // Use Axios to send a POST request
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col xl={6} md={12}>
            <Lottie animationData={ForgetPasswordAnimation} />
          </Col>
          <Col
            xl={6}
            md={12}
            style={{
              backgroundColor: "#f8f2ed",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logo} height={"100px"} width={"100px"} />
            <h1 style={{ fontWeight: "bold" }}>Welcome Back!</h1>
            <div style={{ width: "50%", marginTop: "50px" }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Steven Job"
                    name="email"
                    value={formData.email}
                    required={true}
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
                    type="password*"
                    placeholder="........."
                    required={true}
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    className="placeholderColor"
                  />
                </Form.Group>
                <button
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "5px",
                    border: "none",
                    color: "white",
                    backgroundColor: "#DB3445",
                  }}
                  type="submit"
                >
                  Login
                  <img src={arrowIcon} style={{ marginLeft: "10px" }} />
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
