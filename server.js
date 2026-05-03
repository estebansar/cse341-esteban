
const express = require("express");

// import DB connection
const { connectDB } = require("./db/connect");// lesson 2_connecing this to mongoDB

const app = express();

const PORT = process.env.PORT || 3000; //we set a port

const routes = require("./routes"); //import rotures

app.use("/", routes); //use routes

// connect to DB first, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});