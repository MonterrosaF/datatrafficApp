const express = require("express");
const router = express.Router();

const rolCtrl = require('../controllers/role.controller')

router.get("/", rolCtrl.getRoles);
router.post("/", rolCtrl.createRole);
router.get("/:id", rolCtrl.getRole);
router.put("/:id", rolCtrl.editRole);
router.delete("/:id", rolCtrl.deleteRole);

module.exports = router;
