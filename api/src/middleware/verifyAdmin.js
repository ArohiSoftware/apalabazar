import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const verifyAdmin = async (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing', status: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized', status: false });
        }

        if (user.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Forbidden: Admin access required', status: false });
        }

        req.user = user; // Assign user to req.user
        next();
    } catch (error) {
        console.error('Error in verifyAdmin middleware:', error);
        return res.status(500).json({ message: 'Internal server error', status: false, error: error.message });
    }
};
