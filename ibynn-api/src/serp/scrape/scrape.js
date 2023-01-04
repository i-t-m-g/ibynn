import axios from "axios";
import { load } from "cheerio";

const getProdPage = async (url) => (await axios.get(url)).data;

export const getCheerio = async (url) => {
    const list = [];
    const html = await getProdPage(url);
    const $ = load(html);

    $(html).find('.xcR77').each((index, element) => list.push(index));
    return list
}
