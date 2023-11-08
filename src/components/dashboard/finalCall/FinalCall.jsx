import React from "react";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Styles from "./FinalCall.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';
const FinalCall = () => {
  const storedToken = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("/api/candidate/getshortlistedcandidate",{
        headers: {
          Authorization: `Bearer ${storedToken}` 
        }
      })
      .then((res) => {
        console.log("response", res);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);
  const handleSendCall = async (Email, id) => {
   
    setLoading(true);
    const formdata = {
      email: Email,
      id: id,
    };
    await axios
      .post("/api/candidate/sendInvitation", formdata,{
        headers:{
          Authorization: `Bearer ${storedToken}`,
       }
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setData(res.data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Invitation Sent to Candidate',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <body id="page-top">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div className="container-fluid">
              {/*  <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1>All Candidate</h1>
              </div>
              <div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Education</th>
                      <th>phoneNumber</th>
                      <th>Interview Invitation</th>
                      {/* Add more table headers as needed */}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr scope="row" key={item.id}>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.education}</td>
                        <td>{item.phonenumber}</td>
                        <td>
                          <button
                            className={Styles.Approvebutton}
                            onClick={() => handleSendCall(item.Email, item.id)}
                          >
                            Send Email
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="row" style={{ marginLeft: "20px" }}>
                <div className="col-xl-8 col-md-6 ">
                  <div style={{ marginTop: "50px" }}></div>
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
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

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
  );
};

export default FinalCall;
