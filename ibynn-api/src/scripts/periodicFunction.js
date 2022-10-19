import { createRequire } from "module";
const require = createRequire(import.meta.url);
import axios  from "axios"
// const json from `./json/categories.json`
const cats = require("../../json/categories.json");

export const callApi = () => {
    const data = cats.data;

    data.forEach(i => {
        if (i.children) {
            i.children.forEach(async (x) => {
                try {
                    const urlSearchParams = new URLSearchParams(x.slug);
                    const params = Object.fromEntries(urlSearchParams.entries());
                    const sortBy = params['sortBy']
                    const url = `https://api.ibynn.com/shopping?q=${params['/search?q']}${ sortBy ? '&sortBy=' + sortBy : ''}`;
                    await axios.get(url);

                    console.log(url)
                } catch (error) {
                    console.log(error)
                }
            })
        }
    })

    return data;
}