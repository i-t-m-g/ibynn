import React, { useContext, useState, FC, createContext} from 'react'

const DataContext: any = createContext(null);

export function DataContextProvider({children}: any) {
    {/* HOME_PRODUCTS STATE */}
    const [_homeProducts, _setHomeProducts] = useState<any[]>();
    const parsed_products = JSON.parse(window.localStorage.getItem('HOME_PRODUCTS')||'[]');
    const homeProducts = parsed_products.value;
    
    const setHomeProducts = (state:any) => {
        const item = {
            value: state,
            expiry: new Date().getDate()+7
        };
        const stringifiedState = JSON.stringify(item);
        window.localStorage.setItem('HOME_PRODUCTS', stringifiedState);
        _setHomeProducts(state);
    };

    const getHomeProducts = async (query:string, sort_by:'amount'|'massVolume', tbs:string) => {
        if (parsed_products.expiry <= new Date().getDate()) {
            window.localStorage.removeItem('HOME_PRODUCTS');
            return;
        }
        fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/shopping?q=${query}${sort_by ? "&sortBy="+sort_by : ""}${'&tbs='+tbs}`)
          .then((res) => res.json())
          .then((products) => setHomeProducts(products.shopping_results));
    };
    {/* HOME_PRODUCTS STATE */}
    
    {/* LOADING STATE */}
    const [loading, setLoading] = useState(true);

    {/* LOADING STATE */}

    {/* PRODUCTS STATE */}
    const [products, _setProducts] = useState<any[]>([]);
    


    const setProducts = (state:any) => {
        const stringifiedState = JSON.stringify(state);
        window.localStorage.setItem('ACTIVE_PRODUCTS', stringifiedState);
        _setProducts(state);
    };




    const fetchProducts = (query:string, sort_by:'amount'|'massVolume',tbs:string) => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/shopping?q=${query}${sort_by ? "&sortBy="+sort_by : ""}${'&tbs='+tbs}`)
          .then((res) => res.json())
          .then((products) => {setProducts(products.shopping_results);setLoading(false)});
    };
    {/* PRODUCTS STATE */}

    {/* ACTIVE_CATEGORY STATE */}
    const [_activeCategory, _setActiveCategory] = useState<any[]>();
    
    const activeCategory = (key:any) => JSON.parse(window.localStorage.getItem(key)||'[]');

    const setActiveCategory = (state:any,key:any) => {
        const stringifiedState = JSON.stringify(state);
        window.localStorage.setItem(key, stringifiedState);
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
        loading,
        setLoading,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}

export default DataContext;