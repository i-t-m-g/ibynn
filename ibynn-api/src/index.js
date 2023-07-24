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
import axios from "axios";


const require = createRequire(import.meta.url);
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: "cbde68b8e20004d7478cdddc1f0e2fe7-us21",
  server: "us21",
});


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

app.get("/get-category", async (req,res) => {
  const category = "Sporting Goods";
  const query = encodeURIComponent(category);
  const url = request.serpShoppingUrl(query);
  const { data:response } = await axios.get(url);
  const categoryFilter = response.filters.filter(i => i.type === "Category")[0];
  const categoryObj = {
    text: category,
    tbs: "",
    children: categoryFilter?.options
  };

  const allCats = [categoryObj];
  let currChildren;
  let i = 0;
  do {
    const cat = categoryObj.children[i].text;
    const q = encodeURIComponent(cat);
    const { data:response } = await axios.get(request.serpShoppingUrl(q));
    const catChildren = response.filters.filter(i => i.type === "Category")[0]?.options;
    const indx = allCats[0].children.findIndex(i => i.text === cat);

    allCats[0].children[indx].children = catChildren;


    i++;
  } while (i < categoryObj.children.length);

  res.send(allCats);
});

app.get("/shopping", caching, async (req, res) => {
  const query = req.query.q;
  const sortBy = req.query.sortBy;
  const tbs = req.query.tbs;
  const page = req.query.page;
  const min_price = req.query.min_price ?? 0;

  try {

    const results = await request.getSerpShopping(
      query,
      sortBy ?? null,
      tbs
    );
    results.position = 1;

    if (results.shopping_results) { 

      // res.send(results);

      // const pages = await request.retrievePages(results.serpapi_pagination,sortBy);
      // pages.unshift(...results.shopping_results);

      // results.shopping_results = pages;
      // client.setEx(query, 604800, JSON.stringify(results));
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

app.get("/subscribe", async (req,res) => {
  const listID = "f38ba58e34";
  const email = req.query.email;
  const fName = req.query.fName || "";
  const lName = req.query.lName || "";
  const jsonData = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: fName,
      LNAME: lName
    }
  };

  const response = await mailchimp.lists.addListMember(listID, jsonData);
  res.send(response);
})

// starting the server
app.listen(9476, () => {
  console.log("listening on port 9476");
});
