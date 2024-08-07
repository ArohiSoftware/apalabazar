import express from "express";
import { isPincodeAvailable } from "../controller/delivery.controller.js";
const deliveryRoute = express.Router();
deliveryRoute.route("/isPincodeAvailable").post(isPincodeAvailable);
export default deliveryRoute;
