import express from "express";
import {upload} from "../middleware/multer.middlware.js";
import { addAddress, deleteAddress, getAllAddress, updateAddress } from "../controller/address.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
import authenticate from "../middleware/authenticat.js";


const address = express.Router();




//// address routes defined here

address.route("/addAddress").post(
    verifyToken,
    // upload.none(),
    addAddress
);


address.route("/updateAddress").post(
    verifyToken,
    // upload.none(),
    updateAddress
);


address.route("/getAllAddress").get( 
    verifyToken,
    // upload.none(),
    getAllAddress
);

address.route(`/deleteAddress`).delete(

    verifyToken,
    // upload.none(),
    deleteAddress

);



export default address;