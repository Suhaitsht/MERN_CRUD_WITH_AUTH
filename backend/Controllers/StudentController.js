const { json } = require("express");
const Student = require("../Models/StudentRegister.model");

const StudentCreate = async (req, res) => {
  const { firstname, lastname, address } = req.body;

  if (!firstname || !lastname || !address) {
    return res.status(400).json({ messages: "All fields are required" });
  }

  try {
    const studentDoc = await Student.create({
      firstname,
      lastname,
      address,
    });

    res
      .status(200)
      .json({ messages: "Record inserted successful", studentDoc });
  } catch (error) {
    res.status(400).json({ error: error.messages });
  }
};

const GetallStudent = async (req, res) => {
  try {
    const studentDoc = await Student.find();
    res.status(200).json(studentDoc);
  } catch (error) {
    res.status(400).res.json({ error: error.messages });
  }
};

const GetSingleStudent = async (req, res) => {
  const { id } = req.params;

  const studentDoc = await Student.findById({ _id: id });
  res.status(200).json(studentDoc);
  try {
  } catch (error) {
    res.status(400).json({ error: error.messages });
  }
};
const UpdateSingleStudent = async (req, res) => {
  const { id } = req.params;

  const studentDoc = await Student.findByIdAndUpdate(
    { _id: id },
    { ...req.body }
  );
  res.status(200).json(studentDoc);
  try {
  } catch (error) {
    res.status(400).json({ error: error.messages });
  }
};

const DeleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const studentDoc = await Student.findByIdAndDelete({ _id: id });
    res.status(200).json(studentDoc);
  } catch (error) {
    res.status(400).json({ error: error.messages });
  }
};

module.exports = {
  StudentCreate,
  GetallStudent,
  GetSingleStudent,
  UpdateSingleStudent,
  DeleteStudent,
};
