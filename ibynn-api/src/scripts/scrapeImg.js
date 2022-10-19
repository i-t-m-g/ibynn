const { default: axios } = require("axios");
const cheerio = require("cheerio");
const puppeteer = require('puppeteer');

export const getImageWithPuppet = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const img = await page.evaluate(() => {
            return [...document.getElementsByTagName('img')]
                .sort((a, b) => b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight)[0].src;
        });

        await browser.close();   

        return img;

    } catch (error) {
        console.log(error)   
    }
}

export const getImageCheerio = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'                
            }
        });
        const html = response.data;
        const $ = cheerio.load(html);
        let thumbnail;

        for await (const el of $('img')) {
            thumbnail = $(el).attr('src')
        }

        return thumbnail;
    } 
    catch (error) {
        console.log(error)
    }
}
