import userModel from "../models/user.model.js";

// Create
const createUser = async (req,res,next) => {
    try {
        const newUser = new userModel(req.body);
        newUser.save();
    } catch (error) {
        next(error)
    }
}

// GET
const getUser = async (req, res,next) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

// GET ALL
const getAllUsers = async (req, res,next) => {
  try {
    const allUsers = await userModel.find({});
    res.send(allUsers);
  } catch (error) {
    next(error);
  }
};


// UPDATE
const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id,req.body,{ new: true });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
};

// DELTE
const deleteUser = async (req, res) => {
  try {
    const deletedHotel = await userModel.findByIdAndDelete(req.params.id);
    res.send(deletedHotel);
  } catch (error) {
    next(error);
  }
};


export {createUser,getUser,getAllUsers,updateUser,deleteUser}