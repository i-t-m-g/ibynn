import React, { useEffect, useState, FC, useContext, createContext } from "react";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { Helmet } from "react-helmet";
import SectionHero2 from "components/SectionHero/SectionHero2";
import SectionSliderLargeProduct from "components/SectionSliderLargeProduct";
import SectionSliderProductCard from "components/SectionSliderProductCard";
import DiscoverMoreSlider from "components/DiscoverMoreSlider";
import SectionGridMoreExplore from "components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo2 from "components/SectionPromo2";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionPromo3 from "components/SectionPromo3";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import { PRODUCTS, SPORT_PRODUCTS } from "data/data";
import DataContext from "context/DataContext";

const PageHome: FC<any> = () => {
  const [categories, setCategories] = useState<any>();
  const dc = useContext<any>(DataContext);
  const headings = {
    heading1: 'Best Sellers',
    subHeading1: 'Best selling of the month'
  };

  const getProductCards = (from:number,to:number,heading?:string,subHeading?:string) => {
    return (
      <SectionSliderProductCard
        products={dc.products.splice(from,to)}
        heading={heading}
        subHeading={subHeading}
      />
    );
  };

  useEffect(() => {
    dc.fetchProducts('new', null);
      
    fetch(`${process.env.REACT_APP_REST_API_ENDPOINT}/json/categories`)
      .then((res) => res.json())
      .then((categories) => setCategories(categories.data));

  }, []);

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Ibynn | Find the Lowest Prices From Top Brands</title>
      </Helmet>

      {/* SECTION HERO */}
      <SectionHero2 />

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {categories && categories.length > 0 && (
          <SectionSliderCategories categories={categories} />
        )}

        <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>

        {dc.products && getProductCards(0,9)}

        {/* SECTION */}
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          {categories && categories.length > 0 && (
            <SectionGridMoreExplore categories={categories} />
          )}
        </div>

        {dc.products && getProductCards(10, 19,headings.heading1, headings.subHeading1)}

        {/*  */}
        <SectionPromo2 />

        {/* SECTION 3 */}
        <SectionSliderLargeProduct cardStyle="style2" />

        {/* SECTION */}
        <SectionPromo3 />

        {/*  */}
        <SectionClientSay />
      </div>
    </div>
  );
};

export default PageHome;
