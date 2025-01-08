const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem"); // Mongoose model for MenuItem

// POST route to add a new menu item to the database
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Extract data from the request body
    const newMenu = new MenuItem(data); // Create a new MenuItem document
    const response = await newMenu.save(); // Save the MenuItem document to the database
    console.log("Menu item data saved successfully");
    res.status(200).json(response); // Send the saved menu item data as a response
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Send error response
  }
});

// GET route to retrieve all menu items from the database
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find(); // Fetch all MenuItem documents
    console.log("Menu item data fetched successfully");
    res.status(200).json(data); // Send the fetched data as a response
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Send error response
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste === "sweet" || taste === "spicy" || taste === "sour") {
      const response = await MenuItem.find(taste);
      console.log("Response Fetched");
      res.status(200).json(response); // Use 200 status code for successful responses
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// EXPORTING FILE

module.exports = router;
