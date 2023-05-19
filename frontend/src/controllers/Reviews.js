import axios from "axios";

// Config
import { BASE_URL } from "../utils/config";

export const updatedReview = async (details) => {
  console.log(details);
  const { data } = await axios.post(BASE_URL + "review/update/", details);
  return data;
};
