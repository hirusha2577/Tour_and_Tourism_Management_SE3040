import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { AuthContext } from "../context/AuthContext";

import "../styles/view-tours.css";
import "../styles/home.css";

import { getAllTour } from "../controllers/Tours";

const ViewTours = () => {
  const { user } = useContext(AuthContext);

  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [modal, setModal] = useState(false);
  const [editedTour, setEditedTour] = useState({});

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const tourData = await getAllTour();
        setTours(tourData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTours();
  }, []);

  const handleDelete = async (tourId) => {
    // try {
    //   // Make a DELETE request to remove the tour from the backend
    //   await axios.delete(`your_backend_api_endpoint/${tourId}`);
    //   // Fetch the updated tours list
    //   fetchTours();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleEdit = (tour) => {
    setSelectedTour(tour);
    setEditedTour(tour);
    toggleModal();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTour((prevTour) => ({
      ...prevTour,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save the updated tour data
    // Send a request to update the tour data in the backend using axios or fetch
    // ...

    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <div>
      <h2 className="m-5">View Tours </h2>
      <div className="table__div">
        <Table className="custom-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>City</th>
              <th>Address</th>
              <th>Distance</th>
              <th>Price</th>
              <th>Maxgroup Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours
              .filter((tour) => tour.HotelName === user.hotelname)
              .map((tour) => (
                <tr key={tour.id}>
                  <td>{tour.title}</td>
                  <td>{tour.city}</td>
                  <td>{tour.address}</td>
                  <td>{tour.distance}</td>
                  <td>{tour.price}</td>
                  <td>{tour.maxGroupSize}</td>
                  <td>
                    <Button
                      className="edt_btn"
                      onClick={() => handleEdit(tour)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="delete__button"
                      onClick={() => handleDelete(tour.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Edit Tour</ModalHeader>
        <ModalBody>
          <div>
            <label htmlFor="edit-title">Title:</label>
            <input
              type="text"
              id="edit-title"
              name="title"
              value={editedTour.title || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="edit-city">City:</label>
            <input
              type="text"
              id="edit-city"
              name="city"
              value={editedTour.city || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="edit-address">Address:</label>
            <input
              type="text"
              id="edit-address"
              name="address"
              value={editedTour.address || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="edit-distance">Distance:</label>
            <input
              type="text"
              id="edit-distance"
              name="distance"
              value={editedTour.distance || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="edit-price">Price:</label>
            <input
              type="text"
              id="edit-price"
              name="price"
              value={editedTour.price || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="edit-maxGroupSize">Max Group Size:</label>
            <input
              type="text"
              id="edit-maxGroupSize"
              name="maxGroupSize"
              value={editedTour.maxGroupSize || ""}
              onChange={handleInputChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <section>
        <div className="Hotel__links d-flex align-items-center gap-5">
          <Link to="/add-tour">
            <div className="hotel__main">Add Tour</div>
          </Link>
          <Link to="/view-tours">
            <div className="hotel__main">View Tours</div>
          </Link>
          <Link to="/manage-bookings">
            <div className="hotel__main">View Bookings</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ViewTours;
