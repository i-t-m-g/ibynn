import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import /* <DownloadApps /> */ '@components/common/download-apps';
import ProductBundleGrid from '@components/product/product-bundle-grid';
import BundleHeroSection from '@components/bundle/bundle-hero-section';
import BannerGridTwo from '@components/common/banner-grid-two';
import { bannerGridTwo as banners } from '@framework/static/banner';
import CollectionGrid from '@components/common/collection-grid';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from 'swiper/react';
import CategoryListCard from '@components/cards/category-list-card';
import { useCategoriesQuery } from '@framework/category/get-all-categories';
import { useState } from 'react';
import CategoryDropdownSidebar from '@components/category/category-dropdown-sidebar';
import { Element } from 'react-scroll';
import CategoryGridList from '@components/common/category-grid-list';

export default function Bundles() {
  const { data } = useCategoriesQuery({
    limit: 100,
  });
  const [dropdownData, setDropdownData] = useState<any>([]);
  const breakpoints = {
    '1536': {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    '1280': {
      slidesPerView: 5,
      spaceBetween: 0,
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
      slidesPerView: 3.2,
      spaceBetween: 0,
    },
    '0': {
      slidesPerView: 3.2,
      spaceBetween: 0,
    },
  };

  const getCategoryGridList = (category: any) => {
    if (category.name === dropdownData.parent) {
      return (
        <CategoryGridList
          setDropdownData={setDropdownData}
          data={dropdownData.children}
        />
      );
    }
  };

  return (
    <>
      <BundleHeroSection />
      <Container>
        <Element name="grid" className="flex mb-11 md:mb-14 xl:mb-16 pb-2.5">
          <CategoryDropdownSidebar className="shrink-0 ltr:pr-8 rtl:pl-8 hidden lg:block w-80 xl:w-[370px] lg:sticky lg:top-20" />
          <div className="w-full minimal-main-content">
            {data?.categories.data.map((cat) => {
              return (
                <>
                  <div key={cat.id}>
                    <h2 className="font-extrabold text-2xl">{cat.name}</h2>
                    <Carousel
                      autoplay={false}
                      freemode={true}
                      breakpoints={breakpoints}
                      // buttonSize={buttonSize}
                      // prevActivateId="all-banner-carousel-button-prev"
                      // nextActivateId="all-banner-carousel-button-next"
                    >
                      {cat.children &&
                        cat.children.map((category) => {
                          return (
                            <>
                              <SwiperSlide
                                key={`category--key-${category.name}`}
                                className="p-1.5 md:p-2"
                              >
                                <CategoryListCard
                                  // ref={gridListRef}
                                  setDropdownData={setDropdownData}
                                  dropdownData={dropdownData?.children}
                                  key={category.name}
                                  category={category}
                                  href={{
                                    // pathname: ROUTES.SEARCH,
                                    query: { category: category.slug },
                                  }}
                                  className="rounded-md text-brand-light shadow-category"
                                />
                              </SwiperSlide>
                            </>
                          );
                        })}
                      {dropdownData?.children?.length > 0 &&
                        dropdownData.name &&
                        getCategoryGridList(cat)}
                    </Carousel>
                  </div>
                </>
              );
            })}
          </div>
        </Element>
      </Container>
    </>
  );
}

Bundles.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
