const swaggerAutogen = require("swagger-autogen")(); // lesson 4: swagger setup

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts Project API"
  },
  host: "localhost:3000",
  schemes: ["http"]
};

//this creates the swagger-output.json file
const outputFile = "./swagger-output.json";

// to myself: swagger will scan server.js for routes
const endpointsFiles = ["./server.js"];

// generate swagger documentation
swaggerAutogen(outputFile, endpointsFiles, doc);
