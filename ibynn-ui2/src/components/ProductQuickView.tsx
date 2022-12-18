import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import LikeButton from "components/LikeButton";
import { StarIcon } from "@heroicons/react/24/solid";
import BagIcon from "components/BagIcon";
import NcInputNumber from "components/NcInputNumber";
import { PRODUCTS } from "data/data";
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import IconDiscount from "components/IconDiscount";
import Prices from "components/Prices";
import toast from "react-hot-toast";
import detail1JPG from "images/products/detail1.jpg";
import detail2JPG from "images/products/detail2.jpg";
import detail3JPG from "images/products/detail3.jpg";
import NotifyAddTocart from "./NotifyAddTocart";
import AccordionInfo from "containers/ProductDetailPage/AccordionInfo";
import { Link } from "react-router-dom";

export interface ProductQuickViewProps {
  className?: string;
  product:any;
}

const ProductQuickView: FC<ProductQuickViewProps> = ({ className = "", product}) => {
  const { sizes, variants, status, allOfSizes } = PRODUCTS[0];
  const LIST_IMAGES_DEMO = [detail1JPG, detail2JPG, detail3JPG];
  const { description, media, rating, reviews, title } = product.product_results;

  console.log(media)

  const renderSectionContent = () => {
    return (
      <div className="space-y-8">
        {/* ---------- 1 HEADING ----------  */}
        <div>
          <h2 className="text-2xl font-semibold hover:text-primary-6000 transition-colors">
            <Link to="/product-detail">{title}</Link>
          </h2>

          <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
            {/* <div className="flex text-xl font-semibold">$112.00</div> */}
            <Prices
              contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
              price={112}
            />

            <div className="h-6 border-l border-slate-300 dark:border-slate-700"></div>

            <div className="flex items-center">
              <Link
                to="/product-detail"
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
              </Link>
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
                `${description}`,
            },
            {
              name: "Store Comparison",
              content:
                `<table class="w-full text-sm font-semibold text-brand-dark lg:text-base"><thead><tr><th class="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">Store</th><th class="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md">Price</th></tr></thead><tbody><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://www.amazon.com/Echo-Dot/dp/B07FZ8S74R%3Fsource%3Dps-sl-shoppingads-lpcontext%26ref_%3Dfplfs%26psc%3D1%26smid%3DATVPDKIKX0DER&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykIigE&amp;usg=AOvVaw0i8fYXLvuCYR8G5DEw6Y43" target="_blank" rel="noreferrer">Amazon.com</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $14.99</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> $5.99</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> $1.73</p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $22.71</p></td></tr><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://www.bestbuy.com/site/amazon-echo-dot-3rd-gen-smart-speaker-with-alexa-charcoal/6287974.p%3FskuId%3D6287974%26ref%3D212%26loc%3D1%26extStoreId%3D1459&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykIkwE&amp;usg=AOvVaw2iRnAnzYasj3AaxY9iyDlZ" target="_blank" rel="noreferrer">Best Buy</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $14.99</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> See website</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> </p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $14.99</p></td></tr><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://www.truegether.com/listing.html%3Fid%3DUSER.979759f0-2188-4c6a-8156-2c8e64e8e96f&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykIzAE&amp;usg=AOvVaw2vTJ2ufJi2_zo4To-sYQp1" target="_blank" rel="noreferrer">MSM Electronics</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $19.89</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> $13.99</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> $0.00</p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $33.88</p></td></tr><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://www.ebay.com/itm/265953156541%3Fchn%3Dps%26mkevt%3D1%26mkcid%3D28%26srsltid%3DAeTuncqAVUTbnNKN-VJCjvqN3bkHQiutraqz2-VyMcIYfbccwXtoD_CihvQ&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykIvAE&amp;usg=AOvVaw2aYDMQUydVMv4smrJSHQUe" target="_blank" rel="noreferrer">eBay</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $19.99</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> $9.00</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> $2.39</p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $31.38</p></td></tr><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://poshmark.com/listing/Amazon-Echo-Dot-adds-Alexa-to-any-room-new-in-box-3rd-generation-62389c1c6c6ac7c7ee8a472d%3Fsrsltid%3DAeTuncqNHAlYDwxrH5k33xM2LczbGW_89kQCAoA-Z2ySJ7mz0Wo8I_Jc7HA%23utm_source%3Dgdm_unpaid&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykIwQE&amp;usg=AOvVaw3q6wsPb_RFUAvk4cH6JT-T" target="_blank" rel="noreferrer">Poshmark</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $20.00</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> $7.67</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> $2.31</p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $29.98</p></td></tr><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://cupolathings.com/product/echo-dot-3rd-gen/&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykIyQE&amp;usg=AOvVaw2ujU3A4J725GyMdLp7sIk_" target="_blank" rel="noreferrer">cupolathings.com</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $20.00</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> $14.75</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> $0.00</p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $34.75</p></td></tr><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://foofster.com/products/echo-dot-3rd-gen-smart-speaker-with-alexa-charcoal%3Fvariant%3D39497712009298%26currency%3DUSD%26utm_medium%3Dproduct_sync%26utm_source%3Dgoogle%26utm_content%3Dsag_organic%26utm_campaign%3Dsag_organic&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykI0AE&amp;usg=AOvVaw2s2KbaLitBTovY4g2Pbg02" target="_blank" rel="noreferrer">Foofster</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $21.24</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> $0.00</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> $1.75</p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $22.99</p></td></tr><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://www.mercari.com/us/item/m99277055329/&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykIxQE&amp;usg=AOvVaw2fQJlHu3FkDLSNldOZn3bp" target="_blank" rel="noreferrer">Mercari</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $25.00</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> $13.00</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> $3.14</p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $41.14</p></td></tr><tr class="font-normal border-b border-border-base last:border-b-0"><td class="p-4" style="color: blue;"><a href="https://www.google.com/url?q=https://www.fingerhut.com/product/NQD45.uts&amp;sa=U&amp;ved=0ahUKEwjLiquFiIT8AhW3lWoFHadTBWAQ2ykI1gE&amp;usg=AOvVaw1_u2aAs8kgeiQT62sr2uAX" target="_blank" rel="noreferrer">Fingerhut</a></td><td class="p-4"><p class="text-xs m-1 text-green-700"><span class="font-bold">Item Price:</span> $59.99</p><p class="text-xs m-1"><span class="font-bold">Shipping:</span> $21.99</p><p class="text-xs m-1"><span class="font-bold">Tax:</span> $6.76</p><p class="text-xs m-1"><span class="font-bold">Total Price:</span> $88.74</p></td></tr></tbody></table>`,
            },
            {
              name: "Features",
              content: `<ul class="list-disc list-inside leading-7">
            <li>Material: 43% Sorona Yarn + 57% Stretch Polyester</li>
            <li>
             Casual pants waist with elastic elastic inside
            </li>
            <li>
              The pants are a bit tight so you always feel comfortable
            </li>
            <li>
              Excool technology application 4-way stretch
            </li>
          </ul>`,
            },
          ]}
        />
      </div>
    );
  };

  return (
    <div className={`nc-ProductQuickView ${className}`}>
      {/* MAIn */}
      <div className="lg:flex">
        {/* CONTENT */}
        <div className="w-full lg:w-[50%] ">
          {/* HEADING */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-16">
              <img
                src={media[0].link}
                className="w-full rounded-xl object-cover"
                alt="product detail 1"
              />
            </div>

            {/* META FAVORITES */}
            <LikeButton className="absolute right-3 top-3 " />
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-3 mt-3 sm:gap-6 sm:mt-6 xl:gap-5 xl:mt-5">
            {media.splice(0, 2).map((item:any, index:any) => {
              return (
                <div key={index} className="aspect-w-3 aspect-h-4">
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
