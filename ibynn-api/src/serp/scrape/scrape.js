import axios from "axios";
import { load } from "cheerio";

const getProdPage = async (url) => (await axios.get(url)).data;

export const getCheerio = async (url) => {
    const list = [];
    const html = await getProdPage(url);
    const $ = load(html);

    $('.eUQRje').each((i, element) => {
        const product = {
            position: i+1,
            title: '',
            link: '',
            thumbnail: '',
            product_link: '',
            price: 0
        }

        product.link = $(element).find('a').attr('href');
        product.thumbnail = $(element).find('img').attr('src');
        product.title = $(element).parent().find('div.rgHvZc').text();
        product.price = $(element).parent().find('span.HRLxBb').text();
        product.price = $(element).parent().parent().find('span.HRLxBb').text();
        product.product_link = "https://google.com" + $(element).parent().parent().find('a.DKkjqf').attr('href');
        //p9MVp
        list.push(product);
      });

    return list;
}
