const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const studentRoute = require("./Routes/StudentReg");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
env.config();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/student", studentRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running port is ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   return res.status(statusCode).json({
//     success: false,
//     message,
//     statusCode,
//   });
// });
