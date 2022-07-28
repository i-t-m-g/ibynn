import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { Products } from "./entities/product";

export const searchForProduct = async (query: string|string[]|undefined) => {
    try {
        
        const { data, status } = await axios.get<Products>(
            `https:/api.ibynn.com/searchAllStores?q=${query}`,
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
