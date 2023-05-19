import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  seatCapacity: {
    type: Number,
    required: true,
  },

  identification: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Vehicle", vehicleSchema);
