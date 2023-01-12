import React, { FC, useContext, useState } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link, useHistory } from "react-router-dom";
import { IMAGES } from "components/SectionSliderCategories/constants";
import DataContext from "context/DataContext/DataContext";
import ModalQuickView from "components/ModalQuickView";

export interface SubSubCatCard {
  className?: string;
  ratioClass?: string;
  bgClass?: string;
  featuredImage?: string;
  name: string;
  desc?: string;
  icon? : string;
  category: any;
}

const SubSubCatCard: FC<SubSubCatCard> = ({
  className = "",
  ratioClass = "aspect-w-1 aspect-h-1",
  bgClass = "bg-orange-50",
  featuredImage = ".",
  name,
  desc,
  icon,
  category,
}) => {
    const dc = useContext<any>(DataContext);
    const history = useHistory();
    const url = new URL(category.slug, 'https://ibynn.com');
    const query = url.searchParams.get('q');
    const sort_by = url.searchParams.get('sortBy');
  
    const handleClick = () => {
      dc.setActiveCategory(category);
      history.push('/page-collection');
    }

      return (
    <div>
        {!(category?.children?.length > 0) && <Link to={`/product-collection?q=${query}${sort_by ? '&sort_by='+sort_by : ''}`} className="block z-10 absolute w-full h-full"></Link>}
        {category?.children?.length > 0 && <div onClick={handleClick}  className="block z-10 absolute w-full h-full"></div>}
      <div
        className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group ${ratioClass} ${bgClass}`}>
        <div className="pt-14">
          <NcImage
            loading="eager"
            containerClassName="w-full h-full flex justify-center"
            src={featuredImage}
            className="object-cover rounded-2xl"
          />
        </div>
        <span className="opacity-0 lg:group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-5 flex-1 text-center">
        <h2 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          {name}
        </h2>
        <span className="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          {desc}
        </span>
      </div>
    </div>
  );
};

export default SubSubCatCard;
