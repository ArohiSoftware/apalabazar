import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        // required: true,
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orderItems",
    }],
    orderDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    delivaryDate: {
        type: Date,
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses',
    },
    paymentDetails: {

        paymentMethod: {
            type: String,
        },
        transactionId: {
            type: String,
        },
        paymentId: {
            type:String,
        },
        paymentStatus: {
            type:String,
            default: "PENDING"
        }
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalDiscountedPrice: {
        type: Number,
        required: true,
    },
    GST:{
     type:Number,
     required:true,
    },
    discount:{
        type: Number,
        required: true,
        default:0 
    },
   orderStatus: {
        type: String,
        required: true,
        default: "PENDING"
    },
    coupenDiscount:{
        type:Number,
        default:0,
    },
    totalItem: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Order = mongoose.model("orders", orderSchema);

export default Order;
