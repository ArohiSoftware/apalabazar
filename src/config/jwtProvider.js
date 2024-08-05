import 'dotenv/config';
import jwt from 'jsonwebtoken';

// Use the correct environment variable key
const SECRET_KEY = process.env.JWT_SECRET;

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '48h' });
    return token;
}

// Example function to decode and verify a JWT token
function getUserIdFromToken(token, secret) {
    try {
        // Verify and decode the token
        const decoded = jwt.verify(token,SECRET_KEY);
//console.log("decoded token ",decoded)
        // Extract user ID from the decoded payload
        const userId = decoded.id; // Adjust this based on your token's structure
//console.log("get id from token ",userId)
        return userId;
    } catch (err) {
        console.error('Invalid token:', err.message);
        return null;
    }
}

export { generateToken, getUserIdFromToken };


