
const express = require("express"); 
const router = express.Router(); 

const {
  getAllContacts,
  getSingleContact,
  createContact, // lesson 3 POST
  updateContact, // lesson 3 PUT
  deleteContact // lesson 3 DELETE  
} = require("../controllers/contacts"); // to myself: lets make sure this path is correct...


// GET all contacts
router.get("/", getAllContacts); 

// GET single contact
router.get("/:id", getSingleContact); 

// POST create contact--- lesson 3
router.post("/", createContact);

// PUT update contact---- lesson 3
router.put("/:id", updateContact);

// DELETE contact---- lesson 3
router.delete("/:id", deleteContact);



module.exports = router;