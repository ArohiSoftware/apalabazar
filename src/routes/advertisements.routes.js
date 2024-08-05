import express from 'express';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import upload from '../cloud/multerConfig.js'; // Correctly import multer configuration
import { createAdvertisement, getallAdvertisements, getAdvertisement, updateAdvertisement, deleteAdvertisement } from '../controller/advertisement.controller.js'
const router = express.Router();

router.post('/create', verifyAdmin, upload.single('image'), createAdvertisement);
router.get('/view/:id', getAdvertisement);
router.put('/update/:id', verifyAdmin, upload.single('image'), updateAdvertisement);
router.delete('/delete/:id', verifyAdmin, deleteAdvertisement);
router.get('/view', getallAdvertisements);

export default router;
