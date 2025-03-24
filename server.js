import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./src/db/connect.js";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to start server: ${error.message}`);
  });
