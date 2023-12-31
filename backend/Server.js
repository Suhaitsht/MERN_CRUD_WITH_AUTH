const express = require("express");
const env = require("dotenv");
const studentRoute = require("./Routes/StudentReg");

const app = express();
app.use(express.json());
env.config();

app.use("/api/student", studentRoute);

app.listen(process.env.PORT, () => {
  console.log("Server running port is 400!!");
});
