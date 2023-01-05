import React, { FC, useEffect, useId, useRef, useState } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import ProductCard from "./ProductCard";
import { Product, PRODUCTS } from "data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWindowSize } from "react-use";

export interface SectionSliderProductCardProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  headingFontClassName?: string;
  headingClassName?: string;
  subHeading?: string;
  data?: Product[];
  products?: any;
}

const SectionSliderProductCard: FC<SectionSliderProductCardProps> = ({
  className = "",
  itemClassName = "",
  headingFontClassName,
  headingClassName,
  heading,
  subHeading = "New Trending Items",
  data = PRODUCTS.filter((_, i) => i < 8 && i > 2),
  products
}) => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 1024);
  const breakpoints = {
    1280: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
    768: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    600: {
      spaceBetween: 10,
      slidesPerView: 2.7,
    },
    300: {
      spaceBetween: 10,
      slidesPerView: 2.7,
    }
  };
  
  useEffect(() => setIsMobile(width < 1024), [width]);

  return (
    <div className={`${className}`}>
      <div>
        <Heading
          className={headingClassName}
          fontClass={headingFontClassName}
          rightDescText={subHeading}>
          {heading || `New Arrivals`}
        </Heading>
        <Swiper
          breakpoints={breakpoints}
          freeMode={isMobile}
          loop={!isMobile}
          navigation={!isMobile}
          modules={[FreeMode, Navigation]}>
            {products?.map((item:any, index:any) => (
              <SwiperSlide key={index} style={{height: '515px'}} className={`${itemClassName}`}>
                <ProductCard data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSliderProductCard;
