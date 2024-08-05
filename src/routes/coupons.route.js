import express from 'express';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import { createCoupon, getAllCoupons, deleteCoupon,updateCoupon } from '../controller/coupon.controller.js'
const router = express.Router();

router.post('/create', verifyAdmin, createCoupon);
// router.get('/view/:id', getCoupon);
router.put('/update/:id', verifyAdmin, updateCoupon);
router.delete('/delete/:id', verifyAdmin, deleteCoupon);
router.get('/view', getAllCoupons);

export default router;
