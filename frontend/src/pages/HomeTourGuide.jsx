import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import worldImg from "../assets/images//world.png";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";

const HomeGiude = () => {
  return (
    <>
      {/* ========= hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Discover your next adventure with ease and convenience! Our
                  site offers everything you need to make your trip
                  unforgettable, from tours and hotels to rental cars and
                  activities, all at competitive prices. Our team is dedicated
                  to providing exceptional customer service, ensuring your trip
                  is seamless from start to finish. Let us help you create
                  unforgettable memories that will last a lifetime. Start
                  planning your dream trip today!
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-1">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box ">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= hero section end */}
      <section>
        <div className=" Hotel__links d-flex align-items-center gap-5">
          <Link to="/add-tour">
          <div className="hotel__main">
            Add Tour
          </div>
          </Link>
          <Link to="/view-tours">
          <div className="hotel__main">
            View Tours
          </div>
          </Link>
          <Link to="/manage-bookings">
          <div className="hotel__main">
            View Bookings
          </div>
          </Link>
        </div>
      </section>
    </>
  );
};
export default HomeGiude;
