
const { connectDB } = require("../db/connect");

// GET all contacts
const getAllContacts = async (req, res) => {
  try {
    const db = await connectDB(); 

    const contacts = await db
      .collection("contacts") 
      .find()
      .toArray();

    res.json(contacts); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error pulling the contacts" }); 
  }
};

// GET single contact by id
const getSingleContact = async (req, res) => {
  try {
    const db = await connectDB();

    const id = req.params.id;

    const { ObjectId } = require("mongodb");

    const contact = await db
      .collection("contacts")
      .findOne({ _id: new ObjectId(id) });

    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving contact" });
  }
};

module.exports = { getAllContacts, getSingleContact };