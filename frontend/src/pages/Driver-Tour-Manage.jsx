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

const DriverTourView = () => {
  const [tours, setTours] = useState([]);
  const [modal, setModal] = useState(false);

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
            <Link to="/guide-tour-manage">
              <div className="guide__pending">Pending</div>
            </Link>
            <Link to="/home-Giude">
              <div className="guide__onGoing">On Going</div>
            </Link>
            <Link to="/home-Giude">
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
            <tr>
              <td>Nine arches bridge</td>
              <td>Lalith padikorala</td>
              <td>8</td>
              <td>771234567</td>
              <td>NA-8563</td>
              <td>
                <Button className="giude__confirm">Confirm Booking</Button>
              </td>
            </tr>
            <tr>
              <td>Yala National Park</td>
              <td>Viraj Chinthaka</td>
              <td>8</td>
              <td>771234567</td>
              <td>NB-2463</td>
              <td>
                <Button className="giude__confirm">Confirm Booking</Button>
              </td>
            </tr>
            <tr>
              <td>Dutch fort</td>
              <td>Shehan Liyanage</td>
              <td>8</td>
              <td>541254587</td>
              <td>NA-8563</td>
              <td>
                <Button className="giude__confirm">Confirm Booking</Button>
              </td>
            </tr>
          </tbody>
          {/* {tours.map((tour) => (
          <tr key={tour.id} className="table-row">
            <td>{tour.title}</td>
            <td>{tour.city}</td>
            <td>
              <Button className="edit-button">Edit</Button>
              <Button className="delete-button" onClick={() => handleDelete(tour.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))} */}
           </Table> 

          {/* *****************************************************************************************
           ********************************************************************************************
           *** on goin **********************************************************************/}
          {/* <Table className="custom-table">
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
            <tr>
            <td>Nine arches bridge</td>
              <td>Shehan Liyanage</td>
              <td>8</td>
              <td>0112546958</td>
              <td>NB-2463</td>
              <td>
                <Button className="giude__confirm">End Tour</Button>
              </td>
            </tr>
          </tbody>
        </Table> */}

          {/* *****************************************************************************************
           ********************************************************************************************
           *** Completed **********************************************************************/}

          {/* <Table className="custom-table">
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Full Name</th>
                <th>Guest Size</th>
                <th>Number</th>
                <th>Vehicle ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dutch fort</td>
                <td>Shehan Liyanage</td>
                <td>8</td>
                <td>541254587</td>
                <td>NA-8563</td>
              </tr>
            </tbody>
          </Table> */}
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

export default DriverTourView;
