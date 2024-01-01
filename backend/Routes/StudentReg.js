const express = require("express");
const {
  StudentCreate,
  GetallStudent,
  GetSingleStudent,
  UpdateSingleStudent,
  DeleteStudent,
} = require("../Controllers/StudentController");

const router = express.Router();

// create a student data
router.post("/", StudentCreate);

// get all student data
router.get("/", GetallStudent);

// get single data
router.get("/:id", GetSingleStudent);

// update single data
router.put("/:id", UpdateSingleStudent);

// delete a student data
router.delete("/:id", DeleteStudent);

module.exports = router;
