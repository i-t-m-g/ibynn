// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const axios = require('axios').default;
const request = require('request');
const { response } = require('express');
const { search, getStores } = require('./scripts/prodRequest')


// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.get('/', async (req, res) => {
  const ax = await getStores('bar+soap');
  console.log(ax)

  res.json(ax)
});

app.get('/searchAllStores', async (req, res) => {
  const ax = await getStores('bar+soap');
  console.log('searched')
  res.json(ax)
});

// starting the server
app.listen(9476, () => {
  console.log('listening on port 9476');
});