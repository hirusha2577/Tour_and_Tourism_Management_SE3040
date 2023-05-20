import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import "../styles/manage-driver.css";
import "../styles/home.css";

import { getAllComletedBookings } from "../controllers/Booking.js";

const DriverTourComplete = () => {
  const [tours, setTours] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const bookingData = await getAllComletedBookings();
      setTours(bookingData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tours);

  return (
    <div>
      <div>
        <h2 className="ml-5">Driver Appointment </h2>
        <section>
          <div className=" guide__links d-flex ">
            <Link to="/driver-tour-manage">
              <div className="guide__onGoing">Pending</div>
            </Link>
            <Link to="/driver-tour-ongoing">
              <div className="guide__onGoing">On Going</div>
            </Link>
            <Link to="/driver-tour-complete">
              <div className="guide__pending">Completed</div>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <section>
        <div className=" Hotel__links d-flex align-items-center gap-5">
          <Link to="/driver-tour-manage">
            <div className="hotel__main">Appointments</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DriverTourComplete;
