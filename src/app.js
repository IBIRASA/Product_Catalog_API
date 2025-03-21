import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import dotenv from "dotenv"; // Import dotenv
import productRoutes from "./routes/productRoutes.js"; // Ensure the path is correct
import categoryRoutes from "./routes/categoryRoutes.js"; // Example for categories, adjust as needed

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.use(express.json());
// Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
