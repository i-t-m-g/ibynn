import DataContext from 'context/DataContext';
import React, { useContext, useState } from 'react'

export default function SearchBar({array, setActiveResults}:any) {
    const inputClassName = "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const dc = useContext<any>(DataContext);

    const handleChange = (e:any) => {
        setActiveResults(dc.products.filter((prod:any) => {
              return (
                prod.title.toLowerCase().includes(e.target.value.toLowerCase())
              );
            }
          ));
    };


  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <div className="flex text-slate-900 dark:text-slate-200 fixed justify-center w-full z-30">
        <div className="bg-slate-100 dark:bg-slate-800 flex w-11/12 items-center py-2 px-4 shadow-lg rounded-xl h-full">
          {renderMagnifyingGlassIcon()}
          <input
            onChange={handleChange}
            type="search"
            placeholder="Search by brand"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm "
          />
        </div>
        <input type="submit" hidden value="" />
      </div>
    );
  };

  return (
    renderSearchForm()
  )
}
