import { useTranslation } from 'next-i18next';
import { Attachment } from '@framework/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  backgroundThumbnail?: Attachment;
  heroDescription?: string;
  heroTitle?: string;
}

const BundleHeroSection: React.FC<HeroSectionProps> = ({
}) => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  const backgroundThumbnail = `/assets/images/collection/${slug}.png`;


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/json/collections`)
      .then(res => res.json())
      .then(data => setData(data.collections));
  }, []);

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
      
      {slug && data?.length > 0 && 
        <div className="max-w-[540px] flex flex-col items-center justify-center relative mx-auto text-center xl:mb-8 px-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-[40px] capitalize 2xl:leading-[1.3em] font-bold text-brand-dark font-manrope mb-2.5 lg:mb-3.5">
            {data[parseInt(slug) - 1]?.slug}

          </h2>
          <p className="text-15px lg:text-base 2xl:text-[17px] leading-7 lg:leading-8 text-brand-dark">
            {data[parseInt(slug) - 1]?.description}
          </p>
        </div>}
    </div>
  );
};

export default BundleHeroSection;
