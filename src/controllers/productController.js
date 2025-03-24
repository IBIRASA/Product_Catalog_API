import {
  getAllProducts as _getAllProducts,
  getProductById as _getProductById,
  createProduct as _createProduct,
  updateProduct as _updateProduct,
  deleteProduct as _deleteProduct,
  searchProducts as _searchProducts,
  getLowStockProducts as _getLowStockProducts,
} from "../services/productService.js";

/**
 * Get all products with optional filtering by category, price range, and stock status
 */
const getAllProducts = async (req, res) => {
  try {
    const filters = req.query; // Extract filters from query params
    const products = await _getAllProducts(filters);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    console.log("Search Query:", query); // Ensure the query is being received correctly

    if (!query || typeof query !== "string") {
      return res
        .status(400)
        .json({ message: "Valid search query is required" });
    }

    const products = await _searchProducts(query);
    console.log("Found Products:", products); // Log the found products

    res.json(products);
  } catch (error) {
    console.error("Error:", error.message); // Log any error
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get a single product by ID
 */
const getProductById = async (req, res) => {
  try {
    const product = await _getProductById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Create a new product
 */
const createProduct = async (req, res) => {
  try {
    const newProduct = await _createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Update a product by ID
 */
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await _updateProduct(req.params.id, req.body);
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Delete a product by ID
 */
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await _deleteProduct(req.params.id);
    if (deletedProduct) {
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get low stock products for inventory tracking
 */

const getLowStockProducts = async (req, res) => {
  try {
    const lowStockProducts = await _getLowStockProducts();
    res.status(200).json(lowStockProducts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching low stock products." });
  }
};

// Update product stock
const updateStock = async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;

  if (typeof stock !== "number" || stock < 0) {
    return res.status(400).json({ message: "Invalid stock value." });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { stock },
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found." });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Error updating stock." });
  }
};
export {
  getAllProducts,
  searchProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
  updateStock,
};
