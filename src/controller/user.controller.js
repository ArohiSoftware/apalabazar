// import Cart from '../models/cart.model.js';
// import CartItem from '../models/cartItem.model.js';
// import Product from '../models/product.model.js';
// import User from '../models/user.model.js';
// import { asyncHandler } from '../utils/asyncHandler.js';
// // Update user
// export const updateUser = async (req, res) => {
//     const { id } = req.params;
//     const updates = req.body;

//     if (req.user.id !== id && req.user.role !== 'ADMIN') {
//         return res.status(403).json({ message: 'Forbidden: You cannot update this user', status: false });
//     }

//     try {
//         const user = await User.findByIdAndUpdate(id, updates, { new: true });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found', status: false });
//         }

//         return res.status(200).json({ message: 'User updated successfully', status: true, data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error', status: false });
//     }
// };

// // Delete user
// export const deleteUser = async (req, res) => {
//     const { id } = req.params;

//     if (req.user.id !== id && req.user.role !== 'ADMIN') {
//         return res.status(403).json({ message: 'Forbidden: You cannot delete this user', status: false });
//     }

//     try {
//         const user = await User.findByIdAndDelete(id);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found', status: false });
//         }

//         return res.status(200).json({ message: 'User deleted successfully', status: true });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error', status: false });
//     }
// };


// // Get user
// export const getUser = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const user = await User.findById(id);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found', status: false });
//         }

//         return res.status(200).json({ message: 'User retrieved successfully', status: true, data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error', status: false });
//     }
// };



import { uploadImageOnCloudinary } from '../cloud/cloudinary.js'; 
import User from '../models/user.model.js';
import mongoose from 'mongoose';

// Get user by ID
export const getUserById = async (req, res) => {
    const { Id } = req.params;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(Id)) {
        return res.status(400).json({ message: 'Invalid user ID format', status: false });
    }

    try {
        const user = await User.findById(Id)
            .populate('reviews'); // Adjust according to your schema

        if (!user) {
            return res.status(404).json({ message: 'User not found', status: false });
        }

        return res.status(200).json({ message: 'User fetched successfully', status: true, data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', status: false });
    }
};

// Update user by ID
export const updateUserById = async (req, res) => {
    const { Id } = req.params;
    const updateData = req.body;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(Id)) {
        return res.status(400).json({ message: 'Invalid user ID format', status: false });
    }

    try {
        if (req.file) {
            const uploadResponse = await uploadImageOnCloudinary(req.file.path);
            updateData.profileImage = uploadResponse.secure_url;
        }

        const user = await User.findByIdAndUpdate(Id, updateData, { new: true }).populate('reviews');

        if (!user) {
            return res.status(404).json({ message: 'User not found', status: false });
        }

        return res.status(200).json({ message: 'User updated successfully', status: true, data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', status: false });
    }
};


// Delete user by ID
export const deleteUserById = async (req, res) => {
    const { Id } = req.params;
    const requesterId = req.user.id; // Get the ID of the requester from the token
    const requesterRole = req.user.role; // Get the role of the requester from the token

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(Id)) {
        return res.status(400).json({ message: 'Invalid user ID format', status: false });
    }

    try {
        const userToDelete = await User.findById(Id);

        if (!userToDelete) {
            return res.status(404).json({ message: 'User not found', status: false });
        }

        // Check if the requester is the user themselves or an admin
        if (requesterId === Id || requesterRole === 'ADMIN') {
            await User.findByIdAndDelete(Id);
            return res.status(200).json({ message: 'User deleted successfully', status: true });
        } else {
            return res.status(403).json({ message: 'Access denied. You can only delete your own account.', status: false });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal server error', status: false });
    }
};


// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
            .populate('reviews'); // Adjust according to your schema
        
        return res.status(200).json({ message: 'Users fetched successfully', status: true, data: users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', status: false });
    }
};
