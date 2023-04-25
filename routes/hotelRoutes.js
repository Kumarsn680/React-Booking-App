import express from "express";
const router = express.Router();
import { createHotel,getAllHotels,getSingleHotel,updateHotel,deleteHotel } from "../controllers/hotel.controller.js";
import { verifyAdmin, verifyUser } from "../utils/checkAuthentication.js";

// CREATE
router.post('/',verifyUser,createHotel)
// GET
router.get("/:id",verifyUser, getSingleHotel);
// GET ALL
router.get("/",verifyAdmin,getAllHotels);
// UPDATE
router.put("/:id",verifyUser, updateHotel);
// DELTE
router.delete("/:id",verifyUser, deleteHotel);


export default router;
