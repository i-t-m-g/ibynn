import BannerCard from '@components/cards/banner-card';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from 'swiper/react';

const breakpoints = {
  '1536': {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  '1280': {
    slidesPerView: 3.5,
    spaceBetween: 18,
  },
  '1024': {
    slidesPerView: 3.5,
    spaceBetween: 18,
  },
  '768': {
    slidesPerView: 3.5,
    spaceBetween: 18,
  },
  '520': {
    slidesPerView: 1.5,
    spaceBetween: 18,
  },
  '0': {
    slidesPerView: 1.5,
    spaceBetween: 11,
  },
};

interface BannerProps {
  data: any;
  className?: string;
  buttonSize?: 'default' | 'small';
}

const NewDiscountBanner: React.FC<BannerProps> = ({
  data,
  className = 'mb-6',
  buttonSize = 'default',
}) => {
  return (
    <div className={className}>
      <Carousel
        autoplay={true}
        breakpoints={breakpoints}
        // buttonSize={buttonSize}
        // prevActivateId="all-banner-carousel-button-prev"
        // nextActivateId="all-banner-carousel-button-next"
      >
        {data &&
          data?.map((banner: any) => (
            <SwiperSlide key={`all-banner--key${banner.id}`}>
              <BannerCard banner={banner} effectActive={true} />
            </SwiperSlide>
          ))}
      </Carousel>
    </div>
  );
};

export default NewDiscountBanner;
