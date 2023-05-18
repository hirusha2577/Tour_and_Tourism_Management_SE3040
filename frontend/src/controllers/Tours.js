import axios from "axios";

// Config
import { BASE_URL } from "../utils/config";

export const createTour = async (details) => {
  console.log(details);
  const { data } = await axios.post(BASE_URL + "tours/", details);
  return data;
};

export const getAllTour = async () => {
  const { data } = await axios.get(BASE_URL + "tours/");
  return data;
};

export const deleteTour = async (id) => {
  const { data } = await axios.delete(BASE_URL + "tours/", {
    id: id,
  });
  return data;
};

export const updatedTour = async (id) => {
  const { data } = await axios.put(BASE_URL + "tours/", {
    id: id,
  });
  return data;
};
