import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/add-tour.css";

const AddTour = () => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    photo: "",
    desc: "",
    price: "",
    maxGroupSize: "",
    HotelName: "",
    featured: false,
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
      <h2 className="d-flex justify-content-center mb-4">Add Tours</h2>
      </div>
      <div>
        <Form className="add-tour-form" onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              placeholder="Distance"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="Photo"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="textarea"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              placeholder="Description"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              name="maxGroupSize"
              value={formData.maxGroupSize}
              onChange={handleChange}
              placeholder="Max Group Size"
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="HotelName"
              value={formData.HotelName}
              onChange={handleChange}
              placeholder="Hotel Name"
              required
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    featured: e.target.checked,
                  }))
                }
              />
              Featured
            </Label>
          </FormGroup>

          <Button type="submit" className="form-btn">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddTour;
