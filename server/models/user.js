const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  rol_id: { type: Number, require: true },
  status: { type: Boolean, require: true },
});

module.exports = mongoose.model("User", UserSchema);
