
const express = require("express"); 
const router = express.Router(); 

const { getAllContacts, getSingleContact } = require("../controllers/contacts"); // to myself: lets make sure this path is correct...
// GET all contacts
router.get("/", getAllContacts); 

// GET single contact
router.get("/:id", getSingleContact); 

module.exports = router;