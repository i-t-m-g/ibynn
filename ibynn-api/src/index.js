const express = require("express");
const redis = require("redis");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require("axios").default;
const request = require("request");
const { cacheMiddleware } = require("./middleware/cache");
const { response } = require("express");
const { getProductsWP, getShopping, paginateShopping } = require("./scripts/prodRequest");
const { getForum, fetchTitles } = require("./scripts/scrapeImg");
const dotenv = require("dotenv");
const cheerio = require("cheerio");

dotenv.config();
let redisClient;
const redisConfig = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  username: process.env.REDIS_USERNAME,
};

// const client = Redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, password: process.env.REDIS_PASSWORD, TLS: true });
const client = redis.createClient();
client.connect().catch((err) => console.log(err));
client.on("connect", () => console.log("Connected to Redis!"));
client.on("error", (err) => console.log("Redis Client Error", err));

const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

var caching = cacheMiddleware(client);

//reverses a string
String.prototype.reverse = function () {
	return this.split('').reverse().join('');
};

app.get("/json/:jsonFile", (req, res) => {
  const json = require(`../json/${req.params.jsonFile}.json`);
  res.json(json);
});

app.get("/", async (req, res) => {
  // const ax = await inOne('bar+soap');

  const ax = await fetchTitles();

  res.send(ax);
});

app.get("/shopping", caching, async (req, res) => {
  const query = req.query.q;
  const sortBy = req.query.sortBy;
  
  try {
    const results = await paginateShopping(query, sortBy);
    if (results.shopping_results) 
    {
      client.setEx(query, 172800, JSON.stringify(results));
      res.send(results);
    } else {
      throw results;
    }

  } catch (error) {
    res.send(error);
  }
});

app.get("/searchAllStores", caching, async (request, response) => {
  const query = request.query.q;
  
  try {
    const results = await getProductsWP(query);

    client.setEx(query, 172800, JSON.stringify(results));

    response.send(results);
  } catch (error) {
    response.send(error);
  }
});

app.get("/tester", (req, res) => {
  let sendMatch;
  const title = "Pen+gear Retractable Ballpoint Pens, Assorted Colors, Count 18".toLowerCase().reverse()
  const a = "count"

  const pattern = new RegExp(`\\d+(?=\\s*${a})`);
  const reversedPattern = new RegExp(`\\d+(?=\\s*${a.reverse()})`);

  const match = title.match(pattern);
  const reversedMatch = title.match(reversedPattern);


  


  if (match) sendMatch = match[0]
  else if (reversedMatch) sendMatch = reversedMatch[0].reverse()



  res.send(sendMatch)
})

// starting the server
app.listen(9476, () => {
  console.log("listening on port 9476");
});
