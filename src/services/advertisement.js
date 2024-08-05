import Advertisements from "../models/advertisements.model.js";
import Product from "../models/product.model.js";


async function createAdvertisement(reqData) {
    
    let product = await Product.findById(reqData.product);
  
    if (!product) {
      throw new Error('Product not found');
    }
  
    
    const advertisement = new Advertisements({
      title: reqData.title,
      description: reqData.description,
      imageUrl: reqData.imageUrl,
      product: product._id,
      startDate: reqData.startDate,
      endDate: reqData.endDate,
      section: reqData.section, 
    });
  
    
    return await advertisement.save();
  
    
  }