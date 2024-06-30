import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
      },
      rating: {
        type: Number,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

const Rating = mongoose.model("ratings", ratingSchema);

export default Rating;
