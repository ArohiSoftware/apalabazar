
import Cart from "../models/cart.model.js";
import CartItem from "../models/cartItem.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const addToCart = asyncHandler(async (req, res) => {
    const { id } = req.user; 
    const { productId } = req.body; 

    const user = await User.findById(id); 

    if (!user) {
        return res.status(401).json(new ApiResponse(401, 'User not found', null)); 
    }

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json(new ApiResponse(404, 'Product not found', null)); 
        }

        
        let cartItem = await CartItem.findOne({ userId: id, product: productId });

        if (cartItem) {
            
            cartItem.quantity += 1;
            cartItem.price += product.price;
            cartItem.discountedPrice += product.discountedPrice;
            cartItem.updatedAt = new Date();
            await cartItem.save();
        } else {
           
            cartItem = await CartItem.create({
                quantity: 1,
                price: product.price,
                discountedPrice: product.discountedPrice,
                userId: id,
                product: product._id,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

        let cart = await Cart.findOne({ user: id });
        console.log(cart);
        if (!cart) {
            cart = await Cart.create({
                user: id,
                cartItems: [cartItem._id],
                totalPrice: cartItem.price,
                totalItem: 1,
                totalDiscountedPrice: cartItem.discountedPrice,
                discount: cartItem.price - cartItem.discountedPrice,
            });
        } else {
            if (!cart.cartItems.includes(cartItem._id)) {
                cart.cartItems.push(cartItem._id);
                cart.totalItem += 1;
            }
            cart.totalPrice += product.price;
            cart.totalDiscountedPrice += product.discountedPrice;
            cart.discount += (product.price - product.discountedPrice);
            await cart.save();
        }
    const imagesUrl = product.imageUrl;
        return res.status(200).json(new ApiResponse(200, 'Product added to cart successfully', cartItem,cart)); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message }); 
    }
});


const getCartDetails = asyncHandler(async (req, res) => {
    const { id } = req.user;

    if (!id) {
        return res.status(401).json(new ApiResponse(401, 'User ID not provided in cookies', null));
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(401).json(new ApiResponse(401, 'User not found', null));
    }

    try {
        const cart = await Cart.findOne({ user: id }).populate({
            path: 'cartItems',
            populate: {
                path: 'product',
                model: 'products'
            }
        });

        if (!cart) {
            return res.status(404).json(new ApiResponse(404, 'Cart is empty for this user', null));
        }

        return res.status(200).json(new ApiResponse(200, 'Cart retrieved successfully', cart));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiResponse(500, error.message, null));
    }
});

const getCartItemsById = asyncHandler(async (req, res) => {
    const { id } = req.user; 
    console.log(id);
    const { productId } = req.query;

    console.log("productId => ", productId);

    const user = await User.findById(id);

    if (!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found'));
    }

    try {
        const cart = await CartItem.findOne({ product: productId, userId: id });

        if (!cart) {
            return res
                .status(404)
                .json(new ApiResponse(404, 'Cart item not found', null));
        }

        return res
            .status(200)
            .json(new ApiResponse(200, 'Cart item retrieved successfully', cart));
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});
    
const removeOneCart = asyncHandler(async (req, res) => {
    const { id } = req.user; 
    const { itemId } = req.query;
    console.log(itemId);
    const user = await User.findById(id);

    if (!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found'));
    }

    try {
        const cartItem = await CartItem.findById({ _id: itemId });

        if (!cartItem) {
            return res
                .status(404)
                .json(new ApiResponse(404, 'Cart item not found', null));
        }
        else{
            if (cartItem.userId.toString() !== id) {
                return res.status(403).json(new ApiResponse(403, 'Unauthorized to delete this cart item', null));
            }
        
        }

        let cart = await Cart.findOne({ user: id });
        const cartItemExists = cart.cartItems.some(item => item.toString() === cartItem._id.toString());
        if (cartItem.quantity>0 && cartItemExists) { 
            cart.cartItems.pull(cartItem._id);
            cart.totalPrice -= cartItem.price;
            cart.totalItem -= 1;
            cart.totalDiscountedPrice -= cartItem.discountedPrice;
            cart.discount -= (cartItem.price - cartItem.discountedPrice);
            await cart.save();
            await CartItem.findByIdAndRemove({ _id: itemId });
        }

        return res 
            .status(200)
            .json(new ApiResponse(200, 'Cart item deleted successfully', cartItem));
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

const removeAllCart = asyncHandler(async (req, res) => {
    const { id } = req.user; 

    const user = await User.findById(id);
    if (!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found'));
    }

    try {
        const cart = await Cart.findOne({ user: id });
        if (!cart) {
            return res
                .status(404)
                .json(new ApiResponse(404, 'Cart not found'));
        }

        await CartItem.deleteMany({ _id: { $in: cart.cartItems } });
        await  Cart.findOneAndRemove({ user: id });

        return res
            .status(200)
            .json(new ApiResponse(200, 'Cart deleted successfully'));
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});



const removeItemQuantityCart = asyncHandler(async (req, res) => {
    const { id } = req.user; 
    const { itemId } = req.query;

     console.log(itemId);
    const user = await User.findById(id);

    if (!user) {
        return res
            .status(401)
            .json(new ApiError(401, 'User not found'));
    }

    try {
        const cartItem = await CartItem.findById({ _id: itemId });

        if (!cartItem) {
            return res
                .status(404)
                .json(new ApiResponse(404, 'Cart item not found', null));
        }
        else{
            if (cartItem.userId.toString() !== id) {
                return res.status(403).json(new ApiResponse(403, 'Unauthorized to delete this cart item', null));
            }
        
        }
         const productId =   cartItem.product
         const product= await Product.findById({ _id: productId});
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            cartItem.price -= product.price;
            cartItem.discountedPrice -= product.discountedPrice;
            cartItem.updatedAt = new Date();
            await cartItem.save();

            let cart = await Cart.findOne({ user: id });
            const cartItemExists = cart.cartItems.some(item => item.toString() === cartItem._id.toString());
            if (cart && cartItemExists) {
                cart.totalPrice -= product.price;
                cart.totalDiscountedPrice -= product.discountedPrice;
                cart.discount -= (product.price - product.discountedPrice);
                await cart.save();
            }

            return res.status(200).json(new ApiResponse(200, 'Cart item quantity decreased successfully', cartItem));
        } else {
            return res.status(400).json(new ApiResponse(400, 'Minimum quantity reached for this item', null));
        } 
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});




export {
    addToCart,
    getCartDetails,
    getCartItemsById,
    removeOneCart,
    removeAllCart,
    removeItemQuantityCart,
}
