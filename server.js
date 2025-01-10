const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Import the database connection
const app = express(); // Initialize the Express application
require("dotenv").config();

app.use(bodyParser.json()); // Middleware to parse JSON request bodies

const PORT = process.env.PORT || 3000;

// Default route for the application
app.get("/", (req, res) => {
  res.send("Welcome to my hotel.");
});

// Import the Router Files

const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

app.use("/person", personRoutes); // Use the Routers
app.use("/menuItem", menuRoutes);

// Start the server on port 3000

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:3000");
});
