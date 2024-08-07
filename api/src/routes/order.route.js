import express from 'express';
import { placeOrder,getAllOrders,cancelOrder } from '../controller/order.controller.js';
import { verifyToken } from '../middleware/verifyUser.js';
const OrderRouter = express.Router();
OrderRouter.route("/placeOrder").post(
    verifyToken,
    placeOrder,
);
OrderRouter.route("/cancelOrder").get(
    verifyToken,
  cancelOrder,
);
OrderRouter.route("/getAllOrders").get(
    verifyToken,
    getAllOrders,
);
export default OrderRouter;