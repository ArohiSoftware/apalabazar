import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { isPinCodeAvailable } from "../utils/isPincodeAvailable.js";

const isPincodeAvailable = asyncHandler(async (req, res) => {
  const { pincode } = req.body;
  try {
    const isAvailable = await isPinCodeAvailable(pincode);

    if (!isAvailable) {
      return res
        .status(400)
        .json(
          new ApiResponse(400, "Delivery not available in your area", null)
        );
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, "Delivery available in your area", isAvailable)
      );
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          "Error fetching pincode availability",
          error.message
        )
      );
  }
});

export { isPincodeAvailable };
