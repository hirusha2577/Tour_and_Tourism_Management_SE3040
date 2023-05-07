import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button,
} from "reactstrap";
import "../styles/tourist-manage-booking,css";
import "../styles/home.css";

const ManageBookingsTourist = () => {
  const [tours, setTours] = useState([]);
  const [modal, setModal] = useState(false);
  // const [selectedTour, setSelectedTour] = useState(null);
  // const [selectedGuide, setSelectedGuide] = useState(null);
  // const [selectedDriver, setSelectedDriver] = useState(null);

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
              <label class="booking-date" htmlFor="start-date">
                Tour Name
              </label>
              <input
                class="custom-input"
                type="text"
                id="start-date"
                value="Dutch Fort"
              />
              <label class="booking-date" htmlFor="start-date">
                Full Name
              </label>
              <input
                class="custom-input"
                type="text"
                id="start-date"
                value="Shehan Liyanage"
              />
              <label class="booking-date" htmlFor="start-date">
              Guest Size
              </label>
              <input
                class="custom-input"
                type="text"
                id="start-date"
                value="8"
              />
              <label class="booking-date" htmlFor="start-date">
              Phone
              </label>
              <input
                class="custom-input"
                type="text"
                id="start-date"
                value="541254587"
              />
              
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
          <div className="tbleChange">
            <h2 className="d-flex justify-content-center Bookingheader">
              Manage Bookings
            </h2>
          </div>
          <div>
            <Table className="custom-table mt-4">
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
                <tr>
                  <td>Dutch fort</td>
                  <td>Shehan Liyanage</td>
                  <td>8</td>
                  <td>541254587</td>
                  <td>
                    <button
                      className="btn btn-success m-1"
                      onClick={() => handleModal(1)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleModal(1)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageBookingsTourist;
