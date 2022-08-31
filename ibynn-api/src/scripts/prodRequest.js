const { default: axios } = require("axios");
const { getImage, getImageCheerio } = require("./scrapeImg");
const convert = require('convert-units')
const { storeImages, storeNames, per_type, measurements } = require("./constants/constants");
const dotenv = require('dotenv');
const { compareDocumentPosition } = require("domutils");
dotenv.config();
process.setMaxListeners(0);

const api_key = process.env.API_KEY;
const getShoppingUrl = (query = 'iphone+12') => `https://serpapi.com/search.json?q=${query}&engine=google&google_domain=google.com&gl=us&hl=en&tbs=mr:1,merchagg:g113872638|g8299768|g784994|m114193152|m7388148|m125210027|m120798572|m127713402|m431991540|m463001233|m10046,avg_rating:400&tbm=shop&api_key=${api_key}`
const getSerpUrlPages = (query = 'iphone+12', pageIndex) => `https://serpapi.com/search.json?num=100&q=${query}&hl=en&gl=us&api_key=${api_key}&start=${pageIndex * 100}`

//reverses a string
String.prototype.reverse = function () {
	return this.split('').reverse().join('');
};

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

const getShopping = async (query, sortBy = "") => {
    try {
        const {data:response} = await axios.get(getShoppingUrl(query));
        let results = {};
        results.search_information = response.search_information;
        results.search_metadata = response.search_metadata;
        
        results.shopping_results = 
            response.inline_shopping_results ? 
            [...response.inline_shopping_results, ...response.shopping_results] : 
            response.shopping_results;

        results.shopping_results = addIcons(results.shopping_results);
        results.shopping_results = sortArrByPrice(results.shopping_results, sortBy);

        return results;
    } catch (error) {
        return error;
    }        
}

const addIcons = (arr) => {
    if (arr) {
        let i = 0;
        for (const prod of arr) {
            storeNames.forEach(n => {
                if (prod.source.includes(n)) {
                    arr[i].icon = storeImages[n];
                }
            })
            i++;
        }
    }
    
    return arr;
}

const sortArrByPrice = (arr, sortBy, inEach) => {
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
                        const reversedPattern = new RegExp(`\\d+\\.?\\d*(?=(\\s|-)*${a.reverse()})`);

                        
                        const match = title.match(pattern);
                        const reversedMatch = reversedTitle.match(reversedPattern);

                        if (match) calculations(item, match[0], sortBy, a)
                        if (reversedMatch) calculations(item, match[0].reverse(), sortBy, a)
                        console.log("hello")
                        console.log("hello")
                        console.log("hello")
                        console.log("hello")
                    } catch (error) {
                        console.log(error)
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
}


const calculations = (item, match, sortBy, unit) => {
    let unit_price;
    if (sortBy === 'amount') 
    {
        unit_price = (item.extracted_price / parseFloat(match)).toFixed(2);
        item.unit_price = parseFloat(unit_price);
        item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`
    } else if (sortBy === 'weight')
    {
        if (unit) {
            
            const weight = convert(match).from(unit).to('oz')
            unit_price = (item.extracted_price / parseFloat(weight)).toFixed(2);
            item.unit_price = parseFloat(unit_price);
            item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`
        }

    } else if (sortBy === 'volume') 
    {
        if (unit) {
            const volume = convert(match).from(unit === 'floz'||'fl oz' ? 'fl-oz' : unit).to('fl-oz')
            unit_price = (item.extracted_price / parseFloat(volume)).toFixed(2);
            item.unit_price = parseFloat(unit_price);
            item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`

        }
    } else if (sortBy === 'massVolume') 
    {
        if (unit === 'floz' || unit === 'fl oz') unit = 'fl-oz';
        
        if (unit) {
            let massVolume;


            if (convert().describe(unit.replace(/\s/g, '')).measure === 'mass') {
                massVolume = convert(match).from(unit.replace(/\s/g)).to('oz');
            }

            if (convert().describe(unit.replace(/\s/g, '')).measure === 'volume') {
                massVolume = convert(match).from(unit === 'floz'||'fl oz' ? 'fl-oz' : unit).to('fl-oz');
            }

            unit_price = (item.extracted_price / parseFloat(massVolume)).toFixed(2);
            item.unit_price = parseFloat(unit_price);
            item.unit_price_displayed = `$${unit_price}/${per_type[sortBy]}`

        }
    }
}

exports.getShopping = getShopping;
exports.getProductsWP = getProductsWithPagination;
