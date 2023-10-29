import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../footer/Footer'
import Navbars from '../navbar/Navbars';
import { Row, Col, Form, Badge, Button } from "react-bootstrap";
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Portfolio = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        education: "",
        resume: null,
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleFileChange = (e) => {
        console.log("resume", e.target.files[0]);
        setFormData({
          ...formData,
          resume: e.target.files[0],
        });
      };
      const handleSubmit = async (e) => {
        console.log("Heelo");
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phoneNumber", formData.phoneNumber);
        formDataToSend.append("resume", formData.resume);
        formDataToSend.append("education", formData.education);
        console.log(...formDataToSend);
        const storedToken = localStorage.getItem("token");
        if(storedToken){
          await axios
          .post("/api/candidate/candidateapplyJob", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${storedToken}`,
            },
          })
          .then((res) => {
            if (res.status === 201) {
              toast.success("Successfully Apply on Job");
              console.log("Form data sent successfully");
              setFormData({
                name: "",
                email: "",
                phoneNumber: "",
                education: "",
                resume: null,
              });
            }
          })
          .catch((error) => {
            console.log("Error:", error);
          });
        }else{
        //   navigation("/signin")
        }
      };
  return (
    <React.Fragment>
        <Navbars/>
        <Container>
            <Row className="justify-content-md-center  justify-content-sm-center">
                <Col xl={12} md={6} sm={12}>
                    <h1>Your Portfolio Settings</h1>
                </Col>
            </Row>
            <div >
            <Row style={{justifyContent:'center', padding:'20px', borderRadius:'5px' }}>
                <Col xl={12} md={6} sm={12}>
                <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="education">
              <Form.Label>Education:</Form.Label>
              <Form.Control
                type="text"
                name="education"
                value={formData.education}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Group controlId="resume">
                <Form.Label>Upload Resume</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  required
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Form.Group>
            <Button className='mt-2 btn btn-danger'  type='submit'>Save Changes</Button>
          </Form>
                </Col>
            </Row>
            </div>
        </Container>
        <section style={{marginLeft:'20px', marginRight:'20px'}}>
        <Footer/>
        </section>
    </React.Fragment>
  )
}
export default Portfolio;
