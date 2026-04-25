const express = require("express");
const router = express.Router();

const { getName } = require("../controllers");

router.get("/", getName);

module.exports = router;