// import mongoose from "mongoose";

// const variantSchema = new mongoose.Schema({
//   // size: String,
//   // color: String,
//   // stock: Number,
//   size: String,
//   color: String,
//   stock: Number,
//   material: String, // Optional field
//   sku: { type: String, unique: true }, // Unique SKU per variant
//   images: [String],
// });

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   categoryId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Category",
//     required: true,
//   },
//   variants: [variantSchema],
//   discount: {
//     type: Number,
//     default: 0,
//   },
//   // stock: { type: Number, default: 0 },

//   stock: {
//     type: Number,
//     default: 0,
//     get: function () {
//       // You can calculate the total stock dynamically by summing variant stock.
//       return this.variants.reduce((total, variant) => total + variant.stock, 0);
//     },
//   },
// });

// const Product = mongoose.model("Product", productSchema);

// export default Product;
import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  size: String,
  color: String,
  stock: Number,
  material: String,  // Optional
  sku: { type: String, unique: true },  // Optional
  images: [String],  // Optional
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  variants: [variantSchema],
  discount: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
    get: function() {
      // Calculate the stock dynamically if not set
      return this.variants.reduce((total, variant) => total + variant.stock, 0);
    },
  },
});

// Ensure stock is recalculated before saving
productSchema.pre('save', function(next) {
  if (this.isNew || this.isModified('variants')) {
    this.stock = this.variants.reduce((total, variant) => total + variant.stock, 0);
  }
  next();
});

productSchema.index({ name: 1 });
productSchema.index({ categoryId: 1 });

const Product = mongoose.model("Product", productSchema);

export default Product;
