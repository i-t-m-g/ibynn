import CardCategory1 from "components/CardCategories/CardCategory1";
import CardCategory4 from "components/CardCategories/CardCategory4";
import Heading from "components/Heading/Heading";
import NavItem2 from "components/NavItem2";
import React, { FC, useState } from "react";
import Nav from "shared/Nav/Nav";
import explore1Svg from "images/collections/explore1.svg";
import explore2Svg from "images/collections/explore2.svg";
import explore3Svg from "images/collections/explore3.svg";
import explore4Svg from "images/collections/explore4.svg";
import explore5Svg from "images/collections/explore5.svg";
import explore6Svg from "images/collections/explore6.svg";
import explore7Svg from "images/collections/explore7.svg";
import explore8Svg from "images/collections/explore8.svg";
import explore9Svg from "images/collections/explore9.svg";
//
import explore1Png from "images/collections/explore1.png";
import explore2Png from "images/collections/explore2.png";
import explore3Png from "images/collections/explore3.png";
import explore4Png from "images/collections/explore4.png";
import explore5Png from "images/collections/explore5.png";
import explore6Png from "images/collections/explore6.png";
import explore7Png from "images/collections/explore7.png";
import explore8Png from "images/collections/explore8.png";
import explore9Png from "images/collections/explore9.png";
import CardCategory6 from "components/CardCategories/CardCategory6";

interface ExploreType {
  id: number;
  name: string;
  desc: string;
  image: string;
  svgBg: string;
  color?: string;
}

export interface SectionGridMoreExploreProps {
  className?: string;
  gridClassName?: string;
  boxCard?: "box1" | "box4" | "box6";
  data?: ExploreType[];
  categories?: any
}

export const DEMO_MORE_EXPLORE_DATA = [
  {
    id: 1,
    name: "Backpack",
    desc: "Manufacturar",
    image: explore1Png,
    svgBg: explore1Svg,
    color: "bg-indigo-50",
  },
  {
    id: 2,
    name: "Shoes",
    desc: "Manufacturar",
    image: explore2Png,
    svgBg: explore2Svg,
    color: "bg-slate-100/80",
  },
  {
    id: 3,
    name: "Recycled Blanket",
    desc: "Manufacturar",
    image: explore3Png,
    svgBg: explore3Svg,
    color: "bg-violet-50",
  },
  {
    id: 4,
    name: "Cycling Shorts",
    desc: "Manufacturar",
    image: explore9Png,
    svgBg: explore9Svg,
    color: "bg-orange-50",
  },
  {
    id: 5,
    name: "Cycling Jersey",
    desc: "Manufacturar",
    image: explore5Png,
    svgBg: explore5Svg,
    color: "bg-blue-50",
  },
  {
    id: 6,
    name: "Car Coat",
    desc: "Manufacturar",
    image: explore6Png,
    svgBg: explore6Svg,
    color: "bg-orange-50",
  },
  {
    id: 7,
    name: "Sunglasses",
    desc: "Manufacturar",
    image: explore7Png,
    svgBg: explore7Svg,
    color: "bg-stone-100",
  },
  {
    id: 8,
    name: "kid hats",
    desc: "Manufacturar",
    image: explore8Png,
    svgBg: explore8Svg,
    color: "bg-blue-50",
  },
  {
    id: 9,
    name: "Wool Jacket",
    desc: "Manufacturar",
    image: explore4Png,
    svgBg: explore4Svg,
    color: "bg-slate-100/80",
  },
];

const SectionGridMoreExplore: FC<SectionGridMoreExploreProps> = ({
  className = "",
  boxCard = "box4",
  gridClassName = "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  data = DEMO_MORE_EXPLORE_DATA.filter((_, i) => i < 6),
  categories
}) => {
  const [tabActive, setTabActive] = useState("Man");
  const [children, setChildren] = useState<any>();

  const renderCard = (item: ExploreType) => {
    switch (boxCard) {
      case "box1":
        return (
          <CardCategory1
            key={item.id}
            name={item.name}
            desc={item.desc}
            featuredImage={item.image}
          />
        );

      case "box4":
        return (
          <CardCategory4
            name={item.name}
            desc={item.desc}
            bgSVG={item.svgBg}
            featuredImage={item.image}
            key={item.id}
            color={item.color}
          />
        );
      case "box6":
        return (
          <CardCategory6
            name={item.name}
            desc={item.desc}
            bgSVG={item.svgBg}
            featuredImage={item.image}
            key={item.id}
            color={item.color}
          />
        );

      default:
        return (
          <CardCategory4
            name={item.name}
            desc={item.desc}
            bgSVG={item.svgBg}
            featuredImage={item.image}
            key={item.id}
            color={item.color}
          />
        );
    }
  };

  const renderHeading = () => {
    return (
      <div>
        <Heading
          className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
          fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
          isCenter
          desc=""
        >
          Start exploring.
        </Heading>
        <Nav
          className="p-1 bg-white dark:bg-neutral-800 rounded-full shadow-lg overflow-x-auto hiddenScrollbar"
          containerClassName="mb-12 lg:mb-14 relative flex justify-center w-full text-sm md:text-base"
        >
          {categories?.map((item:any, index:any) => (
            <NavItem2
              key={index}
              isActive={tabActive === item.name}
              onClick={() => {
                setTabActive(item.name); 
                setChildren(item.children);
              }}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span>{item.name}</span>
              </div>
            </NavItem2>
          ))}
        </Nav>
      </div>
    );
  };

  return (
    <div
      className={`nc-SectionGridMoreExplore relative ${className}`}
      data-nc-id="SectionGridMoreExplore"
    >
      {renderHeading()}
      <div className={`grid gap-4 md:gap-7 ${gridClassName}`}>
        {children?.map((item:any) => renderCard(item))}
      </div>
    </div>
  );
};

export default SectionGridMoreExplore;
