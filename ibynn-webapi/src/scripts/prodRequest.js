const { default: axios } = require("axios");
const api_key = '1e83fc6ef34d6758a8432a9ee20170b05714993c2c4d962bf969f3d7572c3b70'
const getSerpUrl = (storeUrl, query = 'iphone+12') => `https://serpapi.com/search.json?num=100&q=${query}+site%3A${storeUrl}&hl=en&gl=us&api_key=${api_key}`

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

 exports.search = searchStoreForProduct;
 exports.getStores = getProductAllStores;