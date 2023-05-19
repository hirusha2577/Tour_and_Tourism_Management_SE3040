import axios from "axios";

// Config
import { BASE_URL } from "../utils/config";

export const updatedReview = async (details) => {
  console.log(details);
  const { data } = await axios.post(BASE_URL + "review/update/", details);
  return data;
};

export const deleteReview = async (id) => {
  console.log(id);
  const { data } = await axios.post(BASE_URL + "review/delete/", {
    id: id,
  });
  return data;
};
