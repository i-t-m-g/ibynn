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
  const [newest, setNewest] = useState<any>();
  const [bestSelling, setBestSelling] = useState<any>();
  const dc = useContext<any>(DataContext);

  useEffect(() => {
    fetch(`http://localhost:9476/json/categories`)
      .then((res) => res.json())
      .then((categories) => setCategories(categories.data));

    fetch(`http://localhost:9476/shopping?sortBy=amount&q=new`)
      .then((res) => res.json())
      .then((products) => {setNewest(products.shopping_results.splice(0,9)); setBestSelling(products.shopping_results.splice(10,20)); dc.setProducts(products.shopping_results);});
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

        {/* SECTION */}
        {newest && newest.length > 0 && (
          <SectionSliderProductCard
            products={newest}
            data={[
              PRODUCTS[4],
              SPORT_PRODUCTS[5],
              PRODUCTS[7],
              SPORT_PRODUCTS[1],
              PRODUCTS[6],
            ]}
          />
        )}

        {/* SECTION */}
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          {categories && categories.length > 0 && (
            <SectionGridMoreExplore categories={categories} />
          )}
        </div>

        {newest && newest.length > 0 && (
          <SectionSliderProductCard
            products={bestSelling}
            heading="Best Sellers"
            subHeading="Best selling of the month"
          />
        )}

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
