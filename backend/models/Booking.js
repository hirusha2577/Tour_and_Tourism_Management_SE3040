import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    tourId: {
      type: String,
    },
    tourName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    HotelName: {
      type: String,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
      // required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    guideId: {
      type: String,
    },
    guideName: {
      type: String,
    },
    vehicleId: {
      type: String,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
