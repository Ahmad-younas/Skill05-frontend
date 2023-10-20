import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../../assets/icon.png'
import linkedIn from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import Styles from './footer.module.css'
const Footer = (props) => {
    return (
        <footer>
            <hr />
            <Row style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <Col xl={4}>
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <img
                            src={logo}
                            alt="skill05"
                            height={'50'}
                            width={'50'}
                        />
                        <h3 style={{ marginLeft: '10px', fontWeight:'bold' }}>Skill05</h3>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <p>
                            Our experienced and specialized consultants take
                            time to find out exactly what you’re looking for and
                            pride ourselves on finding the perfect match for
                            you!
                        </p>
                    </div>
                    <div>
                        <a href=""> <img src={facebook} className={Styles.socialLinks}/></a>
                        <a href=""><img src={twitter} className={Styles.socialLinks} /></a>
                        <a href=""><img src={linkedIn}/></a>
                        
                    </div>
                </Col>
                <Col xl={4}>
                    <h5 style={{fontWeight:'bold'}}>More</h5>
                    <div style={{ marginTop: '20px' }}>
                        <p>Privacy</p>
                        <p>Help</p>
                        <p>Terms</p>
                    </div>
                </Col>

                <Col xl={4}>
                    <h5 style={{fontWeight:'bold'}}>Download App</h5>
                    <div style={{ marginTop: '20px' }}>description here</div>
                </Col>
            </Row>
            <hr />
            <Row style={{ marginTop: '40px' }}>
                <Col xl={12}>
                    <div>
                        <p>
                            Copyright &#169; {new Date().getFullYear()} skill05
                            all right reserved
                        </p>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer
