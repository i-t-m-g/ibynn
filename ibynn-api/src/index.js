import { createClient } from "redis";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { cache as cacheMiddleware } from "./middleware/cache.js";
import { config } from "dotenv";
import * as request from "./serp/requests/request.js";
import { createRequire } from "module";
import { getCheerio } from "./serp/scrape/scrape.js";

const require = createRequire(import.meta.url);

config();
let redisClient;
const redisConfig = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  username: process.env.REDIS_USERNAME,
};

// const client = Redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, password: process.env.REDIS_PASSWORD, TLS: true });
const client = createClient();
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

app.get("/json/:jsonFile", (req, res) => {
  const json = require(`../json/${req.params.jsonFile}.json`);
  res.json(json);
});

app.get("/shopping", caching, async (req, res) => {
  const query = req.query.q;
  const sortBy = req.query.sortBy;
  const min_price = req.query.min_price ?? 0;

  try {
    const results = await request.getSerpShopping(
      query,
      sortBy ?? null,
      min_price
    );
    if (results.shopping_results) {
      client.setEx(query, 604800, JSON.stringify(results));

      res.send(results);
    } else {
      throw results;
    }
  } catch (error) {
    res.send(error);
  }
});

app.get("/compare", async (req, res) => {
  const product_id = req.query.product_id;
  const sort_by = req.query.sort_by;

  let response = await request.getProductPage(product_id);

  // response = request.addIcons(response);
  // if (sort_by) response = request.findSorters(response, sort_by);
  // request.sortArr(response);

  res.send(response);
});

app.get("/scrape", async (req, res) => {
  const url = req.query.url;
  const html = await getCheerio(url);
  res.send(html)
});

// starting the server
app.listen(9476, () => {
  console.log("listening on port 9476");
});
