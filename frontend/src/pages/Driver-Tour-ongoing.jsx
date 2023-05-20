import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "../styles/manage-driver.css";
import "../styles/home.css";

import { getAllOngoingBookings } from "../controllers/Booking.js";

const DriverTouronGiing = () => {
  const [tours, setTours] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const bookingData = await getAllOngoingBookings();
      setTours(bookingData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tours);

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
              Vehicle Details
            </ModalHeader>
            <ModalBody className="custom-modal-body">
              <label class="booking-date" htmlFor="end-date">
                Vehicle Type:
              </label>
              <input type="text" value="Van" />
              <label class="booking-date" htmlFor="end-date">
                Vehicle Number:
              </label>
              <input type="text" value="NA-8563" />
              <label class="booking-date" htmlFor="end-date">
                Vehicle Driver:
              </label>
              <p>Shehan Liyanage</p>
              <label class="booking-date" htmlFor="end-date">
                Vehicle Capacity:
              </label>
              <input type="text" value="10" />
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
        <h2 className="ml-5">Driver Appointment </h2>
        <section>
          <div className=" guide__links d-flex ">
            <Link to="/driver-tour-manage">
              <div className="guide__onGoing">Pending</div>
            </Link>
            <Link to="/driver-tour-ongoing">
              <div className="guide__pending">On Going</div>
            </Link>
            <Link to="/driver-tour-complete">
              <div className="guide__completed">Completed</div>
            </Link>
          </div>
        </section>
        <div className="table__div">
          <Table className="custom-table">
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Full Name</th>
                <th>Guest Size</th>
                <th>Number</th>
                <th>Vehicle ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id} className="table-row">
                  <td>{tour.tourName}</td>
                  <td>{tour.fullName}</td>
                  <td>{tour.guestSize}</td>
                  <td>{tour.phone}</td>
                  <td>{tour.vehicleId}</td>
                  <td>
                    <Button className="custom-button-primary">Complete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <section>
        <div className=" Hotel__links d-flex align-items-center gap-5">
          <Link to="/add-vehicle">
            <div className="hotel__main">Add Vehicle</div>
          </Link>
          <Link>
            <div className="hotel__main" onClick={handleModal}>
              View Vehicle
            </div>
          </Link>
          <Link to="/driver-tour-manage">
            <div className="hotel__main">Appointments</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DriverTouronGiing;
