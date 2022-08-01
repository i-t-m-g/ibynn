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
const { search, getStores, inOne, withPagination } = require('./scripts/prodRequest');
const { getForum, fetchTitles } = require('./scripts/scrapeImg');
const dotenv = require('dotenv');
dotenv.config();

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

app.get('/json/:jsonFile', (req, res) => {
  const json = require(`../json/${req.params.jsonFile}.json`);
  res.json(json);
})

app.get('/', async (req, res) => {
  // const ax = await inOne('bar+soap');

  const ax = await fetchTitles()
  

  res.send(ax)
});

app.get('/searchAllStores', async (req, res) => {
  
  const ax = await withPagination(req.query.q);
  // const ax = await inOne(req.query.q);
  console.log('OLD MCDONALD HAD A FARM', process.env.API_KEY, 'EEH AY EHH AY OOH')

  res.json(ax)
});

// starting the server
app.listen(9476, () => {
  console.log('listening on port 9476');
});