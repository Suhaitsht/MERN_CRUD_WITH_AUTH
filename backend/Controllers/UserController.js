const userDoc = require("../Models/UserModelsRL");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SCRECT, { expiresIn: "2d" });
};

const UserSignup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ err: "All Fields are required " });
    return false;
  }

  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);

  try {
    const NewUser = await userDoc.create({ username, password: hashpassword });
    res
      .status(200)
      .json({ messages: "User Account Created Scuessfuly", NewUser });
  } catch (error) {
    res.status(400).json({ error: error.messages });
  }
};

const UserLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ err: "All fields are required" });
    return false;
  }

  try {
    const user = await userDoc.findOne({ username });

    if (!user) {
      res.status(400).json({ err: "Invalid username" });
      return false;
    }

    const match = bcrypt.compareSync(password, user.password);

    if (!match) {
      res.status(400).json({ err: "invalid password" });
      return false;
    }

    const token = createToken(user._id);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  UserSignup,
  UserLogin,
};
