import express from 'express';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import upload from '../cloud/multerConfig.js'; // Correctly import multer configuration
import { createProduct, deleteProduct, updateProduct, viewProducts, viewProduct } from '../controller/product.controller.js';

const router = express.Router();

router.post('/create', verifyAdmin, upload.single('image'), createProduct);
router.get('/view/:id', viewProduct);
router.put('/update/:id', verifyAdmin, upload.single('image'), updateProduct);
router.delete('/delete/:id', verifyAdmin, deleteProduct);
router.get('/view', viewProducts);

export default router;
