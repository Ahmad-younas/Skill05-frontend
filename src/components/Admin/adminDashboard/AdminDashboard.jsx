import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import {Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const AdminDashboard = () => {
  const [formdata, setFormData] = useState({
    category:"",
    country:""
  });
  const [style, setStyle] = useState(
    "navbar-nav  sidebar sidebar-dark accordion"
  );

  const navigation = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigation("/admin");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };
  const handleCountrySubmit = async (e) => {
    e.preventDefault();
   await axios.post('/api/admin/addcountry',formdata).then((data)=>{
    console.log("data", data);
   }).catch((error)=>{
    console.log("error",error);
   });
  }
  const handleCategorySubmit = async (e)=>{
    e.preventDefault();
   await axios.post('/api/admin/addcategory',formdata).then((data)=>{
    console.log("data", data);
   }).catch((error)=>{
    console.log("error",error);
   })
  }
  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <div>
      <body id="page-top">
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div className="d-sm-flex  mb-4m" style={{flexDirection:'column'}}>
                  <Form onSubmit={handleCategorySubmit}>
                  <Form.Group controlId="email">
                  <Form.Label>Add Category:</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    required
                    placeholder="e.g Management"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button className='mt-2 btn btn-danger' type='submit'>ADD</Button>
                </Form>
                <Form onSubmit={handleCountrySubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Add Country:</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    required
                    placeholder="e.g India"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button className='mt-2 btn btn-danger' type='submit'>ADD</Button>
                </Form>
                </div>
              </div>
              {/*   <!-- /.container-fluid --> */}
            </div>
            {/*   <!-- End of Main Content -->

                                      <!-- Footer --> */}
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
                <a className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </body>
    </div>
  );
};
export default AdminDashboard;
