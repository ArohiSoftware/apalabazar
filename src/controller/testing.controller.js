import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Verify OTP and create user
export const testingRegisterUser = async (req, res) => {

    const { email, password, userName } = req.body;

    if (!email || !password || !userName) {
        return res.status(400).json({ message: 'Email, OTP, password, and userName are required', status: false });
    }

    try {
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await User.create({ 
            email, 
            password: hashedPassword, 
            userName 
        });

        

        // Generate JWT token
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET environment variable is not set.');
            return res.status(500).json({ message: 'Internal server error', status: false });
        }
        
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        
        return res
        .status(201)
        .json({ message: 'User created successfully', status: true, token, data: user });

    } 
    
    catch (error) {
        console.error(error);
        return res
        .status(500)
        .json({ message: 'Internal server error', status: false });
    }
}