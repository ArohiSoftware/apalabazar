import express from 'express';

import adminRouter from '../routes/admin.route.js';
import authRouter from '../routes/auth.routes.js';
import userRouter from '../routes/user.routes.js';

const allRouter = express.Router();


allRouter.use('/admin',adminRouter);
allRouter.use('/auth' ,authRouter);
allRouter.use('/user' ,userRouter);





export default allRouter;