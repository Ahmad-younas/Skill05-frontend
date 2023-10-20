import React from "react";
import { useState } from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const CompanyProfile = () => {
  const [style, setStyle] = useState(
    "navbar-nav  sidebar sidebar-dark accordion"
  );
  const [companyInfo, setCompanyInfo] = useState({
    companyEmail: "",
    companyName: "",
    phoneNumber: "",
    companyWebsite: "",
    bio: "",
    experience: "",
    categories: "",
    workingTime: "",
  });

  const handleCompanyInfoChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({
      ...companyInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/recruiter/recruiterprofile", companyInfo)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Job Post successfully");
          setCompanyInfo({
            companyEmail: "",
            companyName: "",
            phoneNumber: "",
            companyWebsite: "",
            bio: "",
            experience: "",
            categories: "",
            workingTime: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
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
                  <h1>Company Profile Information</h1>
                </div>

                {/*  <!-- Content Row --> */}

                <div className="row" style={{ marginLeft: "20px" }}>
                  <div className="col-xl-8 col-md-6 ">
                    <div style={{ marginTop: "50px" }}>
                      <Form onSubmit={handleSubmit}>
                        {/* <Form.Group controlId="companyLogo">
                          <Form.Label>Company Logo:</Form.Label>
                          <Form.Control
                            type="file"
                            name="companyLogo"
                            onChange={handleLogoChange}
                            accept=".png,.jpg,"
                          />
                        </Form.Group> */}
                        <Form.Group controlId="companyName">
                          <Form.Label>Company Name:</Form.Label>
                          <Form.Control
                            type="text"
                            name="companyName"
                            placeholder="WillowTree"
                            value={companyInfo.companyName}
                            onChange={handleCompanyInfoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="companyEmail">
                          <Form.Label>Company Email:</Form.Label>
                          <Form.Control
                            type="email"
                            name="companyEmail"
                            placeholder="willowtree@gmail.com"
                            value={companyInfo.companyEmail}
                            onChange={handleCompanyInfoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                          <Form.Label>Phone/Number:</Form.Label>
                          <Form.Control
                            type="text"
                            name="phoneNumber"
                            value={companyInfo.phoneNumber}
                            onChange={handleCompanyInfoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="companyWebsite">
                          <Form.Label>Company Website Link:</Form.Label>
                          <Form.Control
                            type="text"
                            name="companyWebsite"
                            placeholder="https://alithemes.com"
                            value={companyInfo.companyWebsite}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="bio">
                          <Form.Label>Bio:</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="bio"
                            placeholder="We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."
                            value={companyInfo.bio}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="experience">
                          <Form.Label>Experience Required:</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="experience"
                            placeholder="1-5 Years"
                            value={companyInfo.experience}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="categories">
                          <Form.Label>Categories:</Form.Label>
                          <Form.Control
                            type="text"
                            name="categories"
                            placeholder="UI/UX Design, Brand identity"
                            value={companyInfo.categories}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="workingTime">
                          <Form.Label>Working Time:</Form.Label>
                          <Form.Control
                            type="text"
                            name="workingTime"
                            placeholder="Fulltime"
                            value={companyInfo.workingTime}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Button
                          variant="primary"
                          type="submit"
                          style={{ marginTop: "20px" }}
                        >
                          Submit Company Info
                        </Button>
                      </Form>
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
};

export default CompanyProfile;
