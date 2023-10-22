import React from "react";
import Navbar from "../navbar/Navbars";
import { Container, Row, Col, Form, Badge, Button } from "react-bootstrap";
import rightImg from "../../assets/right-job-head.svg";
import leftImg from "../../assets/left-job-head.svg";
import Styles from "./jobs.module.css";
import Footer from "../footer/Footer";
import Pagination from "react-bootstrap/Pagination";
import searchIcon from "../../assets/icons8-search-24.png";
import box from "../../assets/key-numbers.svg";
import time from "../../assets/briefcase.svg";
import IconLocation from "../../assets/icon-location-2.svg";
import TimeIcon from "../../assets/time.svg";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const optionSecond = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Job = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigation = useNavigate();

  useEffect(() => {
    // Fetch data from the API when the component mount
    axios
      .get("/api/recruiter/getpostedJob")
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const [selectedOption, setSelectedOption] = useState(null);
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
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("education", formData.education);
    console.log(...formDataToSend);
    const storedToken = localStorage.getItem("token");
    await axios
      .post("/api/candidate/candidateapplyJob", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Job Post successfully");
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
  };
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      width: "150px",
      marginRight: "5px",
    }),
  };

  return (
    <React.Fragment>
      <Navbar />

      <div
        className={Styles.maindiv}
      >
        <Container
          fluid={true}
          className={Styles.dividerContainer}
        >
          <Row style={{ height: "50%" }}>
            <Col
              xl={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingTop: "2rem",
              }}
            >
              <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
                22 Jobs Available Now
              </h2>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint <br /> commodi,molestiae quas
                vel sint commodi
              </p>
            </Col>
            <Col
              xl={12}
              className={Styles.Column}
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <img src={leftImg} className={Styles.containerImage} />
              </div>
              <div>
                <img src={rightImg}  className={Styles.containerImage} />
              </div>
              <div className={Styles.SearchBar}>
                <img src={box} style={{ marginLeft: "20px" }} />
                <input
                  type="text"
                  placeholder="Your Keyword..."
                  className={Styles.CustomInput}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button className={Styles.customSearchbutton}>
                  <img
                    src={searchIcon}
                    style={{ color: "white", marginRight: "5px" }}
                  />
                  Search
                </button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} style={{ marginTop: "20px" }}>
          <Row>
            {/* <Col xl={3}>
              <Row>
                <Col
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5 style={{ fontWeight: "bold" }}>Advance Filter</h5>
                  <p>Reset</p>
                </Col>
              </Row>
            </Col> */}
            <Col xl={12}>
              <p>
                Showing <strong>41-60</strong> of <strong>944</strong> jobs
              </p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xl={12} md={12} sm={12} style={{ padding: "20px", }}>
              <Row>
                {data
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.JobTitle.toLowerCase().includes(search);
                  })
                  .map((dta, dtaIndex) => (
                    <Col
                      key={dtaIndex}
                      xl={4}
                      md={12}
                      sm={12}
                      style={{
                        marginTop: "5px",
                        marginBottom: "5px",
                        
                      }}
                    >
                      <div className={Styles.jobBox}>
                        <Row style={{ padding: "10px" }}>
                          <div
                            style={{
                              height: "50",
                              width: "20",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <img
                              src={`/images/${dta.companyLogo}`}
                              alt="SkillQ5"
                              width={"100px"}
                              height={"100px"}
                            />

                            <div style={{ height: "100%" }}>
                              <h6 style={{ fontWeight: "bold" }}>LinkedIn</h6>
                              <span>
                                <img
                                  src={IconLocation}
                                  style={{ marginRight: "5px" }}
                                />
                                {dta.Country}, {dta.City}
                              </span>
                            </div>
                          </div>

                          <Col>
                            <div style={{ paddingTop: "10px" }}>
                              <h6 style={{ fontWeight: "bold" }}>
                                {dta.JobTitle}
                              </h6>
                            </div>
                            <div
                              style={{
                                paddingTop: "10px",
                                display: "flex",
                                width: "70%",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img src={time} />
                                <span style={{ marginLeft: "5px" }}>
                                  {dta.WorkType}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img src={TimeIcon} />
                                <span style={{ marginLeft: "5px" }}>
                                  4 minutes age
                                </span>
                              </div>
                            </div>
                            <div
                              style={{ textAlign: "start", marginTop: "10px" }}
                            >
                              <p>{dta.JobDescription}</p>
                            </div>
                            <div
                              style={{
                                marginTop: "30px",
                                display: "flex",
                                flexFlow: "row",
                              }}
                            >
                              <div className={Styles.Skills}>Adobe XD</div>
                              <div className={Styles.Skills}>Figma</div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "20px",
                                marginBottom: "20px",
                              }}
                            >
                              <p>
                                <strong
                                  style={{
                                    color: "orangered",
                                    fontSize: "30px",
                                  }}
                                >
                                  {dta.Salary}
                                </strong>
                                /Hour
                              </p>
                              <Button
                                className={Styles.customApplyButton}
                                onClick={handleShow}
                              >
                                Apply Now
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  ))}
              </Row>
              <Pagination count={10} color="primary" />
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="mx-auto">Start Your Career Today</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
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
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="education">
              <Form.Label>Education:</Form.Label>
              <Form.Control
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Group controlId="resume">
                <Form.Label>Upload Resume</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};
export default Job;
