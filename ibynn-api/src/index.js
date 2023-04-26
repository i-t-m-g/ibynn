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

app.get("/cat_ids", async (req, res) => {
  const catIDList = [];
  const emptySubCats = [];
  const noSubCats = [];
  const subCategories = [];
  const subCatIdList = [];
  const categories = [
      "Foundation",
      "Concealer",
      "Eyeshadow",
      "Cosmetic Gift Sets",
      "Facial Moisturizers",
      "Body Lotion",
      "Hand Cream",
      "Bubble Bath",
      "Bath Salts",
      "Bath Bombs",
      "Facial Scrubs",
      "Exfoliating Masks",
      "Sheet Masks",
      "Clay and Mud Masks",
      "Cream Masks",
      "Eye Palettes",
      "Eyeliner",
      "Under Eye Concealer",
    ];

  try {
    for (const category of  categories) {
     const catidres = await getCatIds(category);
     catIDList.push(...catidres);

    }

    catIDList.forEach(v => {
      if (v.title) {
        // const title = v.title.replace(/&/g, "and");
        subCategories.push(title);

      }
    });

    // for (const subCat of subCategories) {
    //   const catidres = await getCatIds(subCat);
    //   subCatIdList.push(...catidres);
    // }

    

    res.send(catIDList);


  } catch (error) {
    res.send(error);
  }


});


