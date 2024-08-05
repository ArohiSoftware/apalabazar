import express from "express";
import authenticate from "../middleware/authenticat.js";
const router = express.Router();
import {
    createRating,
    getProductsRating,
  } from "../services/rating.service.js";

router.post("/create",authenticate,createRating);
router.get("/product/:productId",authenticate,getProductsRating);


 export default router;
