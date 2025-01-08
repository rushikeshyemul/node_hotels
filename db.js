const mongoose = require("mongoose"); // IT IS JUST LIKE IMPORT STATEMENT

// MongoDB URL

const mongoURL = "mongodb://localhost:27017/hotels"; // "after the / slash you can add your db Name"

// setup MongoDB Connection

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose maintains a default connection object representing the MongoDB connection

const db = mongoose.connection; // This object is used for interaction

// Defining the event listeners for database connections

db.on("connected", () => {
  //   alert("Connected To MongoDB Server");
  console.log("Connected To MongoDB Server");
});

db.on("error", (err) => {
  //   alert("Connected To MongoDB Server");
  console.log("Connection Error:", err);
});

db.on("disconnected", () => {
  //   alert("Connected To MongoDB Server");
  console.log("MongoDB Disconnected");
});

// Export the Database Connection

module.exports = db;
