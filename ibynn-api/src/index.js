import { createClient } from "redis";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { cache as cacheMiddleware } from "./middleware/cache.js";
import { paginateShopping } from "./scripts/prodRequest.js";
import { config } from "dotenv";
import * as request from "./serp/requests/request.js";
import { createRequire } from "module";
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
  console.log(req.query.min_price, "/search?q=washing+machines&min_price=300");
  try {
    const results = await request.getPaginatedSerpShopping(
      query,
      sortBy ?? null,
      min_price
    );
    if (results.shopping_results) {
      client.setEx(query, 172800, JSON.stringify(results));

      res.send(results);
    } else {
      throw results;
    }
  } catch (error) {
    res.send(error);
  }
});

app.get("/compare", async (req, res) => {
  const query = req.query.q;
  const sort_by = req.query.sort_by;

  let response = await request.getInlineShoppingResults(query);

  // response = request.addIcons(response);
  // if (sort_by) response = request.findSorters(response, sort_by);
  // request.sortArr(response);

  res.send(response);
});

// starting the server
app.listen(9476, () => {
  console.log("listening on port 9476");
});
