const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoleSchema = new Schema({
  name: { type: String, require: true },
  level: { type: Number, require: true },
});

module.exports = mongoose.model("Role", RoleSchema);
