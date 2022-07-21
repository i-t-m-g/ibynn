const { default: axios } = require("axios");
const api_key = '141760304ba4982e7febed0272c37f20b98852001d7a48a506aba75203fad2ed'
const getSerpUrl = (storeUrl, query = 'iphone+12') => `https://serpapi.com/search.json?num=100&q=${query}+site%3A${storeUrl}&hl=en&gl=us&api_key=${api_key}`
const getSerpUrlQ = (query = 'iphone+12') => `https://serpapi.com/search.json?num=100&q=${query}&hl=en&gl=us&api_key=${api_key}`

const searchStoreForProduct = async (storeUrl, query) => {
    try {
        const {data:response} = await axios.get(getSerpUrl(storeUrl, query));
        
        const results = response.organic_results.filter(item => item.rich_snippet?.top?.detected_extensions?.price)
        
        return {
            search_information: response.search_information,
            results: results
        };

    } catch (error) {
      console.log(error);
     }
}

const searchProductAsync = async (query) => {
    try {
        const {data:response} = await axios.get(getSerpUrlQ(query));
        
        const results = response.organic_results.filter(item => item.rich_snippet?.top?.detected_extensions?.price)
        
        return {
            search_information: response.search_information,
            results: results
        };

    } catch (error) {
      console.log(error);
     }
}

const getProductAllStores = async (query) => {
    const results = [];
    let data = {};
    const storeUrls = [
        "walmart.com",
        "amazon.com",
        "target.com"
    ];

    for await (const url of storeUrls) {
        const result = await searchStoreForProduct(url, query)
        results.push(...result.results)
        data = {
            search_info: result.search_information,
            results: results
        };
    }

    return data;

}

const getProductAllStoresInOne = async (query) => {
    let results = [];
    let data = {};
    let q = '';
    const storeUrls = [
        "walmart.com",
        "amazon.com",
        "target.com"
    ];
    
    storeUrls.forEach((url, index) => q = query += `+${index !== 0 ? 'OR' : ''}+site%3A${url}`);
    results = searchProductAsync(q);

    return results;

}

 exports.search = searchStoreForProduct;
 exports.getStores = getProductAllStores;
 exports.inOne = getProductAllStoresInOne;