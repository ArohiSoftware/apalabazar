import mongoose from "mongoose";

const AddressSchema= new mongoose.Schema({

    // firstName:{
    //     type:String,
    //     required:true,
    // },
    // lastName:{
    //     type:String,
    //     required: true,
    // },

    fullName:{
        type:String,
        required:true,
    },

    streetAddress:{
        type:String,
        required:true,
    },

    area: {
        type: String,
    },

    houseNumber: {
        type: String,
    
    },

    landMark: {
        type: String,
        
    },
    city:{
        type:String,
        required:true,
    },

    district:{
        type:String,
        required:true,
    },

    state:{
        type:String,
        required:true,
    },

    zipCode:{
        type:String,
        required:true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,  // id  
        ref: "User",
    
    },

    mobile:{
        type:String,
        required:true,
    },

    extraMobile:{
        type:String,
    }
})

const Address = mongoose.model("Address", AddressSchema);

export default Address;
