import React, { FC, useContext } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link, useHistory } from "react-router-dom";
import explore1Svg from "images/collections/explore1.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import DataContext from "context/DataContext/DataContext";

export interface CardCategory4Props {
  className?: string;
  featuredImage?: string;
  bgSVG?: string;
  name: string;
  desc: string;
  color?: string;
  category?: any;
}

const CardCategory4: FC<CardCategory4Props> = ({
  className = "",
  bgSVG = explore1Svg,
  name,
  desc,
  color = "bg-rose-50",
  category,
}) => {
  const dc = useContext<any>(DataContext);
  const history = useHistory();
  const url = new URL(category.slug, 'https://ibynn.com');
  const query = url.searchParams.get('q');
  const sort_by = url.searchParams.get('sortBy');

  const handleClick = () => {
    dc.setActiveCategory(category,query);
    history.push('/page-collection');
  }
  return (
    <div
    className={`nc-CardCategory relative w-full aspect-w-12 aspect-h-8 h-0 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 group hover:nc-shadow-lg transition-shadow ${className}`}
      data-nc-id="CardCategory4"
    >
      {!(category?.children?.length > 0) && <Link to={`/product-collection?q=${query}${sort_by ? '&sort_by='+sort_by : ''}`} className="block z-10 absolute w-full h-full"></Link>}
          {category?.children?.length > 0 && <div onClick={handleClick}  className="block z-10 absolute w-full h-full"></div>}
      <div>
        <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
          <img src={bgSVG} alt="" />
        </div>

        <div className="absolute inset-5 sm:inset-8 flex flex-col justify-between">
          

          <div className="">
            <span
              className={`block mb-2 text-sm text-slate-500 dark:text-slate-400`}
            >
              {desc}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-semibold`}>{name}</h2>
          </div>

          <Link
            to={"/page-collection"}
            className="flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors"
          >
            <span>See Collection</span>
            <ArrowRightIcon className="w-4 h-4 ml-2.5" />
          </Link>
        </div>
      </div>

      <Link to={"/page-collection"}></Link>
    </div>
  );
};

export default CardCategory4;
