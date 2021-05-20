import express from "express";
import {getusers,createusers,getstudentdetails,deleteusersById,updateusersById} from "../controllers/user.js"
const router=express.Router();

router.get("/", getusers)
router.get("/:id", getstudentdetails)
router.post("/", createusers)
router.delete("/:id", deleteusersById)
router.patch("/:id", updateusersById)

export default router


