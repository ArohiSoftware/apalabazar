import express from "express";
import {upload} from "../middlewares/multer.middleware.js";
import { addAddress, addToCart, deleteAddress, getAllAddress, getCartDetails, getCartItemsById, removeAllCart, removeOneCart, updateAddress } from "../controller/cart.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";


const cartRouter = express.Router();


///// cart routes defined here

/// add cart routes 
cartRouter.route("/addCart").post(
    
    verifyToken,
    upload.none(),
    addToCart
);


/// get cart details routes
cartRouter.route("/getCartDetails").get(
    verifyToken,
    getCartDetails
);



//// get one cart item by id
cartRouter.route("/getItemsInfo").get(
    verifyToken,
    getCartItemsById
);



/// remove one cart item by id
cartRouter.route("/removeCartItem").delete(
    verifyToken,
    removeOneCart
);


/// remove all cart items
cartRouter.route("/removeAllCart").delete(
    verifyToken,
    removeAllCart
);





//// address routes defined here

cartRouter.route("/addAddress").post(
    verifyToken,
    upload.none(),
    addAddress
);


cartRouter.route("/updateAddress").post(
    verifyToken,
    upload.none(),
    updateAddress
);


cartRouter.route("/getAllAddress").get( 
    verifyToken,
    upload.none(),
    getAllAddress
);

cartRouter.route(`/deleteAddress`).delete(

    verifyToken,
    upload.none(),
    deleteAddress

);



export default cartRouter;