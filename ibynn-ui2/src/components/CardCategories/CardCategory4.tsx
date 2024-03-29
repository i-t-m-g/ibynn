import React, { FC, useContext, useState } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link, useHistory } from "react-router-dom";
import explore1Svg from "images/collections/explore1.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import DataContext from "context/DataContext/DataContext";
import ModalQuickView from "components/ModalQuickView";

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
  const history = useHistory();
  const dc = useContext<any>(DataContext);
  const [showModalQuickView, setShowModalQuickView] = useState(false);
  const url = new URL(category.slug, 'https://ibynn.com');
  const query = url.searchParams.get('q');
  const sort_by = url.searchParams.get('sortBy');
  const tbs = url.searchParams.get('tbs');

  function handleClick() {
    if (category?.children?.length > 0) {
      console.log(query)
      history.push(`/page-collection/${query}${'&tbs='+tbs}`);
    }
    else {
      console.log(query)
      history.push(`/product-collection?q=${query}${sort_by ? '&sort_by='+sort_by : ''}${'&tbs='+tbs}`);
    }
    
  };
  return (
    <div
    className={`nc-CardCategory relative w-full aspect-w-14 aspect-h-16 h-0 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 group hover:nc-shadow-lg transition-shadow ${className}`}
      data-nc-id="CardCategory4"
      onClick={handleClick}
    >
      {/* {!(category?.children?.length > 0) && <Link to={`/product-collection?q=${query}${sort_by ? '&sort_by='+sort_by : ''}`} className="block z-10 absolute w-full h-full"></Link>}
          {category?.children?.length > 0 && <div onClick={handleClick}  className="block z-10 absolute w-full h-full"></div>} */}
      <div>
        <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
          {/* <img src={bgSVG} alt="" /> */}
        </div>

        <div className="absolute inset-3 flex flex-col justify-between">
          

          <div className="">
            <span
              className={`block mb-2 text-sm text-slate-500 dark:text-slate-400`}
            >
              {desc}
            </span>
            <h2 className={`text-xl font-semibold`}>{name}</h2>
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
      {category?.children?.length > 0 &&<ModalQuickView
        type={'category'}
        category={category}
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      />}
    </div>
  );
};

export default CardCategory4;
