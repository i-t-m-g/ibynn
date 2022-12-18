import React, { useEffect, useState, FC } from "react";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "components/SectionPromo1";
import { Helmet } from "react-helmet";
import SectionHero2 from "components/SectionHero/SectionHero2";
import SectionSliderLargeProduct from "components/SectionSliderLargeProduct";
import SectionSliderProductCard from "components/SectionSliderProductCard";
import DiscoverMoreSlider from "components/DiscoverMoreSlider";
import SectionGridMoreExplore from "components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo2 from "components/SectionPromo2";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionGridFeatureItems from "./SectionGridFeatureItems";
import SectionPromo3 from "components/SectionPromo3";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import SectionMagazine5 from "containers/BlogPage/SectionMagazine5";
import Heading from "components/Heading/Heading";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { PRODUCTS, SPORT_PRODUCTS } from "data/data";

const PageHome: FC<any> = () => {
  const [categories, setCategories] = useState<any>();
  const [newest, setNewest] = useState<any>();

  useEffect(() => {
    fetch(`http://localhost:9476/json/categories`)
      .then(res => res.json())
      .then(categories => setCategories(categories.data));

    fetch(`http://localhost:9476/shopping?sortBy=amount&q=new`)
      .then(res => res.json())
      .then(products => setNewest(products.shopping_results));
    
  }, []);

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Ibynn | Choose Your Price</title>
      </Helmet>

      {/* SECTION HERO */}
      <SectionHero2 />


      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {categories && categories.length > 0 && <SectionSliderCategories categories={categories} />}
        
        <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>

        {/* SECTION */}
        {newest && newest.length > 0 && <SectionSliderProductCard
          products={newest.splice(0, 10)}
          data={[
            PRODUCTS[4],
            SPORT_PRODUCTS[5],
            PRODUCTS[7],
            SPORT_PRODUCTS[1],
            PRODUCTS[6],
          ]}
        />}

        {/* SECTION */}
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          {categories && categories.length > 0 && <SectionGridMoreExplore categories={categories} />}
        </div>

        {newest && newest.length > 0 && <SectionSliderProductCard
          products={newest.splice(11, 20)}
          heading="Best Sellers"
          subHeading="Best selling of the month"
        />}

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
}

export default PageHome;
