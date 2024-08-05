import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'TITLE'    // required: true,
  },
  description: {
    type: String,
     default: 'TRUE'    // required: true,
  },
  price: {
    type: Number,
    default: 0          // required: true,
  },
  discountedPrice: {
    type: Number,
  },
  discountPercent: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  brand: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  numRatings: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // New fields for offline counter sales
  BarCode:{
    type: Number,
    default: 0,
  },
  stockType:{
    type: String,
    default: "TYPE NONE"
  },
  unit:{
    type: String,
    default: 'Unit A'
  },
  purchaseRate: {
    type: Number,
    default : 0
  },
  profitPercentage: {
    type: Number,
    default : 0
  },
  HSN: {
    type: String,
    default: 'HSN'
  },
  GST: {
    type: Number,
    default : 0
  },
  retailPrice: {
    type: Number,
    default : 0
  },
  totalAmount: {
    type: Number,
    default : 0
  },
  amountPaid: {
    type: Number,
    default : 0
  }
});

const Product = mongoose.model("products", productSchema);

export default Product;