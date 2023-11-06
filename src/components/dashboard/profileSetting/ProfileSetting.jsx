import React from "react";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Swal from 'sweetalert2'
export const ProfileSetting = () => {
  const [loading, setLoading] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({
    CompanyEmail: "",
    CompanyName: "",
    number: "",
    CompanyWebsiteLink: "",
    CompanyBio: "",
    Experience: "",
    Categories: "",
    WorkingTime: "",
  });

  const handleCompanyInfoChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({
      ...companyInfo,
      [name]: value,
    });
  };
  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("/api/recruiter/getprofileInfo")
      .then((data) => {
        console.log(data.data);
        setCompanyInfo({
          CompanyEmail: data.data[0].CompanyEmail,
          CompanyName: data.data[0].CompanyName,
          number: data.data[0].number,
          CompanyWebsiteLink: data.data[0].CompanyWebsiteLink,
          CompanyBio: data.data[0].companyBio,
          Experience: data.data[0].Experience,
          Categories: data.data[0].Categories,
          WorkingTime: data.data[0].WorkingTime,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleSubmitCompanyInfo = (e) => {
    setLoading(true);
    const storedToken = localStorage.getItem("token");
    e.preventDefault();
    axios
      .put("/api/recruiter/updateProfileInfo", companyInfo, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'please verify email for verification of your Account',
            showConfirmButton: false,
            timer: 1500
          })
          setLoading(false);
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
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <body id="page-top">
        <div id="wrapper">
          <SideBar />
          <div>
        {loading?(
          <div>
             <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
             >
                <CircularProgress color="inherit"/>
            </Backdrop>
          </div>
        ):null}        
      </div>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                {/*  <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1>Update Profile Information</h1>
                </div>

                <div className="row" style={{ marginLeft: "20px" }}>
                  <div className="col-xl-8 col-md-6 ">
                    <div style={{ marginTop: "50px" }}>
                      <Form onSubmit={handleSubmitCompanyInfo}>
                        <Form.Group controlId="companyName">
                          <Form.Label>Company Name:</Form.Label>
                          <Form.Control
                            type="text"
                            name="CompanyName"
                            placeholder="WillowTree"
                            value={companyInfo.CompanyName}
                            onChange={handleCompanyInfoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="companyEmail">
                          <Form.Label>Company Email:</Form.Label>
                          <Form.Control
                            type="email"
                            name="CompanyEmail"
                            placeholder="willowtree@gmail.com"
                            value={companyInfo.CompanyEmail}
                            onChange={handleCompanyInfoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                          <Form.Label>Phone/Number:</Form.Label>
                          <Form.Control
                            type="text"
                            name="number"
                            value={companyInfo.number}
                            onChange={handleCompanyInfoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="companyWebsite">
                          <Form.Label>Company Website Link:</Form.Label>
                          <Form.Control
                            type="text"
                            name="CompanyWebsiteLink"
                            placeholder="https://alithemes.com"
                            value={companyInfo.CompanyWebsiteLink}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="bio">
                          <Form.Label>Bio:</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="CompanyBio"
                            placeholder="We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."
                            value={companyInfo.CompanyBio}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="experience">
                          <Form.Label>Experience Required:</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="Experience"
                            placeholder="1-5 Years"
                            value={companyInfo.Experience}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="categories">
                          <Form.Label>Categories:</Form.Label>
                          <Form.Control
                            type="text"
                            name="Categories"
                            placeholder="UI/UX Design, Brand identity"
                            value={companyInfo.Categories}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Form.Group controlId="workingTime">
                          <Form.Label>Working Time:</Form.Label>
                          <Form.Control
                            type="text"
                            name="WorkingTime"
                            placeholder="Fulltime"
                            value={companyInfo.WorkingTime}
                            onChange={handleCompanyInfoChange}
                          />
                        </Form.Group>

                        <Button
                          variant="danger"
                          type="submit"
                          style={{ marginTop: "20px" }}
                        >
                          Save Changes
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
      </body>
    </React.Fragment>
  );
};
