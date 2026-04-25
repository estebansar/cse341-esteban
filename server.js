
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000; // ❌ do not remove this//we set a port

const routes = require("./routes"); //import rotures

app.use("/", routes); //use routes

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // shows full URL, start server
});