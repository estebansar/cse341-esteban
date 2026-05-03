const contactsRoute = require("./contacts"); // lesson 2

const express = require("express");

const router = express.Router();

const { getName } = require("../controllers");

router.get("/", getName);

router.use("/contacts", contactsRoute); // lesson 2

module.exports = router;