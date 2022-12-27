import rightImg from "images/hero-right1.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "components/SectionPromo3";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>About || Find the best products, at the best prices, with IBYNN</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="We’re IBYNN. We believe that your online shopping experience shouldn't be overwhelming. Easy shopping is at the heart of IBYNN's belefs. Finding the best prices for the best prducts has never been so easy. "
        />

        <div className="relative py-16">

Welcome to IBYNN! 


We are a comparison shopping company based in New Yok City and have been helping consumers save money and find the best products since 2020. At IBYNN, we understand that shopping for the perfect product can be overwhelming and time-consuming, which is why we have made it our mission to simplify the process.

Our team of experienced researchers and writers spend countless hours scouring the internet for the latest and greatest products in various categories, including cosmetics, electronics, personal care, and much more. We then compare the features, prices, and overall value of these products in order to provide our users with unbiased and comprehensive reviews.

In addition to product reviews, we also offer a price comparison tool that allows users to easily compare prices from various retailers. This ensures that our users are getting the best deal possible on the products they want.

We believe in transparency and honesty, and strive to provide our users with the most accurate and up-to-date information. We are constantly updating our site with new products and reviews, so be sure to check back often for the latest and greatest.

Thank you for choosing IBYNN for all of your comparison shopping needs. We hope to make your shopping experience as smooth and stress-free as possible.
<br></br>
Sincerely,
IBYNN
          <BackgroundSection />
        </div>

        <SectionStatistic />

        <SectionPromo3 />
      </div>
    </div>
  );
};

export default PageAbout;
