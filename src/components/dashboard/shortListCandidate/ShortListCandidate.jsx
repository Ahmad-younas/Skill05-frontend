import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import Styles from "./shortListCandidate.module.css";
import Swal from 'sweetalert2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const ShortListCandidate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const storedToken = localStorage.getItem("token");
  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("/api/candidate/getallcandidate",{
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleUpdate = async (id) => {
   
    setLoading(true);
    const formdata = {
      uid: id,
    };
    await axios
    .put("/api/candidate/shortList",formdata,{
      headers: {
        Authorization: `Bearer ${storedToken}`
      }
    })
      .then(async (res) => {
        console.log(res.data);
        if (res.status === 200) {
          setLoading(false);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Candidate Successfully ShortList',
            showConfirmButton: false,
            timer: 1500
          })
          setData(res.data);
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
                      <th>Short List</th>
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
                            onClick={() => handleUpdate(item.id)}
                          >
                            Short List
                          </button>
                        </td>
                        <td>
                          <a
                            href="http://localhost:3001/files/1695502617410-SKILLO5(1)_1.pdf"
                            target="_blank"
                          >
                            <button className={Styles.Rejectbutton}>
                              Downlad
                            </button>
                          </a>
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
  );
};

export default ShortListCandidate;
