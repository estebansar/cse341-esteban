const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const temple = require('./temple');


routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;
