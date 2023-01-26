import React, { FC, useContext, useState } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link, useHistory } from "react-router-dom";
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
  icon? : string;
  category: any;
}

const CategoryCard: FC<CategoryCardProps> = ({
  className = "",
  ratioClass = "aspect-w-5 aspect-h-5",
  bgClass = "bg-orange-50",
  featuredImage = ".",
  name,
  desc,
  icon,
  category,
}) => {
    const history = useHistory();
    const dc = useContext<any>(DataContext);
    const [showModalQuickView, setShowModalQuickView] = useState(false);
    const url = new URL(category.slug, 'https://ibynn.com');
    const query = url.searchParams.get('q');
    const sort_by = url.searchParams.get('sortBy');

    function handleClick() {
      if (category?.children?.length > 0) {
        console.log(query)
        history.push(`/page-collection/${query}`);
      }
      else {
        console.log(query)
        history.push(`/product-collection?q=${query}${sort_by ? '&sort_by='+sort_by : ''}`);
      }
      
    };


  return (
    <div className="relative" onClick={handleClick}>
      {/* {!(category?.children?.length > 0) && <Link replace to={`/product-collection?q=${query}${sort_by ? '&sort_by='+sort_by : ''}`} className="block z-10 absolute w-full h-full"></Link>}
      {category?.children?.length > 0 && <Link replace  to={`/page-collection/${query}`} className="block z-10 absolute w-full h-full"></Link>} */}
      {/* {category?.children?.length > 0 && <div onClick={handleClick} className="block cursor-pointer z-10 absolute w-full h-full"></div>} */}
      <div
        className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group  ${ratioClass}`}
      >
            <div className="">

              <NcImage
                containerClassName="w-full h-full flex justify-center"
                src={icon}
                className="object-cover rounded-2xl"
              />
            </div>
          <div className="absolute inset-5 sm:inset-8 flex flex-col justify-self-auto">
          
      

         
        </div>
      </div><div className="mt-5 flex-1 text-center">
        <h2 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          {name}
        </h2>
        <span className="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          {desc}
        </span>
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
