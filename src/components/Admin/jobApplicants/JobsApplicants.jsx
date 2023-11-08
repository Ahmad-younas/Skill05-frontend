import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TopBar from "../topBar/TopBar";
import SideBar from "../sideBar/SideBar";
import Styles from "./jobApplicants.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const JobsApplicants = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();
  const token =  localStorage.getItem("token");

  console.log(token);
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigation("/admin");
  };
  useEffect(() => {
    // Replace with the actual URL of your Node.js server endpoint
    axios
      .get("/api/admin/recuriter")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleUpdate = async (id) => {
    const formdata = {
      uid: id,
    };
    await axios
      .put("/api/admin/updaterecuriter", formdata,{
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then(async (res) => {
        console.log("resData", res.data);
        if (res.status === 200) {
          console.log("QEREREWR");
          setData(res.data);
          toast.success("Permission Granted");
        }
      })
      .catch((err) => {
        console.log("error", err);
        if (err.response.status === 401) {
          console.log("message", err.response);
          toast.warn(err.response.data.message);
        }
      });
  }; // Use Axios to send a POST request;
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
                <div>
                  <h1>List Of Job Applicants</h1>
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>Full Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Approve</th>
                        <th>Reject</th>
                        {/* Add more table headers as needed */}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr scope="row" key={item.id}>
                          <td>{item.fullName}</td>
                          <td>{item.userName}</td>
                          <td>{item.userEmail}</td>
                          <td>
                            <button
                              className={Styles.Approvebutton}
                              onClick={() => handleUpdate(item.id)}
                            >
                              Approve
                            </button>
                          </td>
                          <td>
                            <button className={Styles.Rejectbutton}>
                              Reject
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

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
        <ToastContainer />
      </body>
    </div>
  );
};

export default JobsApplicants;
