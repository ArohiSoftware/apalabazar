import Product from '../models/product.model.js';
import Rating from '../models/rating.model.js';
import Review from '../models/review.model.js';
import slugify from 'slugify';
import { uploadImageOnCloudinary } from '../cloud/cloudinary.js';
import fs from 'fs';

// Create product
export const createProduct = async (req, res) => {
  const { 
    title,
    description,
    price,
    discountedPrice,
    discountPercent,
    quantity,
    brand,
    category,
    ratings,
    reviews,
    // FIELDS FOR OFFLINE COUNTER PURCHASES
    BarCode,
    stockType,
    unit,
    purchaseRate,
    profitPercentage,
    HSN,
    GST,
    retailPrice,
    totalAmount,
    amountPaid
    } = req.body;

  // if (!title || !description || !price) {
  //   return res.status(400).send({ message: "Title, description, and price are required", status: false });
  // }

  try {
    let imageUrl = '';
    if (req.file) {
      try {
        const result = await uploadImageOnCloudinary(req.file.path);
        imageUrl = result.secure_url;
        fs.unlinkSync(req.file.path); // Remove the local file after uploading to Cloudinary
      } catch (uploadError) {
        console.error('Error uploading image to Cloudinary:', uploadError);
        return res.status(500).send({ message: "Internal server error", status: false, error: "Error uploading image to Cloudinary" });
      }
    }

    const slug = slugify(title, { lower: true });
    // const product = new Product({
    //   title, description, price, discountedPrice, discountPercent, quantity, brand, imageUrl, category, slug
    // });

    // if (ratings) {
    //   product.ratings = ratings;
    // }

    // if (reviews) {
    //   product.reviews = reviews;
    // }

    // const savedProduct = await product.save();
    const productData = {};
    if (title) productData.title = title;
    if (description) productData.description = description;
    if (price) productData.price = price;
    if (discountedPrice) productData.discountedPrice = discountedPrice;
    if (discountPercent) productData.discountPercent = discountPercent;
    if (quantity) productData.quantity = quantity;
    if (brand) productData.brand = brand;
    if (imageUrl) productData.imageUrl = imageUrl;
    if (category) productData.category = category;
    if (slug) productData.slug = slug;
    if (ratings) productData.ratings = ratings;
    if (reviews) productData.reviews = reviews;
    if (BarCode) productData.BarCode = BarCode;
    if (stockType) productData.stockType = stockType;
    if (unit) productData.unit = unit;
    if (purchaseRate) productData.purchaseRate = purchaseRate;
    if (profitPercentage) productData.profitPercentage = profitPercentage;
    if (HSN) productData.HSN = HSN;
    if (GST) productData.GST = GST;
    if (retailPrice) productData.retailPrice = retailPrice;
    if (totalAmount) productData.totalAmount = totalAmount;
    if (amountPaid) productData.amountPaid = amountPaid;

    const product = new Product(productData);

    const savedProduct = await product.save();

    return res.status(201).send({ message: "Product created successfully", status: true, data: savedProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};

// View single product
export const viewProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch product details including populated ratings and reviews
    const product = await Product.findById(id)
      .populate({
        path: 'ratings',
        populate: {
          path: 'user', // Assuming ratings have a user reference
          select: 'name email' // Adjust fields as necessary
        }
      })
      .populate({
        path: 'reviews',
        populate: {
          path: 'user', // Assuming reviews have a user reference
          select: 'name email' // Adjust fields as necessary
        }
      })
      .populate('category');

    if (!product) {
      return res.status(404).send({ message: "Product not found", status: false });
    }

    return res.status(200).send({ message: "Product retrieved successfully", status: true, data: product });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};

// // Update product
// export const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const { title, description, price, discountedPrice, discountPercent, quantity, brand, category, ratings, reviews } = req.body;

//   if (!title || !description || !price) {
//     return res.status(400).send({ message: "Title, description, and price are required", status: false });
//   }

//   try {
//     let imageUrl = '';
//     if (req.file) {
//       const result = await uploadImageOnCloudinary(req.file.path);
//       imageUrl = result.secure_url;
//       fs.unlinkSync(req.file.path); // Remove the local file after uploading to Cloudinary
//     } else {
//       // Fetch existing product to retain the current image URL
//       const existingProduct = await Product.findById(id);
//       if (!existingProduct) {
//         return res.status(404).send({ message: "Product not found", status: false });
//       }
//       imageUrl = existingProduct.imageUrl; // Retain the existing image URL
//     }

//     const slug = slugify(title, { lower: true });
//     const updatedProduct = await Product.findByIdAndUpdate(
//       id,
//       { title, description, price, discountedPrice, discountPercent, quantity, brand, imageUrl, category, slug },
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).send({ message: "Product not found", status: false });
//     }

//     if (ratings) {
//       updatedProduct.ratings = ratings;
//     }

//     if (reviews) {
//       updatedProduct.reviews = reviews;
//     }

//     await updatedProduct.save();

//     return res.status(200).send({ message: "Product updated successfully", status: true, data: updatedProduct });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
//   }
// };
// Update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    price,
    discountedPrice,
    discountPercent,
    quantity,
    brand,
    category,
    ratings,
    reviews,
    // FIELDS FOR OFFLINE COUNTER PURCHASES
    BarCode,
    stockType,
    unit,
    purchaseRate,
    profitPercentage,
    HSN,
    GST,
    retailPrice,
    totalAmount,
    amountPaid
  } = req.body;

  // if (!title || !description || !price) {
  //   return res.status(400).send({ message: "Title, description, and price are required", status: false });
  // }

  try {
    let imageUrl = '';
    if (req.file) {
      try {
        const result = await uploadImageOnCloudinary(req.file.path);
        imageUrl = result.secure_url;
        fs.unlinkSync(req.file.path); // Remove the local file after uploading to Cloudinary
      } catch (uploadError) {
        console.error('Error uploading image to Cloudinary:', uploadError);
        return res.status(500).send({ message: "Internal server error", status: false, error: "Error uploading image to Cloudinary" });
      }
    } else {
      // Fetch existing product to retain the current image URL
      const existingProduct = await Product.findById(id);
      if (!existingProduct) {
        return res.status(404).send({ message: "Product not found", status: false });
      }
      imageUrl = existingProduct.imageUrl; // Retain the existing image URL
    }
    
    if (title){
      const slug = slugify(title, { lower: true });
    }

    const updatedProductData = {};
    if (title) updatedProductData.title = title;
    if (description) updatedProductData.description = description;
    if (price) updatedProductData.price = price;
    if (discountedPrice) updatedProductData.discountedPrice = discountedPrice;
    if (discountPercent) updatedProductData.discountPercent = discountPercent;
    if (quantity) updatedProductData.quantity = quantity;
    if (brand) updatedProductData.brand = brand;
    if (imageUrl) updatedProductData.imageUrl = imageUrl;
    if (category) updatedProductData.category = category;
    if (slug) updatedProductData.slug = slug;
    if (ratings) updatedProductData.ratings = ratings;
    if (reviews) updatedProductData.reviews = reviews;
    if (BarCode) updatedProductData.BarCode = BarCode;
    if (stockType) updatedProductData.stockType = stockType;
    if (unit) updatedProductData.unit = unit;
    if (purchaseRate) updatedProductData.purchaseRate = purchaseRate;
    if (profitPercentage) updatedProductData.profitPercentage = profitPercentage;
    if (HSN) updatedProductData.HSN = HSN;
    if (GST) updatedProductData.GST = GST;
    if (retailPrice) updatedProductData.retailPrice = retailPrice;
    if (totalAmount) updatedProductData.totalAmount = totalAmount;
    if (amountPaid) updatedProductData.amountPaid = amountPaid;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send({ message: "Product not found", status: false });
    }

    return res.status(200).send({ message: "Product updated successfully", status: true, data: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send({ message: "Product not found", status: false });
    }

    await Rating.deleteMany({ product: id });
    await Review.deleteMany({ product: id });

    return res.status(200).send({ message: "Product deleted successfully", status: true, data: deletedProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};

// View all products
export const viewProducts = async (req, res) => {
  try {
    const products = await Product.find()
    .populate('category')
    .populate('ratings')
    .populate('reviews'); 
    return res.status(200).send({ message: "Products retrieved successfully", status: true, data: products });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};
