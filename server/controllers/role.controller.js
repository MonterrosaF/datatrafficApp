const Role = require("../models/role");

const roleCtrl = {};

roleCtrl.getRoles = async (req, res) => {
  const roles = await Role.find();
  res.json(roles);
};

roleCtrl.createRole = async (req, res) => {
  // console.log(req.body);
  const role = new Role(req.body);
  await role.save();
  res.json("Rol creado");
  // console.log(role);
};

roleCtrl.getRole = async (req, res) => {
  const role = await Role.findById(req.params.id);
  res.json(role);
};

roleCtrl.editRole = async (req, res) => {
  const { id } = req.params;
  const role = req.body;
//   console.log(req.body);

  await Role.findByIdAndUpdate(id, { $set: role }, { new: true });
  res.json({status: "Rol actualizado"})
};

roleCtrl.deleteRole = async(req, res) => {
    await Role.findByIdAndRemove (req.params.id);
    res.json({status: "Rol Eliminado"})

};

module.exports = roleCtrl;
