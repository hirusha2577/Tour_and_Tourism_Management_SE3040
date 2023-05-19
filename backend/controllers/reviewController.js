import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    //after creating a new review now update
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (error) {
    res.status(500).json({ success: false, message: "fail to submit" });
  }
};

export const updatedReview = async (req, res) => {
  console.log(req.body);
  try {
    const review = await Review.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      {
        _id: req.body.id,
        reviewText: req.body.reviewText,
        email: req.body.email,
        rating: req.body.rating,
      },
      {
        new: true,
      }
    );

    if (user) {
      res.send({
        status: 200,
        user: user,
      });
    } else {
      res.send({
        status: 500,
        user: user,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
