// src/controllers/productController.js
// import Product from "../models/Product";

// export const createProduct = (req, res) => {
//   const { name, description, price, category } = req.body;
//   res
//     .status(201)
//     .json({ message: "Product created", name, description, price, category });
// };
import Product from "../models/Product.js";
import Category from "../models/Category.js";
// export const createProduct = async (req, res) => {
//   const { name, description, price, category } = req.body;

//   if (!name || !description || !price || !category) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     // const categoryExists = await Category.findById(category);
//     console.log("Category ID:", category); // Log category ID to check if it's valid
//     const categoryExists = await Category.findById(category);
//     console.log("Category Exists:", categoryExists); // Log result to see if it finds the category
    
//     if (!categoryExists) {
//       return res.status(400).json({ message: "Category not found" });
//     }
//     const product = new Product({
//       name,
//       description,
//       price,
//       category,
//     });

//     // Save the product to MongoDB
//     await product.save();
//     console.log("Product saved:", product); // Add this line to debug

//     // Respond with the saved product
//     res.status(201).json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating product" });
//   }
// };
export const createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Find category by name
    const categoryExists = await Category.findOne({ name: category });

    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    // Now we have the correct ObjectId
    const product = new Product({
      name,
      description,
      price,
      category: categoryExists._id,  // Assign the ObjectId, not the name
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating product" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from MongoDB
    res.status(200).json(products); // Return the list of products in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from the URL parameters

  try {
    const product = await Product.findByIdAndDelete(id); // Find and delete the product

    if (!product) {
      return res.status(404).json({ message: "Product not found" }); // If the product doesn't exist
    }

    res.status(200).json({ message: "Product deleted successfully" }); // Success response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting product" });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from the URL parameters
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Find the product by ID and update it with the new data
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true } // This option ensures the updated document is returned
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Respond with the updated product
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating product" });
  }
};

// Controller for searching and filtering products
export const searchProducts = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query; // Extract query parameters

    // Build the query object
    let filter = {};

    // Search by product name (partial match)
    if (name) {
      filter.name = { $regex: name, $options: "i" }; // Case-insensitive search
    }

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by price range (minPrice and maxPrice)
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    // Log the filter object for debugging
    console.log("Filter:", filter);

    // Fetch the filtered products from the database
    const products = await Product.find(filter); // MongoDB query with the filter

    // Return the filtered products
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};
