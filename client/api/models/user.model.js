import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required: true,
    },
    userName:{
        type:String,
        required:true,
        unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    mobile:{
        type:String,
    },
    address:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"addresses" 
    }],
    paymentInformation:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"payment_information"
        }
    ],
    ratings:[
        {
             type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    reviews:[
        {
             type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
} ,
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
