import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const tour = new Tour({
    title: req.body.title,
    city: req.body.city,
    address: req.body.address,
    distance: req.body.distance,
    desc: req.body.desc,
    price: req.body.price,
    maxGroupSize: req.body.maxGroupSize,
    HotelName: req.body.hotelName,
  });
  const details = await tour.save();

  res.send({
    status: "success",
    details: details,
  });
};

export const updatedTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated tour",
      data: updateTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update tour",
    });
  }
};
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      await Tour.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        message: "Successfully Deleted tour",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to delete tour",
    });
  }
};
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfully get tour",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to find tour",
    });
  }
};
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    const tour = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tour.length,
      message: "Successfully get tours",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to find tours",
    });
  }
};

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfully get tours",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Unable to find tours",
    });
  }
};

export const getFeaturedTour = async (req, res) => {
  try {
    const tour = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to find",
    });
  }
};

//get tour counts

export const getTourCounts = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Unable to get tour count" });
  }
};
