import express from 'express';
import productRouter from './product.routes.js';
import categoryRouter from './category.routes.js';
import advertisementsRouter from './advertisements.routes.js';
import couponsRouter from './coupons.route.js';

const adminRouter = express.Router();


adminRouter.use('/category', categoryRouter);  
adminRouter.use('/product', productRouter);  
adminRouter.use('/advertisement', advertisementsRouter);  
adminRouter.use('/coupons', couponsRouter);  
 

export default adminRouter;