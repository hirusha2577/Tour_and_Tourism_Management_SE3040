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
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { reactBaseURL } from "../utils/config";

import "../styles/view-tours.css";
import "../styles/home.css";

import { getAllTour, updatedTour, deleteTour } from "../controllers/Tours";

const ViewTours = () => {
  const { user } = useContext(AuthContext);

  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [modal, setModal] = useState(false);
  const [editedTour, setEditedTour] = useState({});

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const tourData = await getAllTour();
      setTours(tourData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (tourId) => {
    console.log(tourId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value === true) {
        deleteTour(tourId).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Your file has been deleted",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
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

  const handleSave = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to change Employee details!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((res) => {
      if (res.value === true) {
        updatedTour({
          _id: editedTour._id,
          title: editedTour.title,
          city: editedTour.city,
          address: editedTour.address,
          distance: editedTour.distance,
          price: editedTour.price,
          maxGroupSize: editedTour.maxGroupSize,
        }).then((res) => {
          if (res) {
            Swal.fire({
              icon: "success",
              title: "Updated!",
              text: "User details updated successfully!",
              confirmButtonText: "OK",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong!",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        });
      }
    });
    setTimeout(() => {
      window.location.replace(reactBaseURL + "/view-tours");
    }, 2050);
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
                      onClick={() => handleDelete(tour._id)}
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
              type="number"
              id="edit-distance"
              name="distance"
              value={editedTour.distance || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="edit-price">Price:</label>
            <input
              type="number"
              id="edit-price"
              name="price"
              value={editedTour.price || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="edit-maxGroupSize">Max Group Size:</label>
            <input
              type="number"
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
