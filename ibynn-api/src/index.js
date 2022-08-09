const express = require('express');
const Redis = require('redis');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const axios = require('axios').default;
const request = require('request');
const { cacheMiddleware } = require('./middleware/cache');
const { response } = require('express');
const { search, getStores, inOne, withPagination } = require('./scripts/prodRequest');
const { getForum, fetchTitles } = require('./scripts/scrapeImg');
const dotenv = require('dotenv');

dotenv.config();
var redisConfig = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  username: process.env.REDIS_USERNAME
};

const client = Redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, password: process.env.REDIS_PASSWORD, TLS: true });
client.connect().catch(err => console.log(err));
client.on('connect', () => console.log('Connected to Redis!'));
client.on('error', (err) => console.log('Redis Client Error', err));


const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

var caching = cacheMiddleware(client);

app.get('/json/:jsonFile', (req, res) => {
  const json = require(`../json/${req.params.jsonFile}.json`);
  res.json(json);
})

app.get('/', async (req, res) => {
  // const ax = await inOne('bar+soap');

  const ax = await fetchTitles()
  

  res.send(ax)
});

app.get('/searchAllStores', caching, async (request, response) => {
  const query = request.query.q;

  try {
    const results = await withPagination(query);

    client.setEx(query, 86400, JSON.stringify(results));

    response.send(results);
    
  } catch (error) {
    response.send(error)    
  }

});

// starting the server
app.listen(9476, () => {
  console.log('listening on port 9476');
});