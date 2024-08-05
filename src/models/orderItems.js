import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema({
  
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },

  price: {
    type: Number,
    required: true,
  },

  discountedPrice: {
    type: Number,
    required: true,
  },

  userId: {
    type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
  },

});

const OrderItem = mongoose.model("orderItems", orderItemSchema);

export default OrderItem;
