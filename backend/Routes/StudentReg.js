const express = require("express");

const router = express.Router();

// get all student data
router.get("/", (req, res) => {
  res.status(200).json({ messages: "get routes all works" });
});

// get single data
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ messages: id });
});

// delete a student data
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ messages: id });
});

// create a student data
router.post("/", (req, res) => {
  res.status(200).json({ messages: "this messages from post " });
});

module.exports = router;
