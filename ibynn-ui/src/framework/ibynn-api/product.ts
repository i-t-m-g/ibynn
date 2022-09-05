import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { Products } from './entities/product';

export const searchForProduct = async (query: ParsedUrlQuery) => {
  try {
    const { data, status } = await axios.get<Products>(
      `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/shopping?q=${query.q}&sortBy=${query.sortBy}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const sortedData = data.shopping_results.sort((a, b) => {
      if (a.extracted_price && b.extracted_price) {
        return a.extracted_price - b.extracted_price;
      }
      return 0;
    });

    data.shopping_results = sortedData;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    } else {
      console.log('unexpected error: ', error);
    }
    return new Products();
  }
};
