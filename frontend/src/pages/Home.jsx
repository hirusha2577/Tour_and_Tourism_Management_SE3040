import React, { useState, useEffect } from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import worldImg from "../assets/images//world.png";
import heroVideo from "../assets/images/hero-video.mp4";
import exerienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
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
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========= hero section end */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service__subtitle">What we serve</h5>
              <h2 className="service__title">we offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========= feature tour section start ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Expolore"} />
              <h2 className="featured__tour-title">Our Featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========= feature tour section end ========= */}

      {/* ========= experience section start ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experiemce__content">
                <Subtitle subtitle={"Exerience"} />

                <h2>
                  With our all experience <br /> we will serve you{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  <br />
                  Officiis minus tenetur facere cum sint reiciendis nostrum
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={exerienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========= experience section start ========= */}

      {/* ========= gallery section start ========= */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                {" "}
                Visit our customers tour gallery{" "}
              </h2>
            </Col>
            <Col>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= gallery section end ========= */}

      {/* ========= testiminial section start ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========= testiminial section end ========= */}

      <Newsletter />
    </>
  );
};
export default Home;
