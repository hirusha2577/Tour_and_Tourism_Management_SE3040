import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import "../styles/view-tours.css";
import "../styles/home.css";

const ViewTours = () => {
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
          <tr>
            <td>Nine Arches Bridge</td>
            <td>Ella</td>
            <td>No 1, Getehewelapathana Passara Road, 3rd Mile Post, Ella</td>
            <td>300 KM</td>
            <td>1500.00</td>
            <td>10</td>
            <td>
              <Button className="edt_btn">Edit</Button>
              <Button className="delete__button">Delete</Button>
            </td>
          </tr>
          <tr>
          <td>Dutch Fort</td>
            <td>Galle</td>
            <td>Church St, Galle</td>
            <td>400 KM</td>
            <td>3700.00</td>
            <td>8</td>
            <td>
              <Button className="edt_btn">Edit</Button>
              <Button className="delete__button">Delete</Button>
            </td>
          </tr>
          <tr>
          <td>Arugam Bay Beach</td>
            <td>Arugambay</td>
            <td>Arugambe, Batticalo</td>
            <td>500 KM</td>
            <td>8500.00</td>
            <td>8</td>
            <td>
              <Button className="edt_btn">Edit</Button>
              <Button className="delete__button">Delete</Button>
            </td>
          </tr>
          <tr>
          <td>Sigiriya</td>
            <td>Sigiriya</td>
            <td>Sigiriya, Matale</td>
            <td>500 KM</td>
            <td>4800.00</td>
            <td>7</td>
            <td>
              <Button className="edt_btn">Edit</Button>
              <Button className="delete__button">Delete</Button>
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
      </div>
      <section>
        <div className=" Hotel__links d-flex align-items-center gap-5">
          <Link to="/add-tour">
          <div className="hotel__main">
            Add Tour
          </div>
          </Link>
          <Link to="/view-tours" >
          <div className="hotel__main">
            View Tours
          </div>
          </Link>
          <Link to="/manage-bookings">
          <div className="hotel__main">
            View Bookings
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ViewTours;
