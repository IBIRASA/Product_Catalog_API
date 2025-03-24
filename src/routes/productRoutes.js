import { Router } from "express";
import {
  getAllProducts,
  searchProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
  updateStock,
} from "../controllers/productController.js";

const router = Router();

router.get("/products", getAllProducts); // Get all products (with optional filters)
router.get("/products/search", searchProducts); // Search products
router.get("/products/low-stock", getLowStockProducts); // Get low-stock products
router.get("/products/:id/update-stock", updateStock); // Get low-stock products

router.get("/products/:id", getProductById); // Get a single product by ID
router.post("/products", createProduct); // Create a new product
router.put("/products/:id", updateProduct); // Update a product
router.delete("/products/:id", deleteProduct); // Delete a product

export default router;