app.get("/hierarchy", async (req, res) => {
  const categories = [
      {
          "title": "Animals and Pet Supplies",
          "children" : [
              
          ]
      },
      {
          "title": "Apparel and Accessories",
          "children" : [
              
          ]
      },
      {
          "title": "Arts and Entertainment",
          "children" : [
              
          ]
      },
      {
          "title": "Baby and Toddler",
          "children" : [
              
          ]
      },
      {
          "title": "Business and Industrial",
          "children" : [
              
          ]
      },
      {
          "title": "Cameras and Optics",
          "children" : [
              
          ]
      },
      {
          "title": "Electronics",
          "children" : [
              
          ]
      },
      {
          "title": "Furniture",
          "children" : [
              
          ]
      },
      {
          "title": "Hardware",
          "children" : [
              
          ]
      },
      {
          "title": "Health and Beauty",
          "children" : [
              
          ]
      },
      {
          "title": "Home and Garden",
          "children" : [
              
          ]
      },
      {
          "title": "Luggage and Bags",
          "children" : [
              
          ]
      },
      {
          "title": "Office Supplies",
          "children" : [
              
          ]
      },
      {
          "title": "Sporting Goods",
          "children" : [
              
          ]
      },
      {
          "title": "Toys and Games",
          "children" : [
              
          ]
      }
  ]

  const children = 
  [
      {
          "title": "Pet Carriers",
          "parent": "Animals and Pet Supplies",
          "tbs": "mr:1,root_cat:533708"
      },
      {
          "title": "Pet Playpens",
          "parent": "Animals and Pet Supplies",
          "tbs": "mr:1,root_cat:530521"
      },
      {
          "title": "Pet Veterinary Diets",
          "parent": "Animals and Pet Supplies",
          "tbs": "mr:1,root_cat:530527"
      },
      {
          "title": "Pet Feeders & Waterers",
          "parent": "Animals and Pet Supplies",
          "tbs": "mr:1,root_cat:533731"
      },
      {
          "title": "Pet Collars, Harnesses & Leashes",
          "parent": "Animals and Pet Supplies",
          "tbs": "mr:1,root_cat:533517"
      },
      {
          "title": "T-Shirts",
          "parent": "Apparel and Accessories",
          "tbs": "mr:1,root_cat:531703"
      },
      {
          "title": "Men's Apparel",
          "parent": "Apparel and Accessories",
          "tbs": "mr:1,root_cat:529386"
      },
      {
          "title": "Women's Clothing",
          "parent": "Apparel and Accessories",
          "tbs": "mr:1,root_cat:532011"
      },
      {
          "title": "Exercise & Fitness",
          "parent": "Apparel and Accessories",
          "tbs": "mr:1,root_cat:530098"
      },
      {
          "title": "Sneakers",
          "parent": "Apparel and Accessories",
          "tbs": "mr:1,root_cat:531484"
      },
      {
          "title": "Art Prints",
          "parent": "Arts and Entertainment",
          "tbs": "mr:1,root_cat:534408"
      },
      {
          "title": "Canvas Wall Art",
          "parent": "Arts and Entertainment",
          "tbs": "mr:1,root_cat:534410"
      },
      {
          "title": "Posters",
          "parent": "Arts and Entertainment",
          "tbs": "mr:1,root_cat:534409"
      },
      {
          "title": "Framed Wall Art",
          "parent": "Arts and Entertainment",
          "tbs": "mr:1,root_cat:534405"
      },
      {
          "title": "Photography Wall Art",
          "parent": "Arts and Entertainment",
          "tbs": "mr:1,root_cat:534404"
      },
      {
          "title": "Baby",
          "parent": "Baby and Toddler",
          "tbs": "mr:1,root_cat:533076"
      },
      {
          "title": "Shoes",
          "parent": "Baby and Toddler",
          "tbs": "mr:1,root_cat:529382"
      },
      {
          "title": "Baby Clothing",
          "parent": "Baby and Toddler",
          "tbs": "mr:1,root_cat:545117"
      },
      {
          "title": "Toddler Shoes",
          "parent": "Baby and Toddler",
          "tbs": "mr:1,root_cat:545122"
      },
      {
          "title": "Toddler Clothing",
          "parent": "Baby and Toddler",
          "tbs": "mr:1,root_cat:545121"
      },
      {
          "title": "Office Furniture",
          "parent": "Business and Industrial",
          "tbs": "mr:1,root_cat:529816"
      },
      {
          "title": "Tools",
          "parent": "Business and Industrial",
          "tbs": "mr:1,root_cat:529844"
      },
      {
          "title": "Storage & Organization",
          "parent": "Business and Industrial",
          "tbs": "mr:1,root_cat:529812"
      },
      {
          "title": "Books",
          "parent": "Business and Industrial",
          "tbs": "mr:1,root_cat:529627"
      },
      {
          "title": "Computers & Accessories",
          "parent": "Business and Industrial",
          "tbs": "mr:1,root_cat:538996"
      },
      {
          "title": "Point & Shoot Digital Cameras",
          "parent": "Cameras and Optics",
          "tbs": "mr:1,root_cat:535437"
      },
      {
          "title": "Mirrorless System Cameras",
          "parent": "Cameras and Optics",
          "tbs": "mr:1,root_cat:535438"
      },
      {
          "title": "DSLR Cameras",
          "parent": "Cameras and Optics",
          "tbs": "mr:1,root_cat:535439"
      },
      {
          "title": "HD Video Cameras",
          "parent": "Cameras and Optics",
          "tbs": "mr:1,root_cat:535617"
      },
      {
          "title": "Film Cameras",
          "parent": "Cameras and Optics",
          "tbs": "mr:1,root_cat:529647"
      },
      {
          "title": "Electronic Components & Tools",
          "parent": "Electronics",
          "tbs": "mr:1,root_cat:539185"
      },
      {
          "title": "Desktop Computer Accessories",
          "parent": "Electronics",
          "tbs": "mr:1,root_cat:543384"
      },
      {
          "title": "Audio",
          "parent": "Electronics",
          "tbs": "mr:1,root_cat:530626"
      },
      {
          "title": "TV & Video",
          "parent": "Electronics",
          "tbs": "mr:1,root_cat:530842"
      },
      {
          "title": "Keyboards",
          "parent": "Electronics",
          "tbs": "mr:1,root_cat:529690"
      },
      {
          "title": "Sofas",
          "parent": "Furniture",
          "tbs": "mr:1,root_cat:534225"
      },
      {
          "title": "Furniture Sets",
          "parent": "Furniture",
          "tbs": "mr:1,root_cat:534160"
      },
      {
          "title": "Beds",
          "parent": "Furniture",
          "tbs": "mr:1,root_cat:529903"
      },
      {
          "title": "Futons & Sleepers",
          "parent": "Furniture",
          "tbs": "mr:1,root_cat:534231"
      },
      {
          "title": "Sleeper Sofas",
          "parent": "Furniture",
          "tbs": "mr:1,root_cat:534227"
      },
      {
          "title": "Building Materials",
          "parent": "Hardware",
          "tbs": "mr:1,root_cat:537518"
      },
      {
          "title": "Hand Tools",
          "parent": "Hardware",
          "tbs": "mr:1,root_cat:529847"
      },
      {
          "title": "Door Knobs & Handles",
          "parent": "Hardware",
          "tbs": "mr:1,root_cat:537650"
      },
      {
          "title": "Hinges",
          "parent": "Hardware",
          "tbs": "mr:1,root_cat:538625"
      },
      {
          "title": "Kitchen Home Improvement",
          "parent": "Hardware",
          "tbs": "mr:1,root_cat:537293"
      },
      {
          "title": "Screws",
          "parent": "Hardware",
          "tbs": "mr:1,root_cat:530320"
      },
      {
          "title": "Face Makeup",
          "parent": "Health and Beauty",
          "tbs": "mr:1,root_cat:531520"
      },
      {
          "title": "Facial Moisturizers",
          "parent": "Health and Beauty",
          "tbs": "mr:1,root_cat:532203"
      },
      {
          "title": "Bath & Body",
          "parent": "Health and Beauty",
          "tbs": "mr:1,root_cat:529706"
      },
      {
          "title": "Facial Treatments & Masks",
          "parent": "Health and Beauty",
          "tbs": "mr:1,root_cat:542999"
      },
      {
          "title": "Eye Makeup",
          "parent": "Health and Beauty",
          "tbs": "mr:1,root_cat:531521"
      },
      {
          "title": "Lawn Ornaments",
          "parent": "Home and Garden",
          "tbs": "mr:1,root_cat:530222"
      },
      {
          "title": "Pots & Planters",
          "parent": "Home and Garden",
          "tbs": "mr:1,root_cat:530235"
      },
      {
          "title": "Outdoor Living",
          "parent": "Home and Garden",
          "tbs": "mr:1,root_cat:530207"
      },
      {
          "title": "Furniture",
          "parent": "Home and Garden",
          "tbs": "mr:1,root_cat:530959"
      },
      {
          "title": "Fertilizer",
          "parent": "Home and Garden",
          "tbs": "mr:1,root_cat:530227"
      },
      {
          "title": "Suitcases",
          "parent": "Luggage",
          "tbs": "mr:1,root_cat:530554"
      },
      {
          "title": "Luggage Sets",
          "parent": "Luggage",
          "tbs": "mr:1,root_cat:530553"
      },
      {
          "title": "Carry-on Luggage",
          "parent": "Luggage",
          "tbs": "mr:1,root_cat:537024"
      },
      {
          "title": "Travel Duffels",
          "parent": "Luggage",
          "tbs": "mr:1,root_cat:530951"
      },
      {
          "title": "Crossbody Bags",
          "parent": "Bags",
          "tbs": "mr:1,root_cat:543707"
      },
      {
          "title": "Tote Handbags",
          "parent": "Bags",
          "tbs": "mr:1,root_cat:536995"
      },
      {
          "title": "Satchel Purses",
          "parent": "Bags",
          "tbs": "mr:1,root_cat:543705"
      },
      {
          "title": "Unisex Handbags",
          "parent": "Bags",
          "tbs": "mr:1,root_cat:543711"
      },
      {
          "title": "Clutches & Wristlets",
          "parent": "Bags",
          "tbs": "mr:1,root_cat:543704"
      },
      [
          "Office Supplies"
      ],
      {
          "title": "Action Figures",
          "parent": "Toys and Games",
          "tbs": "mr:1,root_cat:530369"
      },
      {
          "title": "Stuffed Animals",
          "parent": "Toys and Games",
          "tbs": "mr:1,root_cat:533382"
      },
      {
          "title": "STEM Toys",
          "parent": "Toys and Games",
          "tbs": "mr:1,root_cat:533370"
      },
      {
          "title": "Toy Playsets",
          "parent": "Toys and Games",
          "tbs": "mr:1,root_cat:530436"
      },
      {
          "title": "Toy Cars & Trucks",
          "parent": "Toys and Games",
          "tbs": "mr:1,root_cat:530501"
      },
      {
          "title": "Vehicle Steering & Suspension",
          "parent": "Vehicles and Parts",
          "tbs": "mr:1,root_cat:536725"
      },
      {
          "title": "Vehicle Engines & Parts",
          "parent": "Vehicles and Parts",
          "tbs": "mr:1,root_cat:538452"
      },
      {
          "title": "Vehicle Repair Tools & Supplies",
          "parent": "Vehicles and Parts",
          "tbs": "mr:1,root_cat:538593"
      },
      {
          "title": "Vehicle Frame & Body",
          "parent": "Vehicles and Parts",
          "tbs": "mr:1,root_cat:530646"
      },
      {
          "title": "Vehicle Tires, Wheels & Parts",
          "parent": "Vehicles and Parts",
          "tbs": "mr:1,root_cat:530744"
      }
  ]

  

})


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
        let catId = {title: "",parent: "",tbs: ""};
        catId.title = o.text;
        catId.parent = category;
        catId.tbs = o.tbs;
        catIDList.push(catId);
      });


    } else {
      noSubCats.push(category);
      emptySubCats.push(queryResult);
    }

  if (noSubCats.length > 0) catIDList.push(noSubCats);
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

