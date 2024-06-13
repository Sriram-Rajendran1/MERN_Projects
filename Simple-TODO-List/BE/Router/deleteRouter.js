const { deletControllerMethod } = require("../Controller/DeleteCOntroller");
const express = require("express");

const router = express.Router();
router.delete("/deletetodo/:id", deletControllerMethod);

module.exports = router;
