import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

import "../styles/add-vehicle.css";

import { createVehicle } from "../controllers/Vehicle";

const AddVehicle = () => {
  const { user } = useContext(AuthContext);
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleIdentification, setVehicleIdentification] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    createVehicle({
      userID: user._id,
      number: vehicleNumber,
      type: vehicleType,
      seatCapacity: vehicleCapacity,
      identification: vehicleIdentification,
      driverName: user.username,
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
  };

  return (
    <div>
      <div>
        <h2 className="d-flex justify-content-center mb-4">Add Vehicles</h2>
      </div>
      <div>
        <Form className="add-tour-form" onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="vehicle Type"
              value={vehicleType.value}
              onChange={(e) => setVehicleType(e.target.value)}
              placeholder="Vehicle Type"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="vehicle Identification"
              value={vehicleIdentification.value}
              onChange={(e) => setVehicleIdentification(e.target.value)}
              placeholder="Vehicle Identification"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="vehicle Number"
              value={vehicleNumber.value}
              onChange={(e) => setVehicleNumber(e.target.value)}
              placeholder="Vehicle Number"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label className="vlable" for="vehicleDriver">
              Vehicle Driver:
            </Label>
            <Input
              type="text"
              name="HotelName"
              value={user.username}
              placeholder="Hotel Name"
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="vehicle Capacity"
              value={vehicleCapacity.value}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Vehicle Capacity"
              required
            />
          </FormGroup>
          <Button type="submit" className="form-btn">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddVehicle;
