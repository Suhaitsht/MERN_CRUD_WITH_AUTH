const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StudentSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      require: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("student", StudentSchema);
