const User = require("../models/user");

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) => {
  // console.log(req.body);
  const user = new User(req.body);
  await user.save();
  res.json("Usuario creado");
  // console.log(user);
};

userCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

userCtrl.editUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
//   console.log(req.body);

  await User.findByIdAndUpdate(id, { $set: user }, { new: true });
  res.json({status: "Usuario actualizado"})
};

userCtrl.deleteUser = async(req, res) => {
    await User.findByIdAndRemove (req.params.id);
    res.json({status: "Usuario Eliminado"})

};

module.exports = userCtrl;
