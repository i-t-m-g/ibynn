import React, { FC } from "react";
import LikeButton from "components/LikeButton";
import { StarIcon } from "@heroicons/react/24/solid";
import ReactDOMServer from 'react-dom/server'
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import IconDiscount from "components/IconDiscount";
import Prices from "components/Prices";
import AccordionInfo from "containers/ProductDetailPage/AccordionInfo";
import { Link } from "react-router-dom";
import StoreComparisonTable from "./StoreComparisonTable";

export interface ProductQuickViewProps {
  className?: string;
  product:any;
  extracted_price?:any;
  link?:any;
  source?:any;
  prod_title?:any;
  thumbnail?:any;
  price?:any;
}

const ProductQuickView: FC<ProductQuickViewProps> = ({ className = "", product, extracted_price,link,source,prod_title}) => {
  const { description, media, rating, reviews, title } = product.product_results ? product.product_results : "";

  const renderSectionContent = () => {
    if (!product.product_results) return renderNoResults()
    return (
      <div className="space-y-8 p-5">
        {/* ---------- 1 HEADING ----------  */}
        <div>
          <h2 className="text-2xl font-semibold hover:text-primary-6000 transition-colors">
            <a { ...link } target="_blank">{title}</a>
          </h2>

          <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
            {/* <div className="flex text-xl font-semibold">$112.00</div> */}
            <Prices
              contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
              price={extracted_price}
            />

            <div className="h-6 border-l border-slate-300 dark:border-slate-700"></div>

            <div className="flex items-center">
              <a
                {...link}
                className="flex items-center text-sm font-medium"
              >
                <StarIcon className="w-5 h-5 pb-[1px] text-yellow-400" />
                <div className="ml-1.5 flex">
                  <span>{rating}</span>
                  <span className="block mx-2">·</span>
                  <span className="text-slate-600 dark:text-slate-400 underline">
                    {reviews} reviews
                  </span>
                </div>
              </a>
              <span className="hidden sm:block mx-2.5">·</span>
              <div className="hidden sm:flex items-center text-sm">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span className="ml-1 leading-none">New in</span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <hr className=" border-slate-200 dark:border-slate-700"></hr>
        {/*  */}

        {/* ---------- 5 ----------  */}
        <AccordionInfo
          data={[
            {
              name: "Description",
              content:
                `${description ? description : ''}`,
            },
            {
              name: "Store Comparison",
              content: StoreComparisonTable(product?.sellers_results?.online_sellers ? product?.sellers_results?.online_sellers : ""),
            }
          ]}
        />
      </div>
    );
  };


{/* NO PRODUCT RESULTS */}


const renderNoResults = () => {
  return (
    <div className="space-y-8 p-5">
      {/* ---------- 1 HEADING ----------  */}
      <div>
        <h2 className="text-2xl font-semibold hover:text-primary-6000 transition-colors">
          <a {...link} target="_blank">{prod_title}</a>
        </h2>

        <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
          {/* <div className="flex text-xl font-semibold">$112.00</div> */}
          <Prices
            contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
            price={extracted_price}
          />
        </div>
      </div>

      {/*  */}
      <hr className=" border-slate-200 dark:border-slate-700"></hr>
      {/*  */}

      {/* ---------- 5 ----------  */}
      <AccordionInfo
        data={[
          {
            name: "Store Comparison",
            content: ReactDOMServer.renderToString(<a className="text-blue-600 underline" href={link}>{source}</a>),
          }
        ]}
      />
    </div>
  );
};

{/* NO PRODUCT RESULTS */}

  return (
    <div className={`nc-ProductQuickView ${className}`}>
      {/* MAIn */}
      <div className="lg:flex">
        {/* CONTENT */}
        <div className= "w-full lg:w-[50%]">
          {/* HEADING */}
          {media?.length >= 1 && 
            <div className="relative w-full">
              <div className="flex w-full place-items-center place-content-center">
                <img
                  src={media[0].link}
                  className="w-1/2 rounded-xl object-cover"
                  alt="product detail 1"
                />
              </div>
            </div>
          }
          <div className="hidden lg:grid grid-cols-2 gap-3 mt-3 sm:gap-6 sm:mt-6 xl:gap-5 xl:mt-5">
            {media?.splice(0, 1).map((item:any, index:any) => {
              return (
                <div key={index} style={{height:"200px"}} className="aspect-w-2 aspect-h-3">
                  <img
                    src={item.link}
                    className="w-full rounded-xl object-cover"
                    alt="product detail 1"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* SIDEBAR */}
        <div className="w-full lg:w-[50%] pt-6 lg:pt-0 lg:pl-7 xl:pl-8">
          {renderSectionContent()}
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
