import { FC } from "react";
import { PRODUCTS } from "data/data";
import detail1JPG from "images/products/detail1.jpg";
import detail2JPG from "images/products/detail2.jpg";
import detail3JPG from "images/products/detail3.jpg";
import BackgroundSection from "./BackgroundSection/BackgroundSection";
import CardCategory from "./CardCategories/CardCategory";
import SubSubCatCard from "./CardCategories/SubSubCategories";

export interface CategoryQuickViewProps {
  className?: string;
  category:any;
}

const CategoryQuickView: FC<CategoryQuickViewProps> = ({ className = "", category}) => {
  const { sizes, variants, status, allOfSizes } = PRODUCTS[0];
  const LIST_IMAGES_DEMO = [detail1JPG, detail2JPG, detail3JPG];

  return (
    <div className={`nc-CategoryQuickView overflow-x-hidden	${className}`}>
        <div className="relative">
        <BackgroundSection />
        <h2 style={{opacity: '100%', color: 'red'}} className="p-10 lg:py-20 block text-center opacity-100 text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {category.name}
        </h2>
        <div className={`grid gap-4 md:gap-7 p-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-3`}>
          {category.children.map((item:any, index:any) => (
            <SubSubCatCard
              category={item}
              key={index}
              name={item.name}
              desc={''}
              featuredImage={item.image.desktop.url}
            />
          ))}
        </div>
        </div>
    </div>
  );
};

export default CategoryQuickView;
