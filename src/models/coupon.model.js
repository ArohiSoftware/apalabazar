import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code: { type: String, unique: true, required: true },
    discountType: { type: String, enum: ['percentage', 'fixed'], required: true },
    discountValue: { type: Number, required: true },
    expirationDate: { type: Date, required: true },
    usageLimit: { type: Number, default: null },
    usageCount: { type: Number, default: 0 }
    },

    {timestamps: true}
);

const Coupons = mongoose.model("coupons", couponSchema);

export default Coupons;

