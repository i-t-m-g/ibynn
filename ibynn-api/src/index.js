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
import { unregisterCustomQueryHandler } from "puppeteer";
import { affiliates, makeAffiliateLink } from "./scripts/constants/affiliates.js";


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

app.get("/set-conversion", async (req, res) => {
  const name = req.query.name;
  const link = req.query.link;
  const product_id = req.query.product_id;
  const date = new Date();
  console.log(product_id)
  const conversion = {
    name,
    product_id,
    link,
    date
  };

  let conversions_response = JSON.parse(await client.get('conversions'));

  if (Array.isArray(conversions_response)) {

    conversions_response.push(conversion);

  } else {
    conversions_response = [conversion];
  }

  await client.set('conversions', JSON.stringify(conversions_response));

  
  res.send(JSON.parse(await client.get('conversions')));
});

app.get("/shopping", caching, async (req, res) => {
  const query = encodeURIComponent(req.query.q);
  const sortBy = req.query.sortBy;
  const tbs = req.query.tbs;
  const merchagg = req.query.merchagg;
  const latlong = req.query.location;
  const page = req.query.page;
  const min_price = req.query.min_price ?? 0;

  try {
    const results = await request.getSerpShopping(
      query,
      sortBy ?? null,
      tbs,
      latlong,
      merchagg ?? null
    );
    results.position = 1;

    if (results.shopping_results) { 
        res.send(results);

        const pages = await request.retrievePages(results.serpapi_pagination,sortBy);
        pages.unshift(...results.shopping_results);

        results.shopping_results = pages;
        results.length = results.shopping_results.length;
        client.setEx(query, 604800, JSON.stringify(results));

    } else {
      throw results;
    }
  } catch (error) {
    res.send(error);
  }
});

app.get("/search-shopping", async (req, res) => {
  const query = encodeURIComponent(req.query.q);
  const sortBy = req.query.sortBy;
  const tbs = req.query.tbs;
  const merchagg = req.query.merchagg;
  const page = req.query.page;
  const min_price = req.query.min_price ?? 0;

  try {
    const results = await request.getSerpShopping(
      query,
      sortBy ?? null,
      tbs,
      merchagg ?? null,
      'r'
    );
    results.position = 1;

    if (results.shopping_results) { 

        res.send(results);
        results.length = results.shopping_results.length;
        client.setEx(query, 604800, JSON.stringify(results));

    } else {
      throw results;
    }
  } catch (error) {
    res.send(error);
  }
});

app.get("/google-search", async (req, res) => {
  const query = encodeURIComponent(req.query.q);

  try {
    const results = await request.getSearch(query);

    res.send(results);
    
  } catch (error) {
    res.send(error);
  }
});

app.get("/post-affiliate", (req, res) => {
  const links = req.query.links;
  const source = req.query.source;
  // const affiliatedLinks = [];

  const affiliate = affiliates[Object.keys(affiliates).find((key) => source.toLowerCase().includes(key))] || '';
  const affiliatedLink = makeAffiliateLink[affiliate](links);

  

  // for (let i = 0; i < links.length; i++) {
  //   const url = links[i].uri;
  //   const source = links[i].source;
  //   const affiliatedUrl = request.affiliateLink(url, source);
  //   const affiliatedLink = {
  //     source,
  //     affiliatedUrl,
  //   }

  //   affiliatedLinks.push(affiliatedLink);
  // }

  res.send(affiliatedLink);
})

app.get("/compare", async (req, res) => {
  const product_id = req.query.product_id;
  let response = await request.getProductPage(product_id);
  let online_sellers = response?.sellers_results?.online_sellers;
  const affiliatedLinks = [];

  console.log(response)


  for (let i = 0; i < online_sellers?.length; i++) {
    const url = decodeURIComponent(online_sellers[i].link);
    const source = online_sellers[i].name;
    const affiliatedUrl = request.affiliateLink(url, source);
    const affiliatedLink = {
      source,
      affiliatedUrl,
    }

    online_sellers[i].link = affiliatedLink.affiliatedUrl;
    response.sellers_results.online_sellers = online_sellers;

  }

  res.send(response);

  

  // response = request.addIcons(response);
  // if (sort_by) response = request.findSorters(response, sort_by);
  // request.sortArr(response);
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
