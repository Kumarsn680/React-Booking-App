import express from "express";
import { getAllUsers,createUser,deleteUser,updateUser,getUser } from "../controllers/user.controller.js";
import { checkAuth, verifyAdmin, verifyUser } from "../utils/checkAuthentication.js";

const router = express.Router();

// router.get("/checkAuthentication",checkAuth,(req,res,next)=>{
//     res.send("Hello User you are authenticated")
//     next()
// })

// router.get("/verifyUser/:id",verifyUser,(req,res,next)=>{
//     console.log("we are here in userroutes")
//     res.send("User is verified and can delete the account")
//     next()
// })

// router.get("/verifyAdmin/:id", verifyAdmin, (req, res, next) => {
//   console.log("we are here in userroutes");
//   res.send("Admin is verified and can do  everything");
//   next();
// });

// Create User
router.get("/:id",verifyUser, createUser);

// Update User
router.put("/:id",verifyUser, updateUser);

// Delete User
router.delete("/:id",verifyUser, deleteUser);

// Get  User
router.get("/:id",verifyUser, getUser);

// Get All  User
router.get("/", verifyAdmin, getAllUsers);


export default router;
