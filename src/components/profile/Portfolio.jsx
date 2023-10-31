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
  const navigation = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthdate: "",
        Fname:"",
        Cnumber:"",
        city:"",
        position:"",
        experi:"",
        pCompany:"",
        experties:"",
        univerity:"",
        degree:"",
        cgpa:"",
        email:"",
        phoneNumber:"",
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
        formDataToSend.append("firstname", formData.firstName);
        formDataToSend.append("lastname", formData.lastName);
        formDataToSend.append("phoneNumber", formData.phoneNumber);
        formDataToSend.append("resume", formData.resume);
        formDataToSend.append("birthdate", formData.birthdate);
        formDataToSend.append("Fname", formData.Fname);
        formDataToSend.append("Cnumber", formData.Cnumber);
        formDataToSend.append("city", formData.city);
        formDataToSend.append("position", formData.position);
        formDataToSend.append("experi", formData.experi);
        formDataToSend.append("pCompany", formData.pCompany);
        formDataToSend.append("experties", formData.experties);
        formDataToSend.append("univerity", formData.univerity);
        formDataToSend.append("degree", formData.degree);
        formDataToSend.append("cgpa", formData.cgpa);
        formDataToSend.append("email", formData.email);

        console.log(...formDataToSend);
        const storedToken = localStorage.getItem("token");
        if(storedToken){
          console.log("qwerfde");
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
                firstName: "",
                lastName: "",
                birthdate: "",
                Fname:"",
                Cnumber:"",
                city:"",
                position:"",
                experi:"",
                pCompany:"",
                experties:"",
                univerity:"",
                degree:"",
                cgpa:"",
                email:"",
                phoneNumber:"",
                resume: null,
              });
            }
          })
          .catch((error) => {
            console.log("Error:", error);
          });
        }else{
          toast.success("Successfully Created portfolio");
          navigation("/signin")
        }
      };
  return (
    <React.Fragment>
      <Navbars />
      <Container>
        <Row className="justify-content-md-center  justify-content-sm-center">
          <Col xl={12} md={6} sm={12}>
            <h1>Personal Information </h1>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', padding: '20px', borderRadius: '5px' }}>
          <Col xl={12} md={6} sm={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='firstName'>
                <Form.Label>FirstName :</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  id='firstName'
                  required
                  value={formData.firstName}
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>LastName:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  id='lastName'
                  value={formData.lastName}
                  required
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="birthdate">
                <Form.Label>DateBirth:</Form.Label>
                <Form.Control
                  type="date"
                  name="birthdate"
                  id='birthdate'
                  value={formData.birthdate}
                  required
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="Fname">
                <Form.Label>FatherName:</Form.Label>
                <Form.Control
                  type="text"
                  name="Fname"
                  id='Fname'
                  value={formData.Fname}
                  required
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="Cnumber">
                <Form.Label>CNIC Number:</Form.Label>
                <Form.Control
                  type="text"
                  name="Cnumber"
                  id='Cnumber'
                  maxLength={13}
                  value={formData.Cnumber}
                  required
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId='city'>
                <Form.Label>City:</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  id='city'
                  value={formData.city}
                  required
                  onChange={handleChange} />
              </Form.Group>
              <h1 style={{marginTop:"20px"}}>Experience</h1>
              <Form.Group controlId="name">
                <Form.Label>Postion:</Form.Label>
                <Form.Control
                  type="text"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Year of Experience:</Form.Label>
                <Form.Control
                  type="text"
                  name="experi"
                  value={formData.experi}
                  required
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Previous Company Name:</Form.Label>
                <Form.Control
                  type="tel"
                  name="pCompany"
                  value={formData.pCompany}
                  required
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="education">
                <Form.Label>Experties:</Form.Label>
                <Form.Control
                  as="textarea"
                  maxLength={1000}
                  placeholder="Mention Your Experties"
                  style={{ height: '100px' }}
                  name="experties"
                  value={formData.experties}
                  required
                  onChange={handleChange} />
              </Form.Group>    
              <h5 style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>Only 1000 character</h5>
              <h1 style={{marginTop:'20px'}}>Education </h1>
                <Form.Group>
                  <Form.Label>University:</Form.Label>
                  <Form.Control
                    type="text"
                    name="univerity"
                    required
                    value={formData.univerity}
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Degree Lavel:</Form.Label>
                  <Form.Select>
                    <option>Select Degree level</option>
                    <option value="1">BSCS</option>
                    <option value="2">Master</option>
                    <option value="3">PHD</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Degree:</Form.Label>
                  <Form.Control
                    type="text"
                    name="degree"
                    value={formData.degree}
                    required
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>CGPA:</Form.Label>
                  <Form.Control
                    type="text"
                    name="cgpa"
                    value={formData.cgpa}
                    required
                    onChange={handleChange} />
                </Form.Group>
                <h1>Portfolio </h1>
                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    required
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    required
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="resume">
                  <Form.Label>Upload Resume</Form.Label>
                  <Form.Control
                    type="file"
                    name="resume"
                    required
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange} />
                </Form.Group>
                <Button className='mt-2 btn btn-danger' type='submit'>Save Changes</Button>
                </Form>
            </Col>
        </Row>
    </Container>
    <section style={{ marginLeft: '20px', marginRight: '20px' }}>
        <Footer />
      </section>
      <ToastContainer/>
    </React.Fragment>
  )
}
export default Portfolio;
