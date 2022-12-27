import React, { FC, useContext } from "react";
import { Helmet } from "react-helmet";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionSliderCollections from "components/SectionSliderLargeProduct";
import SectionPromo1 from "components/SectionPromo1";
import ProductCard from "components/ProductCard";
import TabFilters from "./TabFilters";
import { PRODUCTS } from "data/data";
import DataContext from "context/DataContext";
import CategoryCard from "components/CategoryCard";
import CardCategory2 from "components/CardCategories/CardCategory2";
import { COLORS, IMAGES } from "components/SectionSliderCategories/constants";

export interface PageCollectionProps {
  className?: string;
}

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {
  const dc = useContext<any>(DataContext);

  console.log(dc.activeCategory);

  return (
    <div
      className={`nc-PageCollection ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Ibynn | Find The Lowest Prices From Top Brands</title>
      </Helmet>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {dc.activeCategory && dc.activeCategory?.name}
            </h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
              We not only help you design exceptional products, but also make it
              easy for you to share your designs with more like-minded people.
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {/* LOOP ITEMS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {dc.activeCategory?.children?.map((item:any, index:any) => (
                <CategoryCard
                  category={item}
                  name={item.name}
                  desc={item.children?.length > 0 ? `${item.children.length} categories` : ''}
                  bgClass={COLORS[index]}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCollection;
