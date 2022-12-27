import React, { useContext, useState, FC, createContext} from 'react'

const DataContext: any = createContext(null);

export function DataContextProvider({children}: any) {
    {/* HOME_PRODUCTS STATE */}
    const [_homeProducts, _setHomeProducts] = useState<any[]>();
    const parsed_products = JSON.parse(window.localStorage.getItem('HOME_PRODUCTS')||'[]');
    const homeProducts = parsed_products.value;
    
    const setHomeProducts = (state:any) => {
        console.log(parsed_products)
        const item = {
            value: state,
            expiry: new Date().getDate()+7
        };
        const stringifiedState = JSON.stringify(item);
        window.localStorage.setItem('HOME_PRODUCTS', stringifiedState);
        _setHomeProducts(state);
    };

    const getHomeProducts = async (query:string, sort_by:'amount'|'massVolume') => {
        if (parsed_products.expiry <= new Date().getDate()) {
            window.localStorage.removeItem('HOME_PRODUCTS');
            return;
        }
        fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/shopping?q=${query}${sort_by ? "&sortBy="+sort_by : ""}`)
          .then((res) => res.json())
          .then((products) => setHomeProducts(products.shopping_results));
    };
    {/* HOME_PRODUCTS STATE */}
    
    {/* PRODUCTS STATE */}
    const [products, setProducts] = useState<any[]>();
    const fetchProducts = (query:string, sort_by:'amount'|'massVolume') => {
        if (products && products.length > 0 ) setProducts([]);
        fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/shopping?q=${query}${sort_by ? "&sortBy="+sort_by : ""}`)
          .then((res) => res.json())
          .then((products) => setProducts(products.shopping_results));
    };
    {/* PRODUCTS STATE */}

    {/* ACTIVE_CATEGORY STATE */}
    const [_activeCategory, _setActiveCategory] = useState<any[]>();
    const activeCategory = JSON.parse(window.localStorage.getItem('ACTIVE_CATEGORY')||'[]');
    const setActiveCategory = (state:any) => {
        const stringifiedState = JSON.stringify(state);
        window.localStorage.setItem('ACTIVE_CATEGORY', stringifiedState);
        _setActiveCategory(state);
    };
    {/* ACTIVE_CATEGORY STATE */}
    
    const value = {
        getHomeProducts,
        homeProducts,
        setHomeProducts,
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