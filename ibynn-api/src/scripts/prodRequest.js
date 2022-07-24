const { default: axios } = require("axios");
const api_key = '21d0705d4395e03b02023bc9e08ea06242588a85958ffba5be5375e693873aaf'
const getSerpUrl = (storeUrl, query = 'iphone+12') => `https://serpapi.com/search.json?num=100&q=${query}+site%3A${storeUrl}&hl=en&gl=us&api_key=${api_key}`
const getSerpUrlQ = (query = 'iphone+12') => `https://serpapi.com/search.json?num=100&q=${query}&hl=en&gl=us&api_key=${api_key}`
const getSerpUrlPages = (query = 'iphone+12', pageIndex) => `https://serpapi.com/search.json?num=100&q=${query}&hl=en&gl=us&api_key=${api_key}&start=${pageIndex * 100}`

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
        
        const toReturn = {
            search_information: response.search_information,
            results: results
        };

        toReturn.search_information.total_results = results.length

        return toReturn;

    } catch (error) {
      console.log(error);
     }
}

const searchProductPagesAsync = async (query, pageIndex) => {
    try {
        const {data:response} = await axios.get(getSerpUrlPages(query, pageIndex));
        
        const results = response.organic_results.filter(item => item.rich_snippet?.top?.detected_extensions?.price)
        
        const toReturn = {
            search_information: response.search_information,
            results: results
        };

        toReturn.search_information.total_results = results.length

        return toReturn;

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

const getProductsWithPagination = async (query) => {
    let data = {
        search_info: {
            query_displayed: '',
            total_results: 0,
            page_number: 0
        },
        results: []
    };
    let q = '';
    const storeUrls = [
        "walmart.com",
        "amazon.com",
        "target.com"
    ];
    
    storeUrls.forEach((url, index) => q = query += `+${index !== 0 ? 'OR' : ''}+site%3A${url}`);
    
    for await (const i of [0, 1, 2]) {
        let result = await searchProductPagesAsync(q, i);

        data.search_info.query_displayed = result.search_information.query_displayed;        
        data.search_info.page_number = result.search_information.page_number;        
        data.results.push(...result.results);
    };

    data.search_info.total_results = data.results.length;

    return data;

}

 exports.search = searchStoreForProduct;
 exports.getStores = getProductAllStores;
 exports.inOne = getProductAllStoresInOne;
 exports.withPagination = getProductsWithPagination;