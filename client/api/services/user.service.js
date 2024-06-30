import User from "../models/user.model";
import bcrypt from 'bcrypt';


const createUser= async(userData)=>{
    try {
        let {firstName,lastName,email,password}=userData;

        const isUserExist= await User.findeOne({email});

        if(isUserExist){
            throw new Error ("user already exist with email :" ,email)
        }

        password= await bcrypt.hash(password,8);

        const user= await User.create({firstName,lastName,email,password});

        console.log("created user", user)

        return user;
    } catch (error) {
        
        throw new Error(error.message)
    }
}

const findUserbyId= async(userId)=>{
    try {
        const user= await User.findOne(userId);
        if(!user){
            throw new Error("user not found with id :" ,userId)
        }
        return user;

    } catch (error) {
        throw new Error(error.message) 
    }
}

const findUserbyEmail= async(email)=>{
    try {
        const user= await User.findOne(email);
        if(!user){
            throw new Error("user not found with email :" ,email)
        }
        return user;
        
    } catch (error) {
        throw new Error(error.message) 
    }
}

const getUserProfileByToken=async(token)=>{
    try {
        
    } catch (error) {
        
    }
}
export default {createUser, findUserbyEmail, findUserbyId};