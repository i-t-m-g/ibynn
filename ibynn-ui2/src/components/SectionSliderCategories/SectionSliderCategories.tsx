import React, { FC, useContext, useEffect, useId, useState } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CardCategory2 from "components/CardCategories/CardCategory2";
import { COLORS, IMAGES } from "./constants";
import DataContext from "context/DataContext/DataContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWindowSize } from "react-use";

export interface CardCategoryData {
  name: string;
  desc: string;
  img: string;
  color?: string;
}

export interface SectionSliderCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  data?: CardCategoryData[];
  categories: any;
}

const SectionSliderCategories: FC<SectionSliderCategoriesProps> = ({
  heading = "Shop by department",
  subHeading = "",
  className = "",
  itemClassName = "",
  categories
}) => {
  const dc = useContext<any>(DataContext);
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
      slidesPerView: 1.7,
    }
  };

  useEffect(() => setIsMobile(width < 1024), [width]);

  const handleClick = (item: any) => {
    dc.setActiveCategory(item);
  };

  return (
    <div>
      <div>
        <Heading desc={subHeading}>
          {heading}
        </Heading>
        <Swiper
          breakpoints={breakpoints}
          freeMode={isMobile}
          loop={!isMobile}
          navigation={!isMobile}
          modules={[FreeMode, Navigation]}>
            {categories.map((item:any, index:any) => (
              <SwiperSlide onClick={() => handleClick(item)} key={index} className={`${itemClassName}`}>
                <CardCategory2
                  featuredImage={IMAGES[index]}
                  name={item.name}
                  desc={`${item.children.length} categories`}
                  bgClass={COLORS[index]}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSliderCategories;
