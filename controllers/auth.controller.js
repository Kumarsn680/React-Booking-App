import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import {  createCustomError } from "../utils/customError.js";
import  Jwt  from "jsonwebtoken";

const register = async (req,res,next) => {
    try {
         bcrypt.hash(req.body.password,10,async function (err, hash) {
            const newUser = new userModel({
              username: req.body.username,
              email: req.body.email,
              password: hash,
              isAdmin: req.body.isAdmin,
            });
        console.log(newUser)
        const savedUser = await newUser.save();
        console.log(savedUser)
        res.send(savedUser);
        }
        );
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
  try {
    const requestedUser = await userModel.findOne({ username: req.body.username });
    if(!requestedUser) return next(createCustomError(401,"User Not Found"))
    bcrypt.compare(req.body.password, requestedUser.password, function (err, result) {
      if(result){
        console.log("User Logged in")
        const token = Jwt.sign({ id: requestedUser._id,isAdmin : requestedUser.isAdmin }, process.env.JWT);
        res.cookie("access_token",token,{
         httpOnly : true
        }).send(requestedUser)
      }else{
        next(createCustomError(401,"Password Incorrect"));
      }
    });
  } catch (error) {
    next(error);
  }
};

export {register,login}