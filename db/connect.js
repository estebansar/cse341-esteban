// db/connect.js

const { MongoClient } = require("mongodb"); // 
require("dotenv").config(); 

const uri = process.env.MONGODB_URI; 

let client;
let db;

async function connectDB() {
  try {
    client = new MongoClient(uri); 
    await client.connect(); 

    db = client.db("contactsDB"); 

    console.log("Connected to MongoDB DATa");

    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

module.exports = { connectDB };