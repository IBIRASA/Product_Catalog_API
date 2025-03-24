import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./src/routes/productRoutes.js";
import errorHandler from "./src/utils/errorHandler.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import authRoutes from './src/routes/authRoutes.js';
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api/auth", authRoutes);

// Error handling
app.use(errorHandler);

export default app;
