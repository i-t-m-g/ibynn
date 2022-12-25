import React, { FC, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionSliderCollections from "components/SectionSliderLargeProduct";
import SectionPromo1 from "components/SectionPromo1";
import ProductCard from "components/ProductCard";
import TabFilters from "./TabFilters";
import { PRODUCTS } from "data/data";
import DataContext from "context/DataContext";
import { useLocation, useParams } from "react-router-dom";
import PlaceIcon from "shared/NcImage/PlaceIcon";

export interface ProductCollectionProps {
  className?: string;
}

const ProductCollection: FC<ProductCollectionProps> = ({ className = "" }) => {
    const dc = useContext<any>(DataContext);
    const params = useLocation();
    const url = new URL(params.pathname+params.search, 'https://ibynn.com');
    const query = url.searchParams.get('q');
    const sort_by = url.searchParams.get('sort_by');

    useEffect(() => {
      dc.fetchProducts(query, sort_by);
    }, []);

    console.log(dc.activeCategory)

  return (
    <div
      className={`nc-ProductCollection ${className}`}
      data-nc-id="ProductCollection"
    >
      <Helmet>
        <title>Ibynn | Find The Lowest Prices From Top Brands</title>
      </Helmet>
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {query}
            </h2>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {dc.products?.length < 1 && <ButtonPrimary loading>Loading...</ButtonPrimary>}

            {/* LOOP ITEMS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {dc.products?.map((item:any, index:any) => (
                <ProductCard data={item} key={index} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;