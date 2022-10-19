import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { Products } from "./entities/product";

export const searchForProduct = async (query: ParsedUrlQuery) => {
    try {
        
        const { data, status } = await axios.get<Products>(
            `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/shopping?q=${query.q}${query.sortBy ?`&sortBy=${query.sortBy}`: ''}${query.min_price ?`&min_price=${query.min_price}`: ''}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        

        // let sortedData = data.shopping_results.sort((a,b) => {
        //     if (a.title) {
        //         if (a.title.length > 75) {
        //            a.title = a.title.substring(0, 75) + '...';
        //         }
        //     }

        //     if (a.extracted_price && b.extracted_price) return b.extracted_price - a.extracted_price
        //     return 0;
        // });
        
        // sortedData = sortedData.sort((a, b) => {
        //     if (a.unit_price && b.unit_price) return a.unit_price - b.unit_price
        //     if (!b.unit_price) return -1
        //     if (!a.unit_price) return 1

        //     return 0;
        //     }
        // );

        // data.shopping_results = sortedData;

        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            
        } else {
            console.log('unexpected error: ', error);
            
        }
        return new Products()
    }
}
