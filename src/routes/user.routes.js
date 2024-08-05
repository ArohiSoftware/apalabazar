import express from 'express';
import upload from '../cloud/multerConfig.js';
import {
    getUserById,
    updateUserById,
    deleteUserById,
    getAllUsers
} from '../controller/user.controller.js';
import { verifyToken } from '../middleware/verifyUser.js';

const router = express.Router();

router.get('/view/:Id',verifyToken, getUserById);
router.put('/update/:Id', upload.single('profileImage'), updateUserById);
router.delete('/delete/:Id',verifyToken, deleteUserById);
router.get('/view', getAllUsers);

export default router;
