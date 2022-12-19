import React, { useContext, useState, FC, createContext} from 'react'

const DataContext: any = createContext(null);

export function DataContextProvider({children}: any) {
    const [activeCategory, setActiveCategory] = useState<any[]>();
    const [products, setProducts] = useState<any[]>();


    const value = {
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