import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import "../styles/manage-appointment.css";
import "../styles/home.css";

const GiudeTourView = () => {
  const [tours, setTours] = useState([]);

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

  return (
    <div>
      <h2 className="ml-5">Manage Appointments </h2>
      <section>
        <div className=" guide__links d-flex ">
          <Link to="/guide-tour-manage">
            {/* guide__pending */}
            <div className="guide__onGoing">Pending</div> 
          </Link>
          <Link to="/home-Giude">
            {/*guide__onGoing  */}
            <div className="guide__onGoing">On Going</div>
          </Link>
          <Link to="/home-Giude">
            {/*guide__completed  */}
            <div className="guide__pending">Completed</div>
          </Link>
        </div>
      </section>
      <div className="table__div">
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
          </tbody> */}
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
         {/* </Table>  */}

        {/* on goin */}
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

        {/* complted */}

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
            <tr>
            <td>Dutch fort</td>
              <td>Shehan Liyanage</td>
              <td>8</td>
              <td>541254587</td>
              <td>NA-8563</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <section>
        <div className=" Hotel__links d-flex ">
          <Link to="/guide-tour-manage">
            <div className="hotel__main">View Bookings</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GiudeTourView;
