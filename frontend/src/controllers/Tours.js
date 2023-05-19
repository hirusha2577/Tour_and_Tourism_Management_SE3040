import axios from "axios";

// Config
import { BASE_URL } from "../utils/config";

export const createTour = async (details) => {
  console.log(details);
  const { data } = await axios.post(BASE_URL + "tours/", details);
  return data;
};

export const getAllTour = async () => {
  const { data } = await axios.get(BASE_URL + "tours/hotel");
  return data;
};

export const deleteTour = async (tourId) => {
  console.log(tourId);
  const { data } = await axios.post(BASE_URL + "tours/delete/", {
    id: tourId,
  });
  return data;
};

export const updatedTour = async (details) => {
  console.log(details);
  const { data } = await axios.post(BASE_URL + "tours/update/", details);
  return data;
};
