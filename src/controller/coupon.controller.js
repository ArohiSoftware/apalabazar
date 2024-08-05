import Coupons from "../models/coupon.model.js";


export const createCoupon = async (req, res) => {
    const { code, discountType, discountValue, expirationDate, usageLimit } = req.body;

    // Validate required fields
    console.log("RECEIVED VLAUES ARE: ", code, discountType, discountValue, expirationDate, usageLimit )
    if (!code || !discountType || !discountValue || !expirationDate) {
        return res.status(400).send({ message: "Code, discount type, discount value, and expiration date are required", status: false, data :{ 'code':code, 'discountType': discountType, 'discountValue': discountValue, 'expirationDate': expirationDate, 'usageLimit': usageLimit} });
    }

    // Validate discountType
    const validDiscountTypes = ['percentage', 'fixed'];
    if (!validDiscountTypes.includes(discountType)) {
        return res.status(400).send({ message: "Invalid discount type. Must be 'percentage' or 'fixed'", status: false });
    }

    try {
        // Create new coupon
        const coupon = new Coupons({
            code,
            discountType,
            discountValue,
            expirationDate,
            usageLimit
        });

        // Save coupon to the database
        const savedCoupon = await coupon.save();

        return res.status(201).send({ message: "Coupon created successfully", status: true, data: savedCoupon });
    } catch (error) {
        console.error('Error creating coupon:', error);
        return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
};



export const getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupons.find();
        return res.status(200).send({ message: "Coupons retrieved successfully", status: true, data: coupons });
    } catch (error) {
        console.error('Error retrieving coupons:', error);
        return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
};


export const deleteCoupon = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedCoupon = await Coupons.findByIdAndDelete(id);
  
      if (!deletedCoupon) {
        return res.status(404).send({ message: "Coupon not found", status: false });
      }
  
      return res.status(200).send({ message: "Coupon deleted successfully", status: true, data: deletedCoupon });
    } catch (error) {
      console.error('Error deleting Coupon:', error);
      return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
};


// Update coupon
// export const updateCoupon = async (req, res) => {
//     const { id } = req.params;
//     const { code, discountType, discountValue, expirationDate, usageLimit } = req.body;
  
//     // Validate required fields
//     // if (!code || !discountType || !discountValue || !expirationDate) {
//     //   return res.status(400).send({ 
//     //     message: "Code, discount type, discount value, and expiration date are required", 
//     //     status: false 
//     //   });
//     // }
  
//     // Validate discountType
//     const validDiscountTypes = ['percentage', 'fixed'];
//     if (!validDiscountTypes.includes(discountType)) {
//       return res.status(400).send({ 
//         message: "Invalid discount type. Must be 'percentage' or 'fixed'", 
//         status: false 
//       });
//     }
  
//     try {
//       const updatedCoupon = await Coupons.findByIdAndUpdate(
//         id,
//         { code, discountType, discountValue, expirationDate, usageLimit },
//         { new: true }
//       );
  
//       if (!updatedCoupon) {
//         return res.status(404).send({ 
//           message: "Coupon not found", 
//           status: false 
//         });
//       }

//       return res.status(200).send({ 
//         message: "Coupon updated successfully", 
//         status: true, 
//         data: updatedCoupon 
//       });
//     } catch (error) {
//       console.error('Error updating coupon:', error);
//       return res.status(500).send({ 
//         message: "Internal server error", 
//         status: false, 
//         error: error.message 
//       });
//     }
//   };





  export const updateCoupon = async (req, res) => {
      const { id } = req.params;
      const { code, discountType, discountValue, expirationDate, usageLimit } = req.body;

  
      try {
          const coupon = await Coupons.findById(id);
          if (!coupon) {
              return res.status(404).send({ message: "Coupon not found", status: false });
          }
          if (code) coupon.code = code;
          if (discountType) {
              const validDiscountTypes = ['percentage', 'fixed'];
              if (!validDiscountTypes.includes(discountType)) {
                  return res.status(400).send({ message: "Invalid discount type. Must be 'percentage' or 'fixed'", status: false });
              }
              coupon.discountType = discountType;
          }
  
          if (discountValue) {
              coupon.discountValue = discountValue;
          }
  
          if (expirationDate) {
              coupon.expirationDate = expirationDate;
          }
  
          if (usageLimit) {
              coupon.usageLimit = usageLimit;
          }
  
          const updatedCoupon = await coupon.save();
  
          return res.status(200).send({ message: "Coupon updated successfully", status: true, data: updatedCoupon });
      } catch (error) {
          console.error('Error updating coupon:', error);
          return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
      }
  };
  

