import express from "express";
import {upload} from "../middlewares/multer.middleware.js";
import { testingRegisterUser } from "../controller/testing.controller.js";

const testingRouter = express.Router();


testingRouter.route("/registerUser").post(
    upload.none(),
    testingRegisterUser
);


export default testingRouter;