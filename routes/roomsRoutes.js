import express from "express";
import { verifyAdmin } from "../utils/checkAuthentication.js";
import { createRoom, deleteRoom } from "../controllers/room.controller.js";

const router = express.Router();

router.post("/:id", verifyAdmin,createRoom);
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
export default router;
