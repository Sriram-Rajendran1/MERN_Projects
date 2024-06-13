const { updatecontrollerMethod } = require("../Controller/UpdateController");

const express = require("express");
const router = express.Router();

router.patch("/updatetodo/:id", updatecontrollerMethod);

module.exports = router;
