const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = process.env.MONGODB_URL_LOCAL; // IT IS LOCAL URL
const mongoURL = process.env.MONGODB_URL; // IT IS Online URL (Atlas)

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }); // setup MongoDB Connection

const db = mongoose.connection; // This object is used for interaction

// Defining the event listeners for database connections

db.on("connected", () => {
  console.log("Connected To MongoDB Server");
});

db.on("error", (err) => {
  console.log("Connection Error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

// Export the Database Connection

module.exports = db;
