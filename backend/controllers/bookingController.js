import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  console.log(newBooking)


  try {
    const savedBooking = await newBooking.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Booking created successfully",
        data: savedBooking,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "internal Server Error" });
  }
};

export const getBooking =  async (req, res) => {
    const id = req.params.id;

    try {
        const book = await Booking.findById(id);

        res.status(200).json({
            success: true,
            message: "Booking fetched successfully",
            data: book,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found" });
    }
}

export const getAllBooking =  async (req, res) => {

    try {
        const book = await Booking.find({});

        res.status(200).json({
            success: true,
            message: "Booking fetched successfully",
            data: book,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found" });
    }
}