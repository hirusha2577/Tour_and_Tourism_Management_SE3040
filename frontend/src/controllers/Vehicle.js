import axios from "axios";

// Config
import { BASE_URL } from "../utils/config";

export const createVehicle = async (details) => {
    const { data } = await axios.post(BASE_URL + "vehicle/create/", details);
    return data;
}