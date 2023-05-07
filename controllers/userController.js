import User from "../models/User.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created a new tour",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create tour",
    });
  }
};

export const updatedUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated tour",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update tour",
    });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      await User.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        message: "Successfully Deleted user",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to delete user",
    });
  }
};
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfully get user",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to find user",
    });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json({
      success: true,
      message: "Successfully get users",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to find users",
    });
  }
};