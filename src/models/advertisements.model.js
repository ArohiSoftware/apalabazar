import mongoose from "mongoose";

const advertisementsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    imageUrl: {
      type: String,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      // required: true
    },
    startDate: {
      type: Date,
      // required: true
    },
    endDate: {
      type: Date,
      // required: true
    },
    section: {
      type: String,
      required: true,
      enum: ['Section 0','Section 1', 'Section 2', 'Section 3', 'Section 4'] 
    },
    active: {
      type: Boolean,
      default: true
    }
  }, 
  { timestamps: true });

const Advertisements = mongoose.model("advertisements", advertisementsSchema);

export default Advertisements;
