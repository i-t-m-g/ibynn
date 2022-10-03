const { default: axios } = require("axios");
const { getImage, getImageCheerio } = require("./scrapeImg");
const convert = require("convert-units");
const {
  storeImages,
  storeNames,
  per_type,
  measurements,
} = require("./constants/constants");
const dotenv = require("dotenv");
const { compareDocumentPosition } = require("domutils");
dotenv.config();
process.setMaxListeners(0);

const api_key = process.env.API_KEY;
const getShoppingUrl = (query = "iphone+12") =>
  `https://serpapi.com/search.json?q=${query}&engine=google&google_domain=google.com&gl=us&hl=en&tbs=mr:1,merchagg:g113872638|g8299768|g784994|m114193152|m7388148|m125210027|m120798572|m127713402|m431991540|m463001233|m10046,avg_rating:400&num=100&tbm=shop&api_key=${api_key}`;
const getShoppingUrlPages = (query, start = "0") =>
  `https://serpapi.com/search.json?q=${query}&engine=google&google_domain=google.com&gl=us&hl=en&tbs=mr:1,merchagg:g113872638|g8299768|g784994|m114193152|m7388148|m125210027|m120798572|m127713402|m431991540|m463001233|m10046,avg_rating:400&num=100&tbm=shop&start=${start}&api_key=${api_key}`;
const getSerpUrlPages = (query = "iphone+12", pageIndex) =>
  `https://serpapi.com/search.json?num=100&q=${query}&hl=en&gl=us&api_key=${api_key}&start=${
    pageIndex * 100
  }`;

//reverses a string
String.prototype.reverse = () => this.split("").reverse().join("");

const searchProductPagesAsync = async (query, pageIndex) => {
  try {
    const { data: response } = await axios.get(
      getSerpUrlPages(query, pageIndex)
    );

    const results = response.organic_results.filter(
      (item) => item.rich_snippet?.top?.detected_extensions?.price
    );

    const toReturn = {
      search_information: response.search_information,
      results: results,
    };

    toReturn.search_information.total_results = results.length;

    return toReturn;
  } catch (error) {
    console.log(error);
  }
};

const getProductsWithPagination = async (query) => {
  let data = {
    search_info: {
      query_displayed: "",
      total_results: 0,
      page_number: 0,
    },
    results: [],
  };

  let q = "";
  const storeUrls = ["walmart.com", "amazon.com", "target.com"];

  storeUrls.forEach(
    (url, index) => (q = query += `+${index !== 0 ? "OR" : ""}+site%3A${url}`)
  );

  for await (const i of [0, 1, 2]) {
    let result = await searchProductPagesAsync(q, i);

    data.search_info.query_displayed =
      result.search_information.query_displayed;
    data.search_info.page_number = result.search_information.page_number;
    data.results.push(...result.results);
  }

  data.search_info.total_results = data.results.length;

  const sortedArr = data.results.sort((a, b) => {
    const aPrice = a.rich_snippet?.top?.detected_extensions?.price;
    const bPrice = b.rich_snippet?.top?.detected_extensions?.price;

    return aPrice - bPrice;
  });

  data.results = sortedArr;

  let i = 0;
  for await (const prod of data.results) {
    // data.results[i].position = i;
    storeNames.forEach((n) => {
      if (prod.link.includes(n)) {
        data.results[i].icon = storeImages[n];
      }
    });

    // if (!prod.thumbnail && prod.link.includes('target')) {
    //     const thumbnail = await getImageCheerio(prod.link);
    //     data.results[i].thumbnail = thumbnail;
    // }

    i++;
  }

  return data;
};

const getShopping = async (query, sortBy = "", start = "0") => {
  try {
    const { data: response } = await axios.get(
      getShoppingUrlPages(query, start)
    );
    let results = {};
    results.search_information = response.search_information;
    results.search_metadata = response.search_metadata;
    results.serpapi_pagination = response.serpapi_pagination;

    results.shopping_results = response.inline_shopping_results
      ? [...response.inline_shopping_results, ...response.shopping_results]
      : response.shopping_results;

    // if (sortBy) results.shopping_results = findSorters(results.shopping_results, sortBy);

    // sortArr(results);

    return results;
  } catch (error) {
    return error;
  }
};

const paginateShopping = async (query, sortBy = "") => {
  const serpResponse = await getShopping(query, sortBy, 0);
  const other_pages = serpResponse?.serpapi_pagination?.other_pages ?? {};
  const pages =
    Object.keys(other_pages).length > 3 ? 3 : Object.keys(other_pages).length;
  let data = {
    search_information: {},
    search_metadata: {},
    shopping_results: [],
  };

  if (pages) {
    for (let i = 2; i <= pages; i++) {
      const { data: response } = await axios.get(
        `${other_pages[i]}&api_key=${api_key}`
      );
      console.log(response.shopping_results.length);
      data.search_information = response.search_information;
      data.search_metadata = response.search_metadata;
      data.shopping_results = [
        ...data.shopping_results,
        ...response.shopping_results,
      ];
    }
  } else {
    console.log(serpResponse.shopping_results);
    data.shopping_results = serpResponse.shopping_results;
    data.search_information = serpResponse.search_information;
    data.search_metadata = serpResponse.search_metadata;
  }
  data.shopping_results = addIcons(data.shopping_results);
  if (sortBy)
    data.shopping_results = findSorters(data.shopping_results, sortBy);
  sortArr(data);

  return data;
};

const addIcons = (arr) => {
  if (arr) {
    let i = 0;
    for (const prod of arr) {
      storeNames.forEach((n) => {
        if (prod.source.includes(n)) {
          arr[i].icon = storeImages[n];
        }
      });
      i++;
    }
  }

  return arr;
};

const findSorters = (arr, sortBy, inEach) => {
  let sortedArr = arr;

  if (sortBy) {
    for (const item of sortedArr) {
      for (const a of measurements[sortBy]) {
        const title = item.title.toLowerCase();
        const reversedTitle = title.reverse();

        if (title.includes(a)) {
          // const match = title.match(pattern);
          try {
            let unit_price;

            const pattern = new RegExp(`\\d+\\.?\\d*(?=(\\s|-)*${a})`);
            const reversedPattern = new RegExp(
              `\\d+\\.?\\d*(?=(\\s|-)*${a.reverse()})`
            );

            const match = title.match(pattern);
            const reversedMatch = reversedTitle.match(reversedPattern);

            if (match) calculations(item, match[0], sortBy, a);
            if (reversedMatch)
              calculations(item, match[0].reverse(), sortBy, a);
          } catch (error) {
            console.log(error);
          }

          // if (match) {
          //     unit_price = (item.extracted_price / parseFloat(match[0])).toFixed(2);
          //     item.unit_price = parseFloat(unit_price);
          //     item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`
          // } else if (reversedMatch) {
          //     unit_price = (item.extracted_price / parseFloat(reversedMatch[0].reverse())).toFixed(2);
          //     item.unit_price = parseFloat(unit_price);
          //     item.unit_price_displayed = `$${unit_price.reverse()}/${per_type[sortBy]}`
          // }
        }
      }
    }
  }

  return sortedArr;
};

const sortArr = (arr) => {
  let sortedData = arr.shopping_results.sort((a, b) => {
    if (a.title) {
      if (a.title.length > 75) {
        a.title = a.title.substring(0, 75) + "...";
      }
    }

    if (a.extracted_price && b.extracted_price)
      return b.extracted_price - a.extracted_price;
    return 0;
  });

  sortedData = sortedData.sort((a, b) => {
    if (a.unit_price && b.unit_price) return a.unit_price - b.unit_price;
    if (!b.unit_price) return -1;
    if (!a.unit_price) return 1;

    return 0;
  });
};

const calculations = (item, match, sortBy, unit) => {
  let unit_price;
  if (sortBy === "amount") {
    unit_price = (item.extracted_price / parseFloat(match)).toFixed(2);
    item.unit_price = parseFloat(unit_price);
    item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`;
  } else if (sortBy === "weight") {
    if (unit) {
      const weight = convert(match).from(unit).to("oz");
      unit_price = (item.extracted_price / parseFloat(weight)).toFixed(2);
      item.unit_price = parseFloat(unit_price);
      item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`;
    }
  } else if (sortBy === "volume") {
    if (unit) {
      const volume = convert(match)
        .from(unit === "floz" || "fl oz" ? "fl-oz" : unit)
        .to("fl-oz");
      unit_price = (item.extracted_price / parseFloat(volume)).toFixed(2);
      item.unit_price = parseFloat(unit_price);
      item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`;
    }
  } else if (sortBy === "massVolume") {
    if (unit === "floz" || unit === "fl oz") unit = "fl-oz";

    if (unit) {
      let massVolume;

      if (convert().describe(unit.replace(/\s/g, "")).measure === "mass") {
        massVolume = convert(match).from(unit.replace(/\s/g)).to("oz");
      }

      if (convert().describe(unit.replace(/\s/g, "")).measure === "volume") {
        massVolume = convert(match)
          .from(unit === "floz" || "fl oz" ? "fl-oz" : unit)
          .to("fl-oz");
      }

      unit_price = (item.extracted_price / parseFloat(massVolume)).toFixed(2);
      item.unit_price = parseFloat(unit_price);
      item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`;
    }
  }
};

exports.getShopping = getShopping;
exports.paginateShopping = paginateShopping;
exports.getProductsWP = getProductsWithPagination;
