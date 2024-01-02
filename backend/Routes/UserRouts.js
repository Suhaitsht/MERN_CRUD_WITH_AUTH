const express = require("express");

const { UserSignup, UserLogin } = require("../Controllers/UserController");

const router = express.Router();

router.post("/signup", UserSignup);

router.post("/login", UserLogin);

module.exports = router;
