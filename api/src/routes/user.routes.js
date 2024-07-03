import express from "express";
import cartRouter from "./cart.routes.js";

const userRouter = express.Router();



// userRouter.post('/update/:id', verifyToken, updateUser)
// userRouter.delete('/delete/:id', verifyToken, deleteUser)
// userRouter.get('/:id', verifyToken, getUser)


userRouter.use("/cart", cartRouter)




export default userRouter;
 