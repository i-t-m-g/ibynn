import React, { useContext, useState, FC, createContext} from 'react'

const DataContext: any = createContext(null);

export function DataContextProvider({children}: any) {
    const [activeCategory, setActiveCategory] = useState<any[]>();
    const [products, setProducts] = useState<any[]>();

    const fetchProducts = (query:string, sort_by:'amount'|'massVolume') => {
        if (products && products.length > 0 ) setProducts([]);
        fetch(`${process.env.REST_API_ENDPOINT}/shopping?q=${query}&sortBy=${sort_by}`)
          .then((res) => res.json())
          .then((products) => setProducts(products.shopping_results));
    };



    const value = {
        fetchProducts,
        activeCategory,
        setActiveCategory,
        products,
        setProducts,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}

export default DataContext;