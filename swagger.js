const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Temple API',
    description: 'Temple API documentation'
  },
  host: 'localhost:8080',
  schemes: ['http']
}

const outputFile = './swagger.json'
const routes = ['./routes/index.js']

swaggerAutogen(outputFile, routes, doc)
