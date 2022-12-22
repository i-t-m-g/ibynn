import React, { FC, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NcImage from "shared/NcImage/NcImage";
import LikeButton from "./LikeButton";
import Prices from "./Prices";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { Product, PRODUCTS } from "data/data";
import { StarIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import BagIcon from "./BagIcon";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";
import ModalQuickView from "./ModalQuickView";
import ProductStatus from "./ProductStatus";

export interface ProductCardProps {
  className?: string;
  data?: any;
  isLiked?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  className = "",
  data,
  isLiked,
}) => {
  const {
    extracted_price,
    reviews,
    rating,
    thumbnail,
    product_id,
  } = data;

  const title = data.title.length > 55 ? data.title.slice(0, 55)+'...' : data.title;
  const [showModalQuickView, setShowModalQuickView] = useState(false);
  const [product, setProduct] = useState<any>();

  const handleClick = () => {
    fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/compare?product_id=${product_id}`)
      .then(res => res.json())
      .then(product => setProduct(product));

    setShowModalQuickView(true);
  };

  const renderGroupButtons = () => {
    return (
      <div className="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <ButtonSecondary
          className="ml-1.5 bg-white hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg"
          fontSize="text-xs"
          sizeClass="py-2 px-4"
          onClick={handleClick}
        >
          <ArrowsPointingOutIcon className="w-3.5 h-3.5" />
          <span className="ml-1">Quick view</span>
        </ButtonSecondary>
      </div>
    );
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`nc-ProductCard relative flex flex-col bg-transparent h-full ${className}`}
        data-nc-id="ProductCard"
      >

        {/* IMAGE */}
        <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
            <NcImage
              containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0"
              src={thumbnail}
              className="object-cover w-full h-full drop-shadow-xl"
            />

          {/* <ProductStatus status={status} /> */}

          <LikeButton liked={isLiked} className="absolute top-3 right-3 z-10" />

          {renderGroupButtons()}
        </div>

        {/* TITLE INFO */}
        <div className="space-y-4 px-2.5 pt-5 pb-2.5 h-1/4 flex flex-col justify-between">
          <div className="">
            <h2
              className={`nc-ProductCard__title text-base cursor-pointer font-semibold transition-colors`}
            >
              {title}
            </h2>
          </div>

          <div className="flex justify-between items-end ">
            <Prices price={extracted_price} />
            <div className="flex items-center mb-0.5">
              <StarIcon className="w-5 h-5 pb-[1px] text-amber-400" />
              <span className="text-sm ml-1 text-slate-500 dark:text-slate-400">
                {(rating).toFixed(1)} (
                {reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICKVIEW */}
      <ModalQuickView
        extracted_price={extracted_price}
        type={'product'}
        product={product}
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      />
    </>
  );
};

export default ProductCard;
