import React, { FC, useContext, useEffect, useId } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CardCategory2 from "components/CardCategories/CardCategory2";
import department1Png from "images/collections/department1.png";
import department2Png from "images/collections/department2.png";
import department3Png from "images/collections/department3.png";
import department4Png from "images/collections/department4.png";
import { Link } from "react-router-dom";
import { COLORS, IMAGES } from "./constants";
import DataContext from "context/DataContext";

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
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS: Glide.Options = {
      perView: 4,
      type: "slider",
      gap: 45,
      swipeThreshold: 1,
      breakpoints: {
        1280: {
          perView: 4,
        },
        1024: {
          gap: 20,
          perView: 3.4,
        },
        768: {
          gap: 20,
          perView: 3,
        },
        640: {
          gap: 20,
          perView: 2.3,
        },
        500: {
          gap: 20,
          perView: 1.6,
        },
      }
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    return () => {
      slider.destroy();
    };
  }, [UNIQUE_CLASS]);

  const handleClick = (item: any) => {
    dc.setActiveCategory(item);
  };

  return (
    <div className={`nc-SectionSliderCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item:any, index:any) => (
              <li onClick={() => handleClick(item)} key={index} className={`glide__slide ${itemClassName}`}>
                <CardCategory2
                  featuredImage={IMAGES[index]}
                  name={item.name}
                  desc={`${item.children.length} categories`}
                  bgClass={COLORS[index]}
                />
              </li>
            ))}
            <li className={`glide__slide ${itemClassName}`}>
              <div
                className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1 bg-slate-100`}
              >
                <div>
                  <div className="absolute inset-y-6 inset-x-10 flex flex-col sm:items-center justify-center">
                    <div className="flex relative text-slate-900">
                      <span className="text-lg font-semibold ">
                        More collections
                      </span>
                      <svg
                        className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 20.4999V3.66992"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-sm mt-1 text-slate-800">
                      Show me more
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCategories;
