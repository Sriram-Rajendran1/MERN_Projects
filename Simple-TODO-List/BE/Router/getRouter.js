const { getcontrollerMethod } = require("../Controller/GetController");
const express = require("express");
const router = express.Router();

router.get("/gettodos", getcontrollerMethod);
module.exports = router;
