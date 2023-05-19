import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button,
} from "reactstrap";
import "../styles/manage-tours.css";
import "../styles/home.css";
import { getAllBooking } from "../controllers/Booking";
import { AuthContext } from "../context/AuthContext";
import { reactBaseURL } from "../utils/config";

const ManageBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [modal, setModal] = useState(false);
  // const [selectedTour, setSelectedTour] = useState(null);
  // const [selectedGuide, setSelectedGuide] = useState(null);
  // const [selectedDriver, setSelectedDriver] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const bookingData = await getAllBooking();
      setBookings(bookingData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(bookings);

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

  // const handleGuideSelect = (event) => {
  //   setSelectedGuide(event.target.value);
  // };

  // const handleDriverSelect = (event) => {
  //   setSelectedDriver(event.target.value);
  // };

  const handleSave = () => {
    // Handle the save functionality
  };

  return (
    <div>
      <div className="table__div">
        {modal && (
          <Modal isOpen={modal} toggle={handleModal} className="custom-modal">
            <ModalHeader toggle={handleModal} className="custom-modal-header">
              Booking Details
            </ModalHeader>
            <ModalBody className="custom-modal-body">
              <p>Tour:Dutch fort</p>
              <p>Booked by: Shehan Liyanage</p>
              <label class="booking-date" htmlFor="start-date">
                Start Date
              </label>
              <input
                class="custom-input"
                type="date"
                id="start-date"
                placeholder="Start Date"
              />
              <label class="booking-date" htmlFor="end-date">
                End Date
              </label>
              <input
                class="custom-input"
                type="date"
                id="end-date"
                placeholder="End Date"
              />
              <label class="booking-date" htmlFor="end-date">
                Select Tour Guide:
              </label>
              <select value="Thisara Kavinda" className="custom-select">
                <option value="" selected disabled>
                  Select Guide
                </option>
                <option value="thisara">Thisara Kavinda</option>
                <option value="">Thisara Kavinda</option>
                {/* Render options for tour guides */}
              </select>
              <label class="booking-date" htmlFor="end-date">
                Select Driver:
              </label>
              <select value="Thanushi Perera" className="custom-select">
                <option value="" selected disabled>
                  Select Driver
                </option>
                <option value="">Thanushi Perera</option>
                <option value="">Thanushi Perera</option>

                {/* Render options for drivers */}
              </select>
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
        <section>
          <div>
            <h2 className="d-flex justify-content-center Bookingheader">
              Manage Bookings
            </h2>
          </div>
          <Table className="custom-table">
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Full Name</th>
                <th>Guest Size</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings
                .filter((book) => book.HotelName === user.hotelname)
                .map((book) => (
                  <tr key={book.id}>
                    <td>{book.tourName}</td>
                    <td>{book.fullName}</td>
                    <td>{book.guestSize}</td>
                    <td>{book.phone}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleModal(1)}
                      >
                        View Booking
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </section>
      </div>
      <section>
        <div className=" Hotel__links d-flex align-items-center gap-5">
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

export default ManageBookings;
