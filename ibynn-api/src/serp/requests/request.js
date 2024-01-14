import axios from "axios";
import {
  storeImages,
  storeNames,
  measurements,
  stringReverse,
  calculations,
} from "../../scripts/constants/constants.js";

const api_key = () => "&api_key=" + process.env.API_KEY;
export const serpShoppingUrl = (query,tbs, merchagg, p_ord='p') =>
  `https://serpapi.com/search.json?q=${query}${api_key()}&engine=google&google_domain=google.com&gl=us&hl=en&num=100&tbm=shop${`&tbs=mr:1,p_ord:r,avg_rating:200,${tbs},${merchagg}`}`;
const productPageUrl = (product_id) =>
  `https://serpapi.com/search.json?engine=google_product&product_id=${product_id}&gl=us&hl=en&api_key=${process.env.API_KEY}`;

export const addIcons = (arr) => {
  if (arr.length > 0) {
    for (const prod of arr) {
      if (prod.link.startsWith('http')) {
        const url = new URL(prod.link);
        if (url.origin) {
          const favicon = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url.origin}&size=64`;
          prod.icon = favicon;
        }
      }
    }
  }

  return arr;
};

// export const findSorters = (arr, sort_by) => {
//   let sortedArr = [...arr];
//   if (sort_by === 'massVolume' || sort_by === 'amount') {
//     for (const item of sortedArr) {
//   for (const a of measurements[sort_by]) {
//         if (item.title) {
//           const title = item.title.toLowerCase();
//           const reversedTitle = stringReverse(title);

//           if (title.includes(a)) {
//             const pattern = new RegExp(`\\d+\\.?\\d*(?=(\\s|-)*${a.replace(' ', '\\s')})`);
//             const regMatch = title.match(pattern);
//             const reversedMatch = reversedTitle.match(pattern);

//             if (regMatch) calculations(item, regMatch[0], sort_by, a);
//             if (reversedMatch) calculations(item, stringReverse(regMatch[0]), sort_by, a);
//           }
//         }
//       }
//     }
//   }

//   return sortedArr;
// };

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

export const retrievePages = async (serpapi_pagination, sort_by) => {
  let pages = [];

  try {
    for (const n of [2,3,4,5]) {
      const pageUrl = serpapi_pagination.other_pages[n] ?? null;
      if (pageUrl) {
        const serp_response = await getPageAtUrl(pageUrl + api_key(), sort_by);
        serp_response.position = n;
        pages.push(...serp_response.shopping_results);
      }
      else {
        break;
      }
            
    }
  } catch (error) {
    console.log(error)
  }
  
  return pages;
}

export const getPageAtUrl = async (url,sort_by) => {
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
  
  // if (sort_by) { 
  //   products.shopping_results = findSorters(products.shopping_results, sort_by);
    // sortArr(products);
  // }

  return products;
}

export async function getSerpShopping(query, sort_by, tbs, merchagg, p_ord='p') {
  const url = serpShoppingUrl(query,tbs, merchagg, p_ord);
  const { data: response } = await axios.get(url);

  const products = {};
  products.search_information = response.search_information;
  products.search_metadata = response.search_metadata;
  products.shopping_results = response.shopping_results;
  products.serpapi_pagination = response.serpapi_pagination;
  products.pagination = response.pagination;

  if (response.search_parameters)
    products.search_parameters = response.search_parameters;

  if (response.filters) products.filters = response.filters;

  products.shopping_results = addIcons(products.shopping_results);

  // if (sort_by === 'massVolume' || sort_by === 'amount') {
  //   products.shopping_results = findSorters(products.shopping_results, sort_by);
    sortArr(products);
  // }

  return products;
}

export async function getProductPage(product_id) {
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
