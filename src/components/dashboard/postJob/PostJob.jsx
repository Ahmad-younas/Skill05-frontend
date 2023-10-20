import React from "react";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function PostJob() {
  const [formData, setFormData] = useState({
    companyLogo: null,
    jobTitle: "",
    country: "",
    city: "",
    jobDescription: "",
    workplaceType: "",
    salary: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFormData({
      ...formData,
      companyLogo: file,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("companyLogo", formData.companyLogo);
    formDataToSend.append("jobTitle", formData.jobTitle);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("jobDescription", formData.jobDescription);
    formDataToSend.append("workplaceType", formData.workplaceType);
    formDataToSend.append("salary", formData.salary);
    formDataToSend.append("tags", formData.tags);
    const storedToken = localStorage.getItem("token");
    await axios
      .post("/api/recruiter/recruiterpostjob", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then(async (res) => {
        if (res.status === 201) {
          toast.success("Job Post successfully");
          console.log("Form data sent successfully");
          setFormData({
            jobTitle: "",
            country: "",
            city: "",
            jobDescription: "",
            workplaceType: "",
            salary: "",
            tags: "",
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <React.Fragment>
      <body id="page-top">
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                {/*  <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Post a Job</h1>
                </div>

                {/*  <!-- Content Row --> */}

                <div className="row" style={{ marginLeft: "20px" }}>
                  <div className="col-xl-8 col-md-6 ">
                    <div style={{ marginTop: "50px" }}>
                      <Container>
                        <h2>Job Form</h2>
                        <Form onSubmit={handleSubmit}>
                          <Row>
                            <Col>
                              <Form.Group controlId="jobTitle">
                                <Form.Label>Job Title:</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="jobTitle"
                                  placeholder="e.g Senior Product Designer"
                                  value={formData.jobTitle}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group controlId="jobLocation">
                                <Form.Label>Logo:</Form.Label>
                                <Form.Control
                                  type="file"
                                  name="companyLogo"
                                  accept=".png,.jpg,.jpge"
                                  onChange={handleLogoChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Form.Group controlId="jobTitle">
                                <Form.Label>Country:</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="country"
                                  placeholder="e.g USA"
                                  value={formData.country}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group controlId="jobLocation">
                                <Form.Label>City:</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="e.g. New York City or San Francisco"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group controlId="jobDescription">
                            <Form.Label>Job Description:</Form.Label>
                            <Form.Control
                              as="textarea"
                              name="jobDescription"
                              placeholder="The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms."
                              value={formData.jobDescription}
                              onChange={handleChange}
                              rows={4}
                              required
                            />
                          </Form.Group>

                          <Row>
                            <Col>
                              <Form.Group controlId="workplaceType">
                                <Form.Label>Workplace Type:</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="workplaceType"
                                  value={formData.workplaceType}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group controlId="salary">
                                <Form.Label>Salary:</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="$2200 - $2500"
                                  name="salary"
                                  value={formData.salary}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group controlId="tags">
                            <Form.Label>Tags(optionals)</Form.Label>
                            <Form.Control
                              type="text"
                              name="tags"
                              placeholder="Figma, UI/UX, Sketch..."
                              value={formData.tags}
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Button
                            variant="primary"
                            type="submit"
                            style={{ marginTop: "30px" }}
                          >
                            Submit
                          </Button>
                        </Form>
                      </Container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*   <!-- End of Main Content --><!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2021</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
          {/*  <!-- End of Content Wrapper --> */}
        </div>
        {/*  <!-- End of Page Wrapper -->

                              <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </body>
    </React.Fragment>
  );
}

export default PostJob;