app.get("/scrape", async (req, res) => {
  const url = req.query.url;
  const html = await getCheerio(url);
  res.send(html)
});



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

app.get("/images", async (req, res) => {
  const json = require(`../json/cates.json`);
  const tbs = request.getTbs();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const file = path.resolve(__dirname, "../json/categories.json");
  const readfs = fs.readFileSync(file);
  const categories = JSON.parse(readfs);
  
  const cats = await getimage(categories,json,tbs);

  setTimeout(() => {
    var newData = JSON.stringify(cats, null, 2);
    fs.writeFile(file, newData, err => {
      if(err) throw err;
          console.log("New data added");
    });
    res.send(cats);
    
  }, 20000);


  });

app.get("/removebg", async (req, res) => {
  const formData = new FormData();
  formData.append('size', 'auto');
  formData.append('image_url', 'https://www.remove.bg/example.jpg');

  axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: {
      ...formData.getHeaders(),
      'X-Api-Key': 'hSGTFqwM1dJ5tBwkNYCooJX1',
    },
    encoding: null
  })
  .then((response) => {
    if(response.status != 200) return console.error('Error:', response.status, response.statusText);
    fs.writeFileSync("no-bg.png", response.data);
    })
  .catch((error) => {
      return console.error('Request failed:', error);
  });
  res.send("hello");
})

// starting the server
app.listen(9476, () => {
  console.log("listening on port 9476");
});
