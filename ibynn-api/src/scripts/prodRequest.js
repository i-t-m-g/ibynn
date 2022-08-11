const { default: axios } = require("axios");
const { getImage, getImageCheerio } = require("./scrapeImg");
const dotenv = require('dotenv');
dotenv.config();
process.setMaxListeners(0);

const api_key = process.env.API_KEY;
const getSerpUrlPages = (query = 'iphone+12', pageIndex) => `https://serpapi.com/search.json?num=100&q=${query}&hl=en&gl=us&api_key=${api_key}&start=${pageIndex * 100}`
const storeImages = {
        target: "https://www.freepnglogos.com/uploads/target-png-logo/target-logo-photo-3.png",
        amazon: "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png",
        walmart: "https://www.freepnglogos.com/uploads/walmart-logo-24.jpg"
};

const storeNames = [
    "target",
    "amazon",
    "walmart"
]



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


    const sortedArr = data.results.sort((a, b) => {
        const aPrice = a.rich_snippet?.top?.detected_extensions?.price;
        const bPrice = b.rich_snippet?.top?.detected_extensions?.price;

        return aPrice - bPrice;

    })

    data.results = sortedArr;

    let i = 0;
    for await (const prod of data.results) {
        // data.results[i].position = i;
        storeNames.forEach(n => {
            if (prod.link.includes(n)) {
                data.results[i].icon = storeImages[n];
            }
        })

        // if (!prod.thumbnail && prod.link.includes('target')) {
        //     const thumbnail = await getImageCheerio(prod.link);
        //     data.results[i].thumbnail = thumbnail;
        // }

        i++;
    }
    
    return data;

}

 exports.getProductsWP = getProductsWithPagination;
