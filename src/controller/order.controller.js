import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Cart from "../models/cart.model.js";
import Order from "../models/order.model.js";
import OrderItem from "../models/orderItems.js";
import CartItem from "../models/cartItem.model.js";

const placeOrder = asyncHandler(async (req, res) => {
  const { id } = req.user;

  const cart = await Cart.findOne({ user: id }).populate("cartItems");

  if (!cart) {
    return res.status(404).json(new ApiResponse(404, "Cart not found", null));
  }

  // pincode availability check
  // Uncomment the below code to check if the delivery is available in the user's area
  // const isAvailable = await isPinCodeAvailable(req.body.pincode);

  // if (!isAvailable) {
  //   return res
  //     .status(400)
  //     .json(new ApiResponse(400, "Delivery not available in your area", null));
  // }

  try {
    const orderItems = [];
    for (const cartItem of cart.cartItems) {
      const orderItem = new OrderItem({
        product: cartItem.product,
        quantity: cartItem.quantity,
        price: cartItem.price,
        discountedPrice: cartItem.discountedPrice,
        userId: id,
      });
      await orderItem.save();
      orderItems.push(orderItem._id);
    }

    const order = new Order({
      user: id,
      orderItems: orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      totalItem: cart.totalItem,
      discount: cart.discount,
      GST: 0.18 * cart.totalPrice,
      shippingAddress: req.body.shippingAddress,
      paymentDetails: req.body.paymentDetails,
    });

    await order.save();

    await CartItem.deleteMany({
      _id: { $in: cart.cartItems.map((item) => item._id) },
    });
    await Cart.findByIdAndDelete(cart._id);

    return res
      .status(200)
      .json(new ApiResponse(200, "Order placed successfully", order));
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiResponse(500, "Error placing order", error.message));
  }
});

const getAllOrders = asyncHandler(async (req, res) => {
  const { id } = req.user;
  try {
    const orders = await Order.find({ user: id }).populate({
      path: "orderItems",
      populate: {
        path: "product",
        model: "products",
      },
    });

    if (!orders) {
      return res
        .status(404)
        .json(new ApiResponse(404, "No orders found", null));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Orders fetched successfully", orders));
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiResponse(500, "Error fetching orders", error.message));
  }
});

const cancelOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.body;

  const order = await Order.findById(orderId);

  if (!order) {
    return res.status(404).json(new ApiResponse(404, "Order not found", null));
  }

  if (order.orderStatus === "CANCELLED") {
    return res
      .status(400)
      .json(new ApiResponse(400, "Order is already cancelled", null));
  }

  order.orderStatus = "CANCELLED";
  await order.save();

  // Optional: Handle any related operations like refunding the payment, updating stock, or notifying the user
  // Example: Refund the payment
  // if (order.paymentDetails.paymentStatus === "PAID") {
  //     await refundPayment(order.paymentDetails.transactionId);
  // }

  return res
    .status(200)
    .json(new ApiResponse(200, "Order cancelled successfully", order));
});

export { cancelOrder, placeOrder, getAllOrders };
