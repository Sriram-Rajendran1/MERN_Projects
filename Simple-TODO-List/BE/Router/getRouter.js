const {
  getcontrollerMethod,
  getcontrollerMethodByID,
} = require("../Controller/GetController");
const express = require("express");
const router = express.Router();

router.get("/gettodos", getcontrollerMethod);
router.get("/gettodos/:id", getcontrollerMethodByID);

module.exports = router;
