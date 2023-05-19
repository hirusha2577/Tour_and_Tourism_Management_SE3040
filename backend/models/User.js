import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },

    photo: {
      type: String,
    },

    role: {
      type: String,
      default: "user",
    },
    hotelname: {
      type: String,
    },
    hotellocation: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
