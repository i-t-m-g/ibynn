import React, { useContext, useState, FC, createContext} from 'react'

const DataContext: any = createContext(null);

export function DataContextProvider({children}: any) {
    const [_activeCategory, _setActiveCategory] = useState<any[]>();
    const [products, setProducts] = useState<any[]>();

    const fetchProducts = (query:string, sort_by:'amount'|'massVolume') => {
        if (products && products.length > 0 ) setProducts([]);
        fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/shopping?q=${query}${sort_by ? "&sortBy="+sort_by : ""}`)
          .then((res) => res.json())
          .then((products) => setProducts(products.shopping_results));
    };

    const setActiveCategory = (state:any) => {
        const stringifiedState = JSON.stringify(state);
        window.localStorage.setItem('ACTIVE_CATEGORY', stringifiedState);
        _setActiveCategory(state);
    };

    const activeCategory = JSON.parse(window.localStorage.getItem('ACTIVE_CATEGORY')||'');



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