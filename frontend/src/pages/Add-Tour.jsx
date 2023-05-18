import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/add-tour.css";
import Swal from "sweetalert2";

import { createTour } from "../controllers/Tours";

const AddTour = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [featured, setFeatured] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" &&
      city === "" &&
      address === "" &&
      distance === "" &&
      desc === "" &&
      price === "" &&
      maxGroupSize === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });
    } else if (title === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill Tilte field!",
      });
    } else if (city === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill City field!",
      });
    } else if (address === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill Address field!",
      });
    } else if (distance === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill Distance field!",
      });
    } else if (desc === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill Description field!",
      });
    } else if (price === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill Place field!",
      });
    } else if (maxGroupSize === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill Max Group Size field!",
      });
    } else if (hotelName === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill Hotel Name field!",
      });
    } else {
      const newTour = {
        title,
        city,
        address,
        distance,
        desc,
        price,
        maxGroupSize,
        hotelName,
        featured,
      };
      createTour(newTour);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Tour added successfully!",
      });
    }
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
              value={title.value}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="city"
              value={city.value}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="address"
              value={address.value}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              name="distance"
              value={distance.value}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Distance"
            />
          </FormGroup>

          {/* <FormGroup>
            <Input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="Photo"
              required
            />
          </FormGroup> */}

          <FormGroup>
            <Input
              type="textarea"
              name="desc"
              value={desc.value}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              name="price"
              value={price.value}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="number"
              name="maxGroupSize"
              value={maxGroupSize.value}
              onChange={(e) => setMaxGroupSize(e.target.value)}
              placeholder="Max Group Size"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="HotelName"
              value={hotelName.value}
              onChange={(e) => setHotelName(e.target.value)}
              placeholder="Hotel Name"
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="featured"
                checked={featured.value}
                onChange={(e) =>
                  setFeatured((prevState) => ({
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
