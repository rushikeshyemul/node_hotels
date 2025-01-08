const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my hotel. How can i help you ?");
});

app.get("/Rice", (req, res) => {
  res.send("Sure Sir i will provide Rice...");
});

app.get("/Panir", (req, res) => {
  res.send("Panir is Ready sir.");
});

app.listen(3000, () => {
  console.log("Server is Running at localhost:3000");
});
