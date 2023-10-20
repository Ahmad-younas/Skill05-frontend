import React, { useEffect, useState } from "react";
import BgBanner from "../../assets/bg-banner.svg";
import Styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import icon from "../../assets/icon.png";
import Navbar from "../navbar/Navbars";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import image1 from "../../assets/brand-1.png";
import person from "../../assets/person.png";
import bgLeftHiring from "../../assets/bg-left-hiring.svg";
import bgRightHiring from "../../assets/bg-right-hiring.svg";
import content from "../../assets/content.svg";
import finance from "../../assets/finance.svg";
import management from "../../assets/management.svg";
import market from "../../assets/marketing.svg";
import human from "../../assets/human.svg";
import Select from "react-select";
import time from "../../assets/briefcase.svg";
import IconLocation from "../../assets/icon-location-2.svg";
import TimeIcon from "../../assets/time.svg";
import searchIcon from "../../assets/icons8-search-24.png";
import box from "../../assets/key-numbers.svg";
import Footer from "../footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbars from "../navbar/Navbars";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const optionSecond = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [scrolling, setScrolling] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      width: "200px",
      marginRight: "5px",
    }),
  };
  console.log("scrolling", scrolling);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("/api/recruiter/getpostedJob")
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div>
        <img src={BgBanner} alt="banner" className={Styles.bgImage} />
        <div className={Styles.imagecontent}>
          <div className={Styles.navbarwrapper}>
            {scrolling ? (
              <Navbars />
            ) : (
              <>
                <nav className={`navbar-expand-sm ${Styles.mainnav}`}>
                  <div className={Styles.logo}>
                    <img src={icon} height={"50px"} width={"50px"} />
                    <h2>
                      <span style={{ fontWeight: "bold" }}>SkillQ5</span>
                    </h2>
                  </div>
                  <div className={Styles.menulink}>
                    <ul>
                      <li>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                          to={"/"}
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/jobs"
                        >
                          Jobs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/aboutus"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          About us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={Styles.excesslink}>
                    <ul>
                      <li
                        style={{
                          textDecoration: "underline",
                        }}
                      >
                        <Link
                          to="/register"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Register As Candidate
                        </Link>
                      </li>

                      <li>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#D63232",
                            borderRadius: "0.5rem",
                            width: "auto",
                            height: "50px",
                          }}
                          onClick={() => {
                            navigate("/recuritersignin");
                          }}
                        >
                          Post Job
                        </Button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </>
            )}
          </div>
          <div className={Styles.HeroSection}>
            <Row
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col xl={6} md={8} sm={12} className={Styles.HeroRow}>
                <div style={{ marginLeft: "10px" }}>
                  <div>
                    <h1 className={Styles.HeroText}>
                      {" "}
                      <strong>
                        your <strong style={{ color: "#ff6700" }}>dream</strong>{" "}
                        job is <br /> waiting for you{" "}
                      </strong>
                    </h1>
                  </div>
                  <div className={Styles.HeroDescription}>
                    <p style={{ alignItems: "center" }}>
                      Each month, more than 3 million job seekers turn to
                      website in their search for work, making over 140,000
                      applications every single day
                    </p>
                  </div>
                  <div className={Styles.SearchBar}>
                    <img src={box} style={{ marginLeft: "20px" }} />
                    <input
                      type="text"
                      placeholder="Your Keyword..."
                      className={Styles.CustomInput}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    <button className={Styles.customSearchbutton}>
                      <img
                        src={searchIcon}
                        style={{ color: "white", marginRight: "5px" }}
                      />
                      Search
                    </button>
                  </div>

                  <div className={Styles.popularSearch}>
                    <strong style={{ color: "#526066" }}>
                      Popular Searches:
                    </strong>
                    <p
                      style={{ color: "#727673", textDecoration: "underline" }}
                    >
                      Designer, Web, IOS, Developer, PHP, Senior, Engineer
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                xl={6}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={person} className={Styles.HeroImage} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Container fluid={true} className={Styles.dividerContainer}>
        <Row className="d-flex align-item-center justify-content-center">
          <Col
            xl={12}
            md={12}
            sx={4}
            className="d-flex align-item-center justify-content-center"
          >
            <h1>Browse by category</h1>
          </Col>
          <Col
            xl={12}
            md={12}
            sx={4}
            className="d-flex align-item-center justify-content-center"
          >
            <h6>
              Find the job that’s perfect for you. about 800+ new jobs everyday
            </h6>
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            marginTop: "100px",
            display: "flex",
            marginLeft: "10px",
          }}
        >
          <Col sm={12}>
            <div className={Styles.divider}>
              <img src={bgLeftHiring} className={Styles.dividerLeftImage} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className={Styles.dividerCenterparafirst}>
                  we are <br />{" "}
                  <h1 className={Styles.dividerCenterheading}>
                    <strong>hiring</strong>
                  </h1>
                </p>
                <p className={Styles.dividerCenterparasecond}>
                  Let’s Work Together
                  <br />& Explore Opportunities
                </p>
                <button
                  style={{
                    height: "40px",
                    marginTop: "30px",
                    marginLeft: "20px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#ff6700",
                  }}
                >
                  <span style={{ padding: "10px", color: "white" }}>
                    Applynow
                  </span>
                </button>
              </div>
              <img src={bgRightHiring} className={Styles.dividerRightImage} />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col
            xl={12}
            md={12}
            sx={4}
            className="d-flex align-item-center justify-content-center"
          >
            <h1>Jobs of the day</h1>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col
            xl={12}
            md={12}
            sx={4}
            className="d-flex align-item-center justify-content-center"
          >
            <h6 style={{ color: "#ff6700" }}>
              Search and connect with the right candidates faster.
            </h6>
          </Col>
        </Row>

        <Row className={Styles.jobCategoryRow}>
          <div className={Styles.jobCategory}>
            <div className={Styles.jobBox}>
              <img src={management} alt="SkillQ5" />
              <p>Management</p>
            </div>
            <div className={Styles.jobBox}>
              <img src={market} alt="SkillQ5" />
              <p>Marketing & Sale</p>
            </div>
            <div className={Styles.jobBox}>
              <img src={finance} alt="SkillQ5" />
              <p>Finance</p>
            </div>
            <div className={Styles.jobBox}>
              <img src={human} alt="SkillQ5" />
              <p>Human Resource</p>
            </div>
            <div className={Styles.jobBox}>
              <img src={content} alt="SkillQ5" />
              <p>Content Writer</p>
            </div>
          </div>
        </Row>
      </Container>
      <Container
        className="mt-4 "
        style={{ paddingLeft: "200px", paddingRight: "200px" }}
        fluid={true}
      >
        <Row>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.JobTitle.toLowerCase().includes(search);
            })
            .map((dta, dtaIndex) => (
              <Col
                key={dtaIndex}
                xl={4}
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              >
                <div className={Styles.jobBox}>
                  <Row style={{ padding: "10px" }}>
                    <div
                      style={{
                        height: "50",
                        width: "20",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={`http://localhost:3001/images/${dta.companyLogo}`}
                        alt="SkillQ5"
                        width={"100px"}
                        height={"100px"}
                      />

                      <div style={{ height: "100%" }}>
                        <h6 style={{ fontWeight: "bold" }}>{dta.Country}</h6>
                        <span>
                          <img
                            src={IconLocation}
                            style={{ marginRight: "5px" }}
                          />
                          {dta.Country}, {dta.City}
                        </span>
                      </div>
                    </div>

                    <Col>
                      <div style={{ paddingTop: "10px" }}>
                        <h6 style={{ fontWeight: "bold" }}>{dta.JobTitle}</h6>
                      </div>
                      <div
                        style={{
                          paddingTop: "10px",
                          display: "flex",
                          width: "70%",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img src={time} />
                          <span style={{ marginLeft: "5px" }}>
                            {dta.WorkType}
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img src={TimeIcon} />
                          <span style={{ marginLeft: "5px" }}>
                            4 minutes age
                          </span>
                        </div>
                      </div>
                      <div style={{ textAlign: "start", marginTop: "10px" }}>
                        <p>{dta.JobDescription}</p>
                      </div>
                      <div
                        style={{
                          marginTop: "30px",
                          display: "flex",
                          flexFlow: "row",
                        }}
                      >
                        <div className={Styles.Skills}>Adobe XD</div>
                        <div className={Styles.Skills}>Figma</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        <p>
                          <strong
                            style={{ color: "orangered", fontSize: "30px" }}
                          >
                            {dta.Salary}
                          </strong>
                          /Hour
                        </p>
                        <Button
                          className={Styles.customApplyButton}
                          onClick={() => {
                            navigate("/jobs");
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          {/* <Col
            xl={4}
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                borderRadius: "5px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <Row>
                <div
                  style={{
                    height: "50",
                    width: "20",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <img src={image1} />

                  <div style={{ height: "100%" }}>
                    <h6 style={{ fontWeight: "bold" }}>LinkedIn</h6>
                    <span>New York, USA</span>
                  </div>
                </div>

                <Col>
                  <div style={{ paddingTop: "10px" }}>
                    <h6 style={{ fontWeight: "bold" }}>
                      UI / UX Designer fulltime
                    </h6>
                  </div>
                  <div
                    style={{
                      paddingTop: "10px",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <p>Fulltime</p>
                    <p>4 minutes age</p>
                  </div>
                  <div style={{ textAlign: "start" }}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis.
                    </p>
                  </div>
                  <div style={{ marginTop: "30px" }}>Adobe XD Figma</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <p>
                      <strong style={{ color: "orangered" }}>$500</strong>/Hour
                    </p>
                    <Button style={{ backgroundColor: "orangered" }}>
                      Apply Now
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col> */}
        </Row>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default Home;
