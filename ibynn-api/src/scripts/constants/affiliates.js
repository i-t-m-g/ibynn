export const affiliateLinkAdditions = {
    "amazon": '&source=ps-sl-shoppingads-lpcontext&amp;ref_=fplfs&amp;psc=1&amp;smid=AWC0B5BDSBDO5&_encoding=UTF8&tag=ibynndotcom-20&linkCode=ur2&linkId=21d3b60bc8b7a0cff239c48ed5cbb0be&camp=1789&creative=9325'
}

export const makeAffiliateLink = {
    amazon: (url) => `${url}&source=ps-sl-shoppingads-lpcontext&amp;ref_=fplfs&amp;psc=1&amp;smid=AWC0B5BDSBDO5&_encoding=UTF8&tag=ibynndotcom-20&linkCode=ur2&linkId=21d3b60bc8b7a0cff239c48ed5cbb0be&camp=1789&creative=9325`,
    walmart: (url) => `https://goto.walmart.com/c/2073237/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=${url}`
};

export const affiliates = {
    walmart: 'walmart',
    amazon: 'amazon'
}

// WALMART === https://goto.walmart.com/c/2073237/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=

//             https://goto.walmart.com/c/2073237/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=https://www.walmart.com/ip/Watercolor-Cute-Gnomes-License-Plate-Frame-Decorative-Aluminum-Car-Tag-Frames-2-Pack-Universal-Car-License-Plate-Covers-with-2-Holes-and-Screws/5154158992?wmlspartner=wlpa&selectedSellerId=101125940

//             https://www.walmart.com/ip/Watercolor-Cute-Gnomes-License-Plate-Frame-Decorative-Aluminum-Car-Tag-Frames-2-Pack-Universal-Car-License-Plate-Covers-with-2-Holes-and-Screws/5154158992?wmlspartner=wlpa&selectedSellerId=101125940


//https://www.walmart.com/ip/Country-Time-Lemonade-Multiserve-Kids-Drink-96-fl-oz-Bottle/959203873%3Fwmlspartner%3Dwlpa%26selectedSellerId%3D101624140&opi=95576897&sa=U&ved=0ahUKEwiAgcTKuv6EAxUUG9AFHbmCCTQQ2ykIQw&usg=AOvVaw22ohO7qoVsE7_Z9wHEHec-

//https://www.walmart.com/ip/Country-Time-Lemonade-Multiserve-Kids-Drink-96-fl-oz-Bottle/959203873?wmlspartner=wlpa&selectedSellerId=101624140

//https://www.walmart.com/ip/Country-Time-Lemonade-Multiserve-Kids-Drink-96-fl-oz-Bottle/959203873?wmlspartner=wlpa&selectedSellerId=101624140&opi=95576897&sa=U&ved=0ahUKEwiAgcTKuv6EAxUUG9AFHbmCCTQQ2ykIQw&usg=AOvVaw22ohO7qoVsE7_Z9wHEHec-