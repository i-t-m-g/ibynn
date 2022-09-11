const { default: axios } = require("axios");
// const json = require(`./json/categories.json`);
const cats = require("../../json/categories.json")

const callApi = () => {
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

exports.callApi = callApi;