import hotalModel from "../models/hotal.model.js";
import roomModel from "../models/room.model.js";

// CREATE
const createRoom = async (req, res, next) => {
  try {
    const hotelId = req.params.id
    const newRoom = new roomModel(req.body);
    console.log(newRoom);
    const savedRoom = await newRoom.save();
    try {
        const savedhotel = await hotalModel.findByIdAndUpdate(hotelId,{$push : {rooms : savedRoom._id}})
        res.send(savedhotel);
    } catch (error) {
        next(error)
    }
  } catch (error) {
    next(error);
  }
};

// GET
const getSingleRoom = async (req, res) => {
  try {
    const allHotels = await hotalModel.findById(req.params.id);
    res.send(allHotels);
  } catch (error) {
    next(error);
  }
};

// GET ALL
const getAllRooms = async (req, res,next) => {

  try {
    const allRooms = await roomModel.find({});
    res.send(allRooms);
  } catch (error) {
    next(error);
  }
};

// UPDATE
const updateRoom = async (req, res) => {
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
const deleteRoom = async (req, res,next) => {
  try {
    const roomId = req.params.id;
    const hotelId = req.params.hotelId;
    try {
      const savedhotel = await hotalModel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: roomId },
      });
      const deletedRoom = roomModel.findByIdAndDelete(roomId)
      res.send(savedhotel);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

export { createRoom,deleteRoom};
