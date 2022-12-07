import Layout from '@components/layout/layout-four';
import Container from '@components/ui/container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import /* <DownloadApps /> */ '@components/common/download-apps';
import { homeFourHeroBanner as heroBanner } from '@framework/static/banner';
import HeroBannerCard from '@components/hero/hero-banner-card';
import { GetStaticProps } from 'next';
import { Element } from 'react-scroll';
import BestSellerGroceryProductFeed from '@components/product/feeds/best-seller-grocery-product-feed';
import AllProductFeed from '@components/product/feeds/all-products-feed';
import BannerAllCarousel from '@components/common/banner-all-carousel';
import { bannerDiscount } from '@framework/static/banner';
import CategoryDropdownSidebar from '@components/category/category-dropdown-sidebar';
import BannerCard from '@components/cards/banner-card';
import Seo from '@components/seo/seo';
import { useEffect, useRef, useState } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchProducts } from '@framework/product/get-all-products';
import newDiscountBanner from '@components/common/new-discount-banner';
import {
  fetchCategories,
  useCategoriesQuery,
} from '@framework/category/get-all-categories';
import { LIMITS } from '@framework/utils/limits';
import axios from 'axios';
import { searchForProduct } from 'src/framework/ibynn-api/product';
import { ProductGrid } from '@components/product/product-grid';
import CategoryCard from '@components/cards/category-card';
import NewDiscountBanner from '@components/common/new-discount-banner';
import CategoryGridListBlock from '@components/common/category-grid-list-block';
import useWindowSize from '@utils/use-window-size';
import CategoryListCard from '@components/cards/category-list-card';
import { SwiperSlide } from 'swiper/react';
import Carousel from '@components/ui/carousel/carousel';
import CategoryGridList from '@components/common/category-grid-list';
import { categoryPlaceholder } from '@assets/placeholders';
import CollectionGrid from '@components/common/collection-grid';
import Steps from '@components/steps/steps';

export default function Home() {
  const { data } = useCategoriesQuery({
    limit: 100,
  });
  const { width } = useWindowSize();
  const [dropdownData, setDropdownData] = useState<any>([]);
  const gridListRef = useRef<any>();

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
      <Seo
        title="Find Cheap Deals And Compare Prices From Top Brands"
        description="IBYNN.com is the best online price comparison platform that helps you find and compare prices from leading brands so that you can find the cheapest deals."
        path="minimal"
      />
      <HeroBannerCard
        banner={heroBanner}
        variant="medium"
        className="min-h-[400px] lg:min-h-[450px] xl:min-h-[480px] pt-20 lg:pt-32 pb-14 lg:pb-24 mb-7 md:mb-8 xl:mb-10"
      />
      <Container>
        <Element name="grid" className="flex mb-11 md:mb-14 xl:mb-16 pb-2.5">
          <CategoryDropdownSidebar className="shrink-0 ltr:pr-8 rtl:pl-8 hidden lg:block w-80 xl:w-[370px] lg:sticky lg:top-20" />
          <div className="w-full minimal-main-content">
            <Steps />
            <CollectionGrid headingPosition="center" />
            <BestSellerGroceryProductFeed className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20" />
          </div>
        </Element>
      </Container>
    </>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, { limit: LIMITS.CATEGORIES_LIMITS }],
    fetchCategories
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.PRODUCTS, { limit: LIMITS.PRODUCTS_LIMITS }],
    fetchProducts
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
    revalidate: 60,
  };
};
