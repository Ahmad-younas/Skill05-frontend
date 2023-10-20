import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbars from "../navbar/Navbars";
import axios from "axios";
import Footer from "../footer/Footer";
import Lottie from "lottie-react";
import forgetPassword from "../../assets/forget_password.json";
import { ToastContainer, toast } from "react-toastify";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your server to handle the password reset
    await axios
      .post("/api/candidate/forgetpassword", { email })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Password reset email sent. Please check your email.");
          setEmail("");
        } else if (response.status == 404) {
          setMessage("User not reginster");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <React.Fragment>
      <Navbars />
      <Container style={{ paddingTop: "100px" }}>
        <Row className="justify-content-center mt-5">
          <Col xs={12} sm={6}>
            <h2>Forgot Password</h2>
            {message && <p className="text-success">{message}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                style={{ marginTop: "10px" }}
                type="submit"
              >
                Reset Password
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} sm={6}>
            <Lottie animationData={forgetPassword} />
          </Col>
        </Row>
        <Footer />
      </Container>
      <ToastContainer />
    </React.Fragment>
  );
};

export default ForgetPassword;
