import Product from "../models/Product.js";

/**
 * Get all products with optional filtering by category, price range, and stock status
 */
const getAllProducts = async (filters = {}) => {
  let query = {};

  if (filters.category) {
    query.category = filters.category;
  }

  if (filters.price_min || filters.price_max) {
    query.price = {};
    if (filters.price_min) query.price.$gte = parseFloat(filters.price_min);
    if (filters.price_max) query.price.$lte = parseFloat(filters.price_max);
  }

  if (filters.in_stock !== undefined) {
    query.stock = filters.in_stock === "true" ? { $gt: 0 } : 0;
  }

  return await Product.find(query);
};

const searchProducts = async (query) => {
  return await Product.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
    ],
  });
};

/**
 * Get a single product by ID
 */
const getProductById = async (id) => {
  return await Product.findById(id);
};

/**
 * Create a new product
 */
const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

/**
 * Update a product by ID
 */
const updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

/**
 * Delete a product by ID
 */
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

/**
 * Get low stock products (e.g., products with stock less than 5)
 */
const getLowStockProducts = async () => {
  return await Product.find({ "variants.stock": { $lt: 5 } });
};

// Named exports
export {
  getAllProducts,
  searchProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
};
