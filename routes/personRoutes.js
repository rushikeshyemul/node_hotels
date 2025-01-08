const express = require("express");
const router = express.Router();
const Person = require("../models/Person"); // Mongoose model for Person
const { message } = require("prompt");

// POST route to add a new person to the database

router.post("/", async (req, res) => {
  try {
    const data = req.body; // Extract data from the request body
    const newPerson = new Person(data); // Create a new Person document
    const response = await newPerson.save(); // Save the Person document to the database
    console.log("Person data saved successfully");
    res.status(200).json(response); // Send the saved person data as a response
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Send error response
  }
});

// GET route to retrieve all persons from the database

router.get("/", async (req, res) => {
  try {
    const data = await Person.find(); // Fetch all Person documents
    console.log("Person data fetched successfully");
    res.status(200).json(data); // Send the fetched data as a response
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Send error response
  }
});

// SUBHEADINGS

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const response = await Person.find({ work: workType });
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

// Updating the User Details

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // Return the Updated Document
        runValidators: true, // Run mongoose Validation
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }

    console.log("Data Updated");

    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Deleting the User Details

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("Data Deleted");

    res.status(200).json({ message: "Person Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// EXPORTING FILE

module.exports = router;
