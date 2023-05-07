import React, { useState, useRef, useEffect, useContext } from "react";

import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup, Button , Modal , ModalHeader , ModalBody ,ModalFooter } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "./../context/AuthContext.js";

// CSS styles
const buttonStyles = {
  editButton: {
    backgroundColor: "#f5b145",
    color: "#fff",
    marginRight: "10px",
    borderRadius: "4px",
    borderColor: "#007bff",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    borderRadius: "4px",
    borderColor: "#dc3545",
  },
};

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState(false);


  const { data: tour, loading, error } = useFetch(`${BASE_URL}tours/${id}`);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const totalRating = 0;
  const avgRating = 0;
  // const { totalRating, avgRating } = calculateAvgRating(reviews);
  // format date

  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit requst to the server

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    console.log(reviewText);

    try {
      if (!user || user === undefined || user === null) {
        alert("Please login to submit a review");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        console.log(result);
        alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const handleModal = () => {
    setModal(!modal);
  };
  
  const handleSave = () => {
    // Handle the save functionality
  };

  return (
    <div>
      <div>
      {modal && (
          <Modal isOpen={modal} toggle={handleModal} className="custom-modal">
            <ModalHeader toggle={handleModal} className="custom-modal-header">
                Review Update
            </ModalHeader>
            <ModalBody className="custom-modal-body">
              <label class="booking-date" htmlFor="end-date">
              Reviver:
              </label>
              <p>Shehan Liyanage</p>
              <label class="booking-date" htmlFor="end-date">
             Review:
              </label>
              <input type="text" value="waaaaw" />            
              <label class="booking-date" htmlFor="end-date">
              Rating Stars:
              </label>
              <input type="text" value="5" max={5} />            

              
            </ModalBody>
            <ModalFooter className="custom-modal-footer">
              <Button
                color="primary"
                onClick={handleSave}
                className="custom-button-primary"
              >
                Save
              </Button>
              <Button
                color="secondary"
                onClick={handleModal}
                className="custom-button-secondary"
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
      <div>
        <section>
          <Container>
            {loading && <h1>Loading...</h1>}
            {!loading && !error && (
              <Row>
                <Col lg="8">
                  <div className="tour__content">
                    <img src={photo} alt="" />
                    <div className="tour__info">
                      <h2>{title}</h2>

                      <div className="d-flex align-items-center gap-5">
                        <span className="tour__rating d-flex align-items-center gap-1">
                          <i
                            class="ri-star-fill"
                            style={{ color: "var(--secondary-color)" }}
                          ></i>
                          {avgRating === 0 ? null : avgRating}
                          {totalRating === 0 ? (
                            "not rated"
                          ) : (
                            <span>({reviews.length})</span>
                          )}
                        </span>
                        <span>
                          <i class="ri-map-pin-user-line"></i> {address}
                        </span>
                      </div>

                      <div className="tour__extra-details">
                        <span>
                          <i className="ri-map-pin-2-line"></i>
                          {city}
                        </span>
                        <span>
                          <i className="ri-money-dollar-circle-line"></i>
                          {price} / per person
                        </span>
                        <span>
                          <i className="ri-map-pin-time-line"></i>
                          {distance} k/m
                        </span>
                        <span>
                          <i className="ri-group-line"></i>
                          {maxGroupSize} people
                        </span>
                      </div>
                      <h5>Description</h5>
                      <p>{desc}</p>
                    </div>

                    {/* ============ Tour Review Section  ==========*/}
                    <div className="tour__reviews mt-4">
                      <h4>Reviews ({reviews?.length}reviews)</h4>
                      <Form onSubmit={submitHandler}>
                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                          <span onClick={() => setTourRating(1)}>
                            1<i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setTourRating(2)}>
                            2<i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setTourRating(3)}>
                            3<i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setTourRating(4)}>
                            4<i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setTourRating(5)}>
                            5<i class="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <div className="review__input">
                          <input
                            type="text"
                            ref={reviewMsgRef}
                            placeholder="share your thoughts"
                            required
                          />
                          <button
                            className="btn primary__btn text-white"
                            type="submit"
                          >
                            submit
                          </button>
                        </div>
                      </Form>
                      <ListGroup className="user__reviews">
                        {reviews?.map((review) => (
                          <div className="review__item">
                            <img src={avatar} alt="" />

                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}
                                  <i className="ri-star-s-fill"></i>
                                </span>
                              </div>

                              <h6>{review.reviewText}</h6>

                              <div className="d-flex align-items-center">
                                <Button
                                  className="mr-2"
                                  style={buttonStyles.editButton}
                                  onClick={handleModal}
                                >
                                  Edit
                                </Button>
                                <Button style={buttonStyles.deleteButton}>
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </ListGroup>
                    </div>
                    {/* =========== Tour Review Section end =========== */}
                  </div>
                </Col>

                <Col lg="4">
                  <Booking tour={tour} avgRating={avgRating} />
                </Col>
              </Row>
            )}
          </Container>
        </section>
        <Newsletter />
      </div>
    </div>
  );
};
export default TourDetails;
