import { useTranslation } from 'next-i18next';
import { Attachment } from '@framework/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  backgroundThumbnail?: Attachment;
  heroDescription?: string;
  heroTitle?: string;
}

const BundleHeroSection: React.FC<any> = ({heroData, backgroundThumbnail}) => {
  return (
    <div className="min-h-[400px] flex">
      <div
        className="min-h-[350px] py-16 md:py-20 w-full bg-cover opacity-100 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundThumbnail})`,
          opacity: '65%',
          position: 'absolute'
        }}
      >
      </div>
      
      {<div className="max-w-[540px] flex flex-col items-center justify-center relative mx-auto text-center xl:mb-8 px-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-[40px] capitalize 2xl:leading-[1.3em] font-bold text-brand-dark font-manrope mb-2.5 lg:mb-3.5">
            {/* {data[parseInt(slug.toString()) - 1]?.slug.toString()} */}
            {heroData.slug}

          </h2>
          <p className="text-15px lg:text-base 2xl:text-[17px] leading-7 lg:leading-8 text-brand-dark">
            {/* {data[parseInt(slug.toString()) - 1]?.description} */}
            {heroData.description}
          </p>
        </div>}
    </div>
  );
};

export default BundleHeroSection;
