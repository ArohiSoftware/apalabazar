import Category from "../models/category.model.js";
import Product from "../models/product.model.js";


// Create a new product
async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.category });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentId: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentId: topLevel._id,
      level: 2,
    });
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentId: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentId: secondLevel._id,
      level: 3,
    });
  }

  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    price: reqData.price,
    discountedPrice: reqData.discountedPrice,
    discountPersent: reqData.discountPersent,
    quantity: reqData.quantity,
    brand: reqData.brand,
    ratings: reqData.ratings,
    reviews: reqData.reviews,
    numRatings: reqData.numRatings,
    category: thirdLevel._id,
    createdAt: reqData.createdAt,
    updatedAt: reqData.updatedAt,
  });

  return await product.save();
}
// Delete a product by ID
async function deleteProduct(productId) {
  const product = await findProductById(productId);

  if (!product) {
    throw new Error("product not found with id - : ", productId);
  }

  await Product.findByIdAndDelete(productId);

  return "Product deleted Successfully";
}

// Update a product by ID
async function updateProduct(productId, reqData) {
  const updatedProduct = await Product.findByIdAndUpdate(productId, reqData);
  return updatedProduct;
}

// Find a product by ID
async function findProductById(id) {
  console.log(id)
  const product = await Product.findById(id);
  

  if (!product) {
    throw new Error("Product not found with id " + id);
  }
  return product;
}

// Get all products with filtering and pagination
// async function getAllProducts(reqQuery) {
//   let {
//     search,
//     category,
//     color,
//     sizes,
//     minPrice,
//     maxPrice,
//     minDiscount,
//     sort,
//     stock,
//     pageNumber,
//     pageSize,
//   } = reqQuery;
//   (pageSize = pageSize || 10), (pageNumber = pageNumber || 1);
//   let query = Product.find();
//   // .populate("category");


//   if (category) {
//     const existCategory = await Category.findOne({ name: category });
//     if (existCategory)
//       query = query.where("category").equals(existCategory._id);
//     else return { content: [], currentPage: 1, totalPages:1 };
//   }

//   if (color) {
//     const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
//     const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
//     query = query.where("color").regex(colorRegex);
//     // query = query.where("color").in([...colorSet]);
//   }

//   if (sizes) {
//     const sizesSet = new Set(sizes);
    
//     query = query.where("sizes.name").in([...sizesSet]);
//   }

//   if (minPrice && maxPrice) {
//     query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
//   }

//   if (minDiscount) {
//     query = query.where("discountPersent").gt(minDiscount);
//   }

//   if (stock) {
//     if (stock === "in_stock") {
//       query = query.where("quantity").gt(0);
//     } else if (stock === "out_of_stock") {
//       query = query.where("quantity").lte(0);
//     }
//   }

//   if (sort) {
//     const sortDirection = sort === "price_high" ? -1 : 1;
//     query = query.sort({ discountedPrice: sortDirection });
//   }

//   // Apply pagination
//   const totalProducts = await Product.countDocuments(query);

//   const skip = (pageNumber - 1) * pageSize;

//   query = query.skip(skip).limit(pageSize);

//   const products = await query.exec();

//   const totalPages = Math.ceil(totalProducts / pageSize);


//   return { content: products, currentPage: pageNumber, totalPages:totalPages };
// }

// async function createMultipleProduct(products) {
//   for (let product of products) {
//     await createProduct(product);
//   }
// }
// export {
//   createProduct,
//   deleteProduct,
//   updateProduct,
//   getAllProducts,
//   findProductById,
//   createMultipleProduct,
// };


async function getAllProducts(reqQuery) {

  let {
    search,
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;
console.log(minPrice)

  (pageSize = pageSize || 10), (pageNumber = pageNumber || 1);
  let query = Product.find();
  // .populate("category");

  // Search by product name
  if (search) {
    const searchRegex = new RegExp(search, "i"); // 'i' for case-insensitive
    query = query.where("name").regex(searchRegex);
  }

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory)
      query = query.where("category").equals(existCategory._id);
    else return { content: [], currentPage: 1, totalPages: 1 };
  }

  if (color) {
    const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
    const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query = query.where("color").regex(colorRegex);
    // query = query.where("color").in([...colorSet]);
  }

  if (sizes) {
    const sizesSet = new Set(sizes);
    query = query.where("sizes.name").in([...sizesSet]);
  }

  if (minPrice && maxPrice) {
    query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }

  if (minDiscount) {
    query = query.where("discountPersent").gt(minDiscount);
  }

  if (stock) {
    if (stock === "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock === "out_of_stock") {
      query = query.where("quantity").lte(0);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }

  // Apply pagination
  const totalProducts = await Product.countDocuments(query);

  const skip = (pageNumber - 1) * pageSize;

  query = query.skip(skip).limit(pageSize);

  const products = await query.exec();

  const totalPages = Math.ceil(totalProducts / pageSize);

  return { content: products, currentPage: pageNumber, totalPages: totalPages };
}

async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

export {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct,
};