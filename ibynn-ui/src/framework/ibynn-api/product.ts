import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { Products } from "src/pages";

export const searchForProduct = async (query: string|string[]|undefined) => {
    try {
        
        const { data, status } = await axios.get<Products>(
            `http://localhost:9476/searchAllStores?q=${query}`,
            {
                headers: {
                Accept: 'application/json',
                },
            },
        );

        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            
        } else {
            console.log('unexpected error: ', error);
            
        }
    }
}