import axios from "axios";
import {
  storeImages,
  storeNames,
  measurements,
  stringReverse,
  calculations,
} from "../../scripts/constants/constants.js";

const api_key = process.env.API_KEY;
const serpShoppingUrl = (query, tbs) =>
  `https://serpapi.com/search.json?q=${query}${tbs}&api_key=${process.env.API_KEY}&engine=google&google_domain=google.com&gl=us&hl=en&num=100&tbm=shop`;
const productPageUrl = (product_id) =>
  `https://serpapi.com/search.json?engine=google_product&product_id=${product_id}&gl=us&hl=en&api_key=${process.env.API_KEY}`;

const getTbs = (min_price) =>
  `&tbs=mr:1,price:1,ppr_min:${min_price},merchagg:g8299768|g784994|g7187155|g7432975|g113872638|g9473138|m8175035|m10046|m1311674|m7815|m114193152|m7388148|m10048|m8740|m3368322,avg_rating:400`;

export const addIcons = (arr) => {
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

export const findSorters = (arr, sort_by, inEach) => {
  let sortedArr = arr;

  if (sort_by) {
    for (const item of sortedArr) {
      for (const a of measurements[sort_by]) {
        const title = item.title.toLowerCase();
        const reversedTitle = stringReverse(title);

        if (title.includes(a)) {
          // const match = title.match(pattern);
          try {
            let unit_price;

            const pattern = new RegExp(`\\d+\\.?\\d*(?=(\\s|-)*${a})`);
            const reversedPattern = new RegExp(
              `\\d+\\.?\\d*(?=(\\s|-)*${stringReverse(a)})`
            );

            const match = title.match(pattern);
            const reversedMatch = reversedTitle.match(reversedPattern);
            console.log(match, reversedMatch);

            if (match) calculations(item, match[0], sort_by, a);
            if (reversedMatch)
              calculations(item, stringReverse(match[0]), sort_by, a);
          } catch (error) {
            console.log(error);
          }

          // if (match) {
          //     unit_price = (item.extracted_price / parseFloat(match[0])).toFixed(2);
          //     item.unit_price = parseFloat(unit_price);
          //     item.unit_price_displayed = `$${unit_price}/${per_type[sort_by]}`
          // } else if (reversedMatch) {
          //     unit_price = (item.extracted_price / parseFloat(reversedMatch[0].reverse())).toFixed(2);
          //     item.unit_price = parseFloat(unit_price);
          //     item.unit_price_displayed = `$${unit_price.reverse()}/${per_type[sort_by]}`
          // }
        }
      }
    }
  }

  return sortedArr;
};

export const sortArr = (arr) => {
  let sortedData = arr.shopping_results.sort((a, b) => {
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

export async function getSerpShopping(query, sort_by, min_price) {
  const tbs = getTbs(min_price);
  const url = serpShoppingUrl(query, tbs);
  const { data: response } = await axios.get(url);
  const products = {};

  products.search_information = response.search_information;
  products.search_metadata = response.search_metadata;
  products.shopping_results = response.shopping_results;
  products.serpapi_pagination = response.serpapi_pagination;
  if (response.search_parameters)
    products.search_parameters = response.search_parameters;
  if (response.filters) products.filters = response.filters;
  products.shopping_results = addIcons(products.shopping_results);
  if (sort_by)
    products.shopping_results = findSorters(products.shopping_results, sort_by);
  sortArr(products);

  return products;
}

export async function getProductPage(product_id, sort_by, min_price) {
  try {
    let sortedData;
    const url = productPageUrl(product_id, "");
    const { data: response } = await axios.get(url);
    sortedData = response;

    response.sellers_results.online_sellers =
      response.sellers_results.online_sellers.filter((v, i, arr) => {
        return i === arr.findIndex((t) => t.name === v.name);
      });

    sortedData.sellers_results.online_sellers =
      response.sellers_results.online_sellers.sort(
        (a, b) =>
          parseFloat(a.base_price.substring(1)) -
          parseFloat(b.base_price.substring(1))
      );
    return sortedData;
  } catch (error) {
    return error;
  }
}
