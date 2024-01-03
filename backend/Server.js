const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const studentRoute = require("./Routes/StudentReg");
const authRouter = require("./Routes/UserRouts");
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
  next();
});

app.use("/api/student", studentRoute);
app.use("/api/auth", authRouter);

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
