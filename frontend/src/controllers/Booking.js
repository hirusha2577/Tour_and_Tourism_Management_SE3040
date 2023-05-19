import axios from "axios";

// Config
import { BASE_URL } from "../utils/config";

export const updateBooking = async (details) => {
  const { data } = await axios.post(BASE_URL + "booking/update/", details);
  return data;
};

export const getAllBooking = async () => {
  const { data } = await axios.get(BASE_URL + "booking/");
  return data;
};
