import hotalModel from "../models/hotal.model.js";



// CREATE
const createHotel = async (req, res, next) => {
  try {
    const newHotel = new hotalModel(req.body);
    const savedHotel = await newHotel.save();
    res.send(savedHotel);
  } catch (error) {
    next(error);
  }
}


// GET
const getSingleHotel = async (req, res) => {
  try {
    const allHotels = await hotalModel.findById(req.params.id);
    res.send(allHotels);
  } catch (error) {
    next(error);
  }
};

// GET ALL
const getAllHotels = async (req, res) => {
  try {
    const allHotels = await hotalModel.find({});
    res.send(allHotels);
  } catch (error) {
    next(error);
  }
};

// UPDATE
const updateHotel = async (req, res) => {
  try {
    const allHotels = await hotalModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(allHotels);
  } catch (error) {
    next(error);
  }
};

// DELTE
const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await hotalModel.findByIdAndDelete(req.params.id);
    res.send(deletedHotel);
  } catch (error) {
    next(error);
  }
};


export {createHotel,getSingleHotel,getAllHotels,updateHotel,deleteHotel};
