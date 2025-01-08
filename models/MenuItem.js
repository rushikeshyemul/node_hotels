const mongoose = require("mongoose");

// Define the schema for menu items
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: [true, "Taste is required"],
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
    min: [0, "Number of sales cannot be negative"],
  },
});

// Create the Mongoose model for menu items
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
