import { getUserIdFromToken } from "../config/jwtProvider.js";
import { findUserbyId } from "../services/user.service.js";
import { ObjectId } from 'mongodb'; 
const authenticate = async (req, res, next) => {
   
    try {
        const authHeader = req.headers.authorization; // Get the Authorization header
        //console.log("Authorization header:", authHeader);
        if (!authHeader) {
            return res.status(404).send({ message: "Token not found" });
        }

        const token = authHeader.split(' ')[1]; // Extract the token part from "Bearer <token>"
        //console.log("Token:", token);
        if (!token) {
            return res.status(404).send({ message: "Token not found" });
        }

        const userId = getUserIdFromToken(token); // Extract user ID from token
       
        const id = new ObjectId(userId);
        // console.log("User ID:", userId);
        const user = await findUserbyId(id); // Find user by ID
        //console.log("user found ",user);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        req.user = user;
        // console.log(req.user,"hallo") // Attach user to request object
        next(); // Proceed to the next middleware
    } catch (error) {
        console.error("Error in authentication middleware:", error);
        return res.status(500).send({ error: error.message });
    }
};

export default authenticate;
