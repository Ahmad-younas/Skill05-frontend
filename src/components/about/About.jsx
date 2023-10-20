import React from 'react'
import Navbar from '../navbar/Navbars'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from "../footer/Footer"
const About = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Container>
            <Row style={{paddingTop:"150px"}}>
                <Col xl={12}>
                    <p>
                    Welcome to SkillQ5, your trusted partner on your journey to career success. Our website is designed to bridge the gap between job seekers and top-notch companies. We understand that finding the right job or the perfect candidate can be a daunting task, and that's where we come in.</p><br/>
                   <p> <strong>Key Features:</strong><br/></p>

                    <p><strong>Job Listings:</strong> Explore a wide range of job listings from various industries and locations. Our platform is regularly updated to bring you the latest career opportunities.</p>

                    <p><strong>Company Profiles:</strong> Get to know the companies you're interested in. Learn about their values, culture, and career growth opportunities.</p>


                    <p><strong>Team of Experts:</strong> Our team of career experts is here to provide you with advice, tips, and resources to boost your career.</p>

                    <p><strong>Networking Events:</strong> Join our networking events and webinars to connect with industry professionals and expand your network.</p>
                    <p><strong>About Us:</strong></p>

                   <p> At SkillQ5, we are passionate about helping individuals reach their career goals. Our mission is to provide a platform where job seekers can find their dream job and employers can discover exceptional talent. With a dedicated team and a commitment to excellence, we strive to make the job search process as smooth as possible.</p>
                    
                </Col>
            </Row>
            <Footer/>
        </Container>

    </React.Fragment>
  )
}

export default About;
