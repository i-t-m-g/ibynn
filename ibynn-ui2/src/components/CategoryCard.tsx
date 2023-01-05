import React, { FC, useContext, useState } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ModalQuickView from "./ModalQuickView";
import DataContext from "context/DataContext/DataContext";

export interface CategoryCardProps {
  className?: string;
  ratioClass?: string;
  ratioClass2?: string;
  bgClass?: string;
  featuredImage?: string;
  name: string;
  desc?: string;
  category: any;
}

const CategoryCard: FC<CategoryCardProps> = ({
  className = "",
  ratioClass = "aspect-w-5 aspect-h-3",
  bgClass = "bg-orange-50",
  featuredImage = ".",
  name,
  desc,
  category,
}) => {
    const dc = useContext<any>(DataContext);
    const [showModalQuickView, setShowModalQuickView] = useState(false);
    const url = new URL(category.slug, 'https://ibynn.com');
    const query = url.searchParams.get('q');
    const sort_by = url.searchParams.get('sortBy');

    function handleClick() {
      setShowModalQuickView(true);
      return '';
    };

  return (
    <div className="relative">
      {!(category?.children?.length > 0) && <Link to={`/product-collection?q=${query}${sort_by ? '&sort_by='+sort_by : ''}`} className="block z-10 absolute w-full h-full"></Link>}
      {category?.children?.length > 0 && <div onClick={handleClick} className="block cursor-pointer z-10 absolute w-full h-full"></div>}
      <div
        className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group ${ratioClass} ${bgClass}`}
      >
          <div className="absolute inset-5 sm:inset-8 flex flex-col justify-self-auto">
          
          <div className="">
            <span
              className={`block mb-2 text-sm text-slate-500 dark:text-slate-400`}
            >
              {desc}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-semibold`}>{name}</h2>
          </div>

         
        </div>
      </div>
      {category?.children?.length > 0 &&<ModalQuickView
        type={'category'}
        category={category}
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      />}
    </div>
  );
};

export default CategoryCard;
