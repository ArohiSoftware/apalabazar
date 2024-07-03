import Product from '../models/product.model.js';
import Rating from '../models/rating.model.js';
import Review from '../models/review.model.js';
import slugify from 'slugify';
import { uploadImageOnCloudinary } from '../cloud/cloudinary.js';
import fs from 'fs';

// Create product
export const createProduct = async (req, res) => {
  const { title, description, price, discountedPrice, discountPercent, quantity, brand, category, ratings, reviews } = req.body;

  if (!title || !description || !price) {
    return res.status(400).send({ message: "Title, description, and price are required", status: false });
  }

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
    const product = new Product({
      title, description, price, discountedPrice, discountPercent, quantity, brand, imageUrl, category, slug
    });

    if (ratings) {
      product.ratings = ratings;
    }

    if (reviews) {
      product.reviews = reviews;
    }

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
    const product = await Product.findById(id).populate('category ratings reviews');
    if (!product) {
      return res.status(404).send({ message: "Product not found", status: false });
    }

    return res.status(200).send({ message: "Product retrieved successfully", status: true, data: product });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error", status: false });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, discountedPrice, discountPercent, quantity, brand, category, ratings, reviews } = req.body;

  if (!title || !description || !price) {
    return res.status(400).send({ message: "Title, description, and price are required", status: false });
  }

  try {
    let imageUrl = '';
    if (req.file) {
      const result = await uploadImageOnCloudinary(req.file.path);
      imageUrl = result.secure_url;
      fs.unlinkSync(req.file.path); // Remove the local file after uploading to Cloudinary
    }

    const slug = slugify(title, { lower: true });
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { title, description, price, discountedPrice, discountPercent, quantity, brand, imageUrl, category, slug },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send({ message: "Product not found", status: false });
    }

    if (ratings) {
      updatedProduct.ratings = ratings;
    }

    if (reviews) {
      updatedProduct.reviews = reviews;
    }

    await updatedProduct.save();

    return res.status(200).send({ message: "Product updated successfully", status: true, data: updatedProduct });
  } catch (error) {
    console.error(error);
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
    const products = await Product.find().populate('category ratings reviews');
    return res.status(200).send({ message: "Products retrieved successfully", status: true, data: products });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};
