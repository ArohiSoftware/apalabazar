import express from "express";
import adminRouter from "../routes/admin.route.js";
import authRouter from "../routes/auth.routes.js";
import userRouter from "../routes/user.routes.js";
import categoryRouter from "../routes/category.routes.js";
import ratingRouter from "../routes/rating.routes.js";
import reviewRouter from "../routes/review.routes.js";
import productRouter from "../routes/product.js";
import addressRoute from "../routes/address.route.js";
import cartRouter from "../routes/cart.routes.js";
import couponsRoute from "../routes/coupons.route.js";
import OrderRouter from "../routes/order.route.js";
import deliveryRoute from "../routes/delivery.routes.js";

const allRouter = express.Router();

allRouter.use("/admin", adminRouter);
allRouter.use("/auth", authRouter);
allRouter.use("/user", userRouter);
allRouter.use("/category", categoryRouter);
allRouter.use("/rating", ratingRouter);
allRouter.use("/review", reviewRouter);
allRouter.use("/product", productRouter);
allRouter.use("/address", addressRoute);
allRouter.use("/coupons", couponsRoute);
allRouter.use("/order", OrderRouter);
allRouter.use("/cart", cartRouter);
allRouter.use("/delivery", deliveryRoute);

export default allRouter;
