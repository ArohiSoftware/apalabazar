import express from 'express';
import productRouter from './product.routes.js';
import categoryRouter from './category.routes.js';



const adminRouter = express.Router();


adminRouter.use('/category', categoryRouter);  
adminRouter.use('/product', productRouter);  


export default adminRouter;