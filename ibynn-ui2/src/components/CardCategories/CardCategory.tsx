import React, { FC, useContext } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link, useHistory } from "react-router-dom";
import explore1Svg from "images/collections/explore1.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import DataContext from "context/DataContext/DataContext";

export interface CardCategoryProps {
  className?: string;
  featuredImage?: string;
  bgSVG?: string;
  name: string;
  desc: string;
  color?: string;
  category?: any;
}

const CardCategory: FC<CardCategoryProps> = ({
  className = "shadow-xl",
  bgSVG = explore1Svg,
  name,
  category,
  color = "bg-rose-50",
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
    <div
      className={`nc-CardCategory relative w-full aspect-w-12 aspect-h-8 h-0 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 group hover:nc-shadow-lg transition-shadow ${className}`}
      data-nc-id="CardCategory"
    >
      <div>
        <div className="absolute bottom-0 right-0 max-w-[225px] opacity-80">
          <img src={bgSVG} alt="" />
        </div>

        <div className="absolute inset-5 sm:inset-8 flex flex-col justify-between">

          <div className="">
            <h2 className={`text-2xl sm:text-3xl font-semibold`}>{name}</h2>
          </div>
          {!(category?.children?.length > 0) && <Link to={`/product-collection?q=${query}${sort_by ? '&sort_by='+sort_by : ''}`} className="block z-10 absolute w-full h-full"></Link>}
          {category?.children?.length > 0 && <div onClick={handleClick}  className="block z-10 absolute w-full h-full"></div>}

          <div
            className="flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors"
          >
            <span>See Collection</span>
            <ArrowRightIcon className="w-4 h-4 ml-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
