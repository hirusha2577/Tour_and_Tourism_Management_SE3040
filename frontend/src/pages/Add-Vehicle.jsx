import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/add-vehicle.css";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleIdentification: "",
    vehicleNumber: "",
    vehicleDriver: "Shehan Liyanage",
    vehicleCapacity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
              name="vehicleType"
              value={formData.title}
              onChange={handleChange}
              placeholder="Vehicle Type"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="vehicleIdentification"
              value={formData.city}
              onChange={handleChange}
              placeholder="Vehicle Identification"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              placeholder="Vehicle Number"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label className="vlable" for="vehicleDriver">Vehicle Driver:</Label>
            <p value="vehicleDriver">Shehan Liyanage</p>
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              name="phvehicleCapacity"
              value={formData.photo}
              onChange={handleChange}
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
