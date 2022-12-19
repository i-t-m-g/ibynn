import React, { FC, useContext, useState } from "react";
import NcImage from "shared/NcImage/NcImage";
import { Link } from "react-router-dom";
import ModalQuickView from "./ModalQuickView";
import DataContext from "context/DataContext";

export interface CategoryCardProps {
  className?: string;
  ratioClass?: string;
  bgClass?: string;
  featuredImage?: string;
  name: string;
  desc?: string;
  category: any;
}

const CategoryCard: FC<CategoryCardProps> = ({
  className = "",
  ratioClass = "aspect-w-1 aspect-h-1",
  bgClass = "bg-orange-50",
  featuredImage = ".",
  name,
  desc,
  category,
}) => {
    const dc = useContext<any>(DataContext);
    const [showModalQuickView, setShowModalQuickView] = useState(false);

    const handleClick = () => {
        setShowModalQuickView(true);
    };

  return (
    <div onClick={handleClick}>
      <div
        className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group ${ratioClass} ${bgClass}`}
      >
        <div className="pt-14">
          <NcImage
            containerClassName="w-full h-full flex justify-center"
            src={featuredImage}
            className="object-cover rounded-2xl"
          />
        </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-5 flex-1 text-center">
        <h2 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          {name}
        </h2>
        <span className="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          {desc}
        </span>
      </div>
      {dc.products.length > 0 &&<ModalQuickView
        type={'category'}
        category={category}
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      />}
    </div>
  );
};

export default CategoryCard;
