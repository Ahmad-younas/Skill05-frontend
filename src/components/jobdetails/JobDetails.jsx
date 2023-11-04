import React, { useState } from 'react'
import Navbars from '../navbar/Navbars'
import Footer from '../footer/Footer'
import jobpageimg from '../../assets/jobpageimg.png'
import { Button, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
const JobDetails = (props) => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    console.log("id",id);
    useEffect(() => {
        // Fetch data from the API when the component mounts
        axios
          .get(`/api/recruiter/getJobDetail/${id}`)
          .then((data) => {
            console.log("data",data);
            setData(data.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
      const JobApply = () =>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Apply on Job',
            showConfirmButton: false,
            timer: 1500
          })
      }
  return (
    <React.Fragment>
        <Navbars/>
        <Container fluid>
            <div style={{alignItems:'center'}}>
                <img src={jobpageimg} width={'100%'}/>
            </div>
            <div style={{marginTop:'20px'}}>
                <h1>{data.JobTitle}</h1>
                <Button variant='danger'>ApplyNow</Button>
            </div>
            <div style={{marginTop:'20px'}}>
                <div style={{border:'1px solid orange', padding:'30px'}}>
                    <h1>Employment Information</h1>
                    <hr />
                    <div>
                        <p>country:{data.Country}</p>
                        <p>city:{data.City}</p>
                        <p>Job Description={data.JobDescription}</p>
                        <p> WorkType:{data.WorkType}</p>
                        <p> Salary:{data.Salary}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </Container>
    </React.Fragment>
  )
}

export default JobDetails