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
import CategoryCard from "components/CategoryCard";
import CardCategory2 from "components/CardCategories/CardCategory2";
import { COLORS, IMAGES } from "components/SectionSliderCategories/constants";
import { useLocation, useParams } from "react-router-dom";

export interface PageCollectionProps {
  className?: string;
}

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {
  const dc = useContext<any>(DataContext);

  const {pathname} = useLocation();
  const key = pathname.split("/")[2];
  const [category, setCategory] = useState<any>(dc.activeCategory(key));

  const handleChildren = (item:any) => {
    const url = new URL(item.slug, 'https://ibynn.com');
    const query = url.searchParams.get('q');
    console.log(query)
    if (item?.children?.length > 0) dc.setActiveCategory(item,query?.trim());
    setCategory(item);
  };

  useEffect(() => {
    setCategory(dc.activeCategory(key))
    console.log(dc.activeCategory("Perfume "))
  },[pathname])


  return (
    <div
      className={`nc-PageCollection ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Ibynn | Find the best products, at the best prices, with IBYNN</title>
      </Helmet>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {category && category?.name}
            </h2>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {/* LOOP ITEMS */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {category?.children?.map((item:any, index:any) => (
                <div onClick={() => handleChildren(item)}>
                <CategoryCard
                  category={item}
                  name={item.name}
                  icon={item.image.desktop.url}
                  desc={item.children?.length > 0 ? `${item.children.length} categories` : ''}
                  bgClass={COLORS[index]}
                />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCollection;
