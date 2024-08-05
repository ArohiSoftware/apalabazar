import mongoose from 'mongoose';
import Advertisements from '../models/advertisements.model.js'; 
import Product from '../models/product.model.js';
import { uploadImageOnCloudinary } from '../cloud/cloudinary.js';
import fs from 'fs';

// This function will create advertisement
export const createAdvertisement = async (req, res) => {
  const { title, description,imageUrl: bodyImageUrl, product, startDate, endDate, section } = req.body;
  console.log("this is createAdvertisement");
  // if (!title || !product || !startDate || !imageUrl || !endDate || !section) {
  //   return res.status(400).send({ message: "Title, product, start date, end date, and section are required", status: false });
  // }
  
  try {
      let imageUrl = bodyImageUrl;
      if (req.file) {
        try {
          const result = await uploadImageOnCloudinary(req.file.path);
          imageUrl = result.secure_url;
          fs.unlinkSync(req.file.path); 
        } catch (uploadError) {
          console.error('Error uploading image to Cloudinary:', uploadError);
          return res.status(500).send({ message: "Internal server error", status: false, error: "Error uploading image to Cloudinary" });
        }
      }
    

    const advertisement = new Advertisements({
      title,
      description,
      imageUrl,
      product,
      startDate,
      endDate,
      section
    });

    const savedAdvertisement = await advertisement.save();

    return res.status(201).send({ message: "Advertisement created successfully", status: true, data: savedAdvertisement });
  } catch (error) {
    console.error('Error creating advertisement:', error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};

// This fucntion will get all advertisements
export const getallAdvertisements = async (req, res) => {
    try {
      const advertisements = await Advertisements.find()
        .populate({
          path: 'product',
          model: Product,
          select: 'title price description brand imageUrl price discountedPrice discountedPrice quantity' // Adjust fields as necessary
        }).exec();
  
      return res.status(200).send({ message: "Advertisements retrieved successfully", status: true, data: advertisements });
    } catch (error) {
      console.error('Error retrieving advertisements:', error);
      return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
  };


// This Function will query db for a advertisement by taking an id
export const getAdvertisement = async (req, res) => {
  const { id } = req.params;

  try {
    const advertisement = await Advertisements.findById(id)
      .populate({
        path: 'product',
        model: Product,
        select: 'title price'
      });

    if (!advertisement) {
      return res.status(404).send({ message: "Advertisement not found", status: false });
    }

    return res.status(200).send({ message: "Advertisement retrieved successfully", status: true, data: advertisement });
  } catch (error) {
    console.error('Error retrieving advertisement:', error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};



// To update an advertisement
export const updateAdvertisement = async (req, res) => {
  console.log("we are in update");
  const { id } = req.params;
  const { title, description, product, startDate, endDate, section, active } = req.body;

  if (!title && !product && !startDate && !endDate && !section && !description && active === undefined && !req.file) {
    return res.status(400).send({ message: "At least one field is required to update", status: false });
  }

  try {
    let imageUrl = '';
    if (req.file) {
      const result = await uploadImageOnCloudinary(req.file.path);
      imageUrl = result.secure_url;
      fs.unlinkSync(req.file.path);
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (product) updateData.product = product;
    if (startDate) updateData.startDate = startDate;
    if (endDate) updateData.endDate = endDate;
    if (section) updateData.section = section;
    if (active !== undefined) updateData.active = active;
    if (imageUrl) updateData.imageUrl = imageUrl;

    const updatedAdvertisement = await Advertisements.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    console.log("we are in update");


    if (!updatedAdvertisement) {
      return res.status(404).send({ message: "Advertisement not found", status: false });
    }

    return res.status(200).send({ message: "Advertisement updated successfully", status: true, data: updatedAdvertisement });
  } catch (error) {
    console.error('Error updating advertisement:', error);
    return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
  }
};

// This one is to delete advertisement by taking id
export const deleteAdvertisement = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedAdvertisement = await Advertisements.findByIdAndDelete(id);
  
      if (!deletedAdvertisement) {
        return res.status(404).send({ message: "Advertisement not found", status: false });
      }
  
      return res.status(200).send({ message: "Advertisement deleted successfully", status: true, data: deletedAdvertisement });
    } catch (error) {
      console.error('Error deleting advertisement:', error);
      return res.status(500).send({ message: "Internal server error", status: false, error: error.message });
    }
  };



