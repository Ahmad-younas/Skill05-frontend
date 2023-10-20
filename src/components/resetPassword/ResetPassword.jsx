import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const body = JSON.stringify({ token, password });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords don't match. Please try again.");
      return;
    }
    try {
      // Send a POST request to your server to handle the password reset
      const response = await axios.post("/api/candidate/resetpassword", {
        body,
      });

      if (response.status === 201) {
        setMessage("Password reset email sent. Please check your email.");
      }
    } catch (error) {
      setMessage("Failed to request password reset. Please try again.");
      console.error(error);
    }

    // You can send the password to your server for further processing here
    // For demonstration purposes, we'll just display a success message
    setMessage("Password reset successful.");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={6}>
          <h2>Reset Password</h2>
          {message && <p className="text-danger">{message}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
