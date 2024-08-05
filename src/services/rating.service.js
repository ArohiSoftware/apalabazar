import Rating from "../models/rating.model.js";
import {findProductById} from "../services/product.js"

async function createRating(reqData,user) {
  // console.log("user hai ", );
  const product = await findProductById(reqData.body.productId);
  const rating = new Rating({
    product: product._id,
    user: user._id,
    rating: reqData.body.rating,
    createdAt: new Date(),
  });
  console.log(rating)
   await rating.save();
   return console.log("Rating Added")
}

async function getProductsRating(productId) {
  return await Rating.find({ product: productId });
}



export {
  createRating,
  getProductsRating,
};
