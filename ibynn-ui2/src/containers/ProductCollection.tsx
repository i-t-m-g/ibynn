import React, { FC, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionSliderCollections from "components/SectionSliderLargeProduct";
import SectionPromo1 from "components/SectionPromo1";
import ProductCard from "components/ProductCard";
import TabFilters from "./TabFilters";
import { PRODUCTS } from "data/data";
import DataContext from "context/DataContext/DataContext";
import { useLocation, useParams } from "react-router-dom";
import PlaceIcon from "shared/NcImage/PlaceIcon";
import SearchBar from "components/SearchBar";

export interface ProductCollectionProps {
  className?: string;
}

const ProductCollection: FC<ProductCollectionProps> = ({ className = "" }) => {
  const dc = useContext<any>(DataContext);
  const params = useLocation();
  const url = new URL(params.pathname+params.search, 'https://ibynn.com');
  const query = url.searchParams.get('q');
  const sort_by = url.searchParams.get('sort_by');
  const tbs = url.searchParams.get('tbs');
  const [activeResults, setActiveResults] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dc.setLoading(true);
    fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/shopping?q=${query}${sort_by ? "&sortBy="+sort_by : ""}${'&&tbs=' + tbs}`)
      .then((res) => res.json())
      .then((products) => {dc.setProducts(products.shopping_results); dc.setLoading(false);});
  }, [query]);


  useEffect(() => {
    setActiveResults(dc.products);
  }, [dc.products, query]);

  
  return (
    <div
      className={`nc-ProductCollection ${className}`}
      data-nc-id="ProductCollection"
    >
      <Helmet>
        <title>Ibynn | Find the best products, at the best prices, with IBYNN</title>
      </Helmet>
      <SearchBar array={dc.products} setActiveResults={setActiveResults} />
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {query}
            </h2>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main className="justify-center flex">
            {dc.loading ? <ButtonPrimary className="place-self-center" loading >Loading...</ButtonPrimary> :
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {activeResults?.map((item:any, index:any) => (
                <ProductCard data={item} key={index} />
              ))}
            </div>}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;