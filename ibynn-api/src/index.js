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
import axios from "axios";
import fs, { read } from "fs";
import path from "node:path"
import {fileURLToPath} from 'url';
import FormData from 'form-data';


const require = createRequire(import.meta.url);
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: 'edfbb7bf6a52024cd372cf941d429c6c-us21',
  server: 'us21',
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

app.get("/taxes", async (req,res) => {
  const categories = [
    "Luggage & Bags",
    "Luggage & Bags > Backpacks",
    "Luggage & Bags > Briefcases",
    "Luggage & Bags > Cosmetic & Toiletry Bags",
    "Luggage & Bags > Diaper Bags",
    "Luggage & Bags > Dry Boxes",
    "Luggage & Bags > Duffel Bags",
    "Luggage & Bags > Fanny Packs",
    "Luggage & Bags > Garment Bags",
    "Luggage & Bags > Luggage Accessories",
    "Luggage & Bags > Luggage Accessories > Dry Box Liners & Inserts",
    "Luggage & Bags > Luggage Accessories > Luggage Covers",
    "Luggage & Bags > Luggage Accessories > Luggage Racks & Stands",
    "Luggage & Bags > Luggage Accessories > Luggage Straps",
    "Luggage & Bags > Luggage Accessories > Luggage Tags",
    "Luggage & Bags > Luggage Accessories > Packing Organizers",
    "Luggage & Bags > Luggage Accessories > Travel Bottles & Containers",
    "Luggage & Bags > Luggage Accessories > Travel Pouches",
    "Luggage & Bags > Messenger Bags",
    "Luggage & Bags > Shopping Totes",
    "Luggage & Bags > Suitcases",
    "Luggage & Bags > Train Cases",
  ];

  try {
    for (const category of  categories) {
        const q = encodeURIComponent(category);
        const catObj = {
            "name": category,
            "children": []
        };
        
        const url = request.serpShoppingUrl(q);
        const { data: response } = await axios.get(url);
        const categoryFilter = response.filters.filter(v => v.type = "Category");
        

    }
    
  } catch (error) {
    
  }
  res.send(urls);
})

app.get("/cat_ids", async (req, res) => {
  const catIDList = [];
  const emptySubCats = [];
  const noSubCats = [];
  const subCategories = [];
  const subCatIdList = [];
  const categories = [
    "Kitchen",
    "Kitchen Tools & Utensils",
    "Aprons",
    "Baking Peels",
    "Basters",
    "Basting Brushes"
  ];

  try {
    for (const category of  categories) {
        const catObj = {
            "name": category,
            "children": []
        };
        const catidres = await getCatIds(category);
        catObj.children = catidres;
        catIDList.push(catObj);

    }

    catIDList.forEach(v => {
      if (v.title) {
        const title = v.title.replace(/&/g, "and");
        subCategories.push(title);

      }
    });

    for (const subCat of subCategories) {
      const catidres = await getCatIds(subCat);
      subCatIdList.push(...catidres);
    }

    

    res.send(catIDList);


  } catch (error) {
    res.send(error);
  }


});


const getCatIds = async (category) => {
  const catIDList = [];
  const emptySubCats = [];
  const noSubCats = [];

    const url = request.serpShoppingUrl(category);
    const { data: response } = await axios.get(url);
    const queryResult = response;
    const categoryResult = queryResult.filters.filter(f => f.type === "Category");

    if (categoryResult.length > 0) {
      
      categoryResult[0].options.forEach(o => {
        let catId = {name: "",parent: "",slug: ""};
        catId.name = o.text;
        catId.parent = category;
        catId.slug = `/search?q=${o.text}&sortBy=massVolume&tbs=` + o.tbs;
        catIDList.push(catId);
      });


    } else {
        catIDList.name = category;
    }

  return catIDList;

}

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
  const fName = req.query.fName;
  const lName = req.query.lName;
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


const getimage = async (categories,json,tbs) => {
  const cats = [];

  for await (const cat of categories) {
    const q = encodeURIComponent(json[cat.name]);
    const url = request.serpShoppingUrl(q,tbs);
    const { data:response } = await axios.get(url);
    const images = response?.shopping_results?.map(r => r.thumbnail);
    cat.images = images?.length > 0 ? images : [images?.length > 0 ? images : [url]];
    if (images?.length > 0) console.log(images[0]);

    const image = {
      "mobile": {
        "url": images?.length > 0 ? images[0] : "no shopping results",
        "width": 475,
        "height": 250
      },
      "desktop": {
        "url": images?.length > 0 ? images[0] : "no shopping results",
        "width": 475,
        "height": 250
      }
    }

    cat.image = image;
    cats.push(cat);
    if (cat?.children?.length > 0) getimage(cat.children,json,tbs);
  }

  // categories?.forEach(async (cat, i) => {
  //   const q = encodeURIComponent(json[cat.name]);
  //   const url = request.serpShoppingUrl(q,tbs);
  //   const { data:response } = await axios.get(url);
  //   // const images = response?.shopping_results?.map(r => r.thumbnail);
  //   // cat.images = images?.length > 0 ? images : [url];
  //   // console.log(images[0]);

  //   const image = {
  //     "mobile": {
  //       "url": url,
  //       "width": 475,
  //       "height": 250
  //     },
  //     "desktop": {
  //       "url": url,
  //       "width": 475,
  //       "height": 250
  //     }
  //   }

  //   cat.image = image;
  //   cats.push(cat);
  //   if (cat?.children?.length > 0) getimage(cat.children,json,tbs);
  // });

  return cats;
}

// starting the server
app.listen(9476, () => {
  console.log("listening on port 9476");
});
