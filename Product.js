const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      unique: true,
      trim: true
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"]
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock cannot be negative"]
    },
    description: {
      type: String,
      default: "No description available"
    },
    inStock: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", productSchema);
