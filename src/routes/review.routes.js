import express from "express";
import authenticate from "../middleware/authenticat.js";

const router = express.Router();
import {createview,getAllview} from "../controller/review.controller.js";

router.post("/create",authenticate,createview);
router.get("/product/:productId",authenticate,getAllview);


export default router;