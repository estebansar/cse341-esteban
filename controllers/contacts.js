
const { connectDB } = require("../db/connect");
const { ObjectId } = require("mongodb");  //lesson 3 POST request

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


    const contact = await db
      .collection("contacts")
      .findOne({ _id: new ObjectId(id) });

    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving contact" });
  }
};

// POST create new contact-____assigment 3
const createContact = async (req, res) => {
  try {
    const db = await connectDB();

    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const response = await db
      .collection("contacts")
      .insertOne(contact);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json({ message: "Failed to create contact" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating contact" });
  }
};

// PUT update contact___assigmenet 3
const updateContact = async (req, res) => {
  try {
    const db = await connectDB();

    const id = req.params.id;

    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const response = await db
      .collection("contacts")
      .replaceOne({ _id: new ObjectId(id) }, contact);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json({ message: "Failed to update contact" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating contact" });
  }
};

// DELETE contact___assigment 3
const deleteContact = async (req, res) => {
  try {
    const db = await connectDB();

    const id = req.params.id;

    const response = await db
      .collection("contacts")
      .deleteOne({ _id: new ObjectId(id) });

    if (response.deletedCount > 0) {
      res.status(200).json({ message: "Contact deleted successfully" });
    } else {
      res.status(500).json({ message: "Failed to delete" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting" });
  }
};



module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};