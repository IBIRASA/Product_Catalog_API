import express from "express";
// import {
//   createProduct,
//   getAllProducts,
// } from "../controllers/productController.js"; // Ensure this path is correct
import {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  searchProducts,
} from "../controllers/productController.js";
const router = express.Router();
router.post("/", createProduct);
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/search", searchProducts);
export default router;
