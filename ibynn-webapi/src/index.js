// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { Axios } = require('axios');
const request = require('request');
const { response } = require('express');

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

function searchProducts(storeUrl) {
    const url = `https://serpapi.com/search.json?tbm=shop&q=iphone+12+site%3A${storeUrl}&hl=en&gl=us&api_key=1e83fc6ef34d6758a8432a9ee20170b05714993c2c4d962bf969f3d7572c3b70`;
    return request(url,  function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(body)
            json = json.shopping_results;
            
            
    }})
    
}

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    console.log(searchProducts('walmart.com'))
});

// starting the server
app.listen(9476, () => {
  console.log('listening on port 9476');
});