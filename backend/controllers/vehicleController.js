import Vehicle from "../models/Vehicle.js";

export const createVehicle = async (req, res) => {
  const newVehicle = new Vehicle(req.body);
  console.log(newVehicle);
  try {
    const savedVehicle = await newVehicle.save();
    res.status(200).json({
      success: true,
      message: "Successfully created a new vehicle",
      data: savedVehicle,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create vehicle",
    });
  }
};

export const updateVehicle = async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  console.log(id);
  try {
    const updateVehicle = await Vehicle.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(updateVehicle);
    res.status(200).json({
      success: true,
      message: "Successfully updated Vehicle",
      data: updateVehicle,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "unable to update Vehicle",
    });
  }
};

export const deleteVehicle = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      await Vehicle.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        message: "Successfully Deleted Vehicle",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to delete Vehicle",
    });
  }
};

// export const getSingleVehicle = async (req, res) => {
//   const id = req.params.userID;
//   try {
//     const vehicle = await Vehicle.findOne(id);
//     res.status(200).json({
//       success: true,
//       message: "Successfully get Vehicle",
//       data: vehicle,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Unable to find Vehicle",
//     });
//   }
// };

export const getSingleVehicle = async (req, res) => {
  const vehicle = await Vehicle.findOne({ _id: req.body.id });
  res.send(vehicle);
};
