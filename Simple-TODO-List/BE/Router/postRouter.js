const { PostContollerMethod } = require("../Controller/PostController");

const express = require("express");
const router = express.Router();

router.post("/posttodos", PostContollerMethod);
module.exports = router;
