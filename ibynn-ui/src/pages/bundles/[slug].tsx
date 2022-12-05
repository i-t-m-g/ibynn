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
import { useEffect, useRef, useState } from 'react';
import CategoryDropdownSidebar from '@components/category/category-dropdown-sidebar';
import { Element } from 'react-scroll';
import CategoryGridList from '@components/common/category-grid-list';
import { useRouter } from 'next/router';
import useWindowSize from '@utils/use-window-size';

export default function Bundles() {
  const [dropdownData, setDropdownData] = useState<any>([]);
  const [heroData, setHeroData] = useState<any>([]);
  const [categoryData, setCategoryData] = useState<any>([]);
  const [activeRow, setActiveRow] = useState<number>();
  const router = useRouter();
  const { slug } = router.query;
  const catId = typeof slug === 'string' ? parseInt(slug) - 1 : '';
  const backgroundThumbnail = `/assets/images/collection/${slug}.png`;
  const windowSize = useWindowSize();
  const cols = windowSize.width < 900 ? '3' : '6';
  let inputEl = useRef(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/json/collections`)
      .then((res) => res.json())
      .then((data) => setHeroData(data.collections[catId]));

    fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/json/categories`)
      .then((res) => res.json())
      .then(({ data }) => setCategoryData(data[heroData.cat_index]));
  }, [catId, heroData.cat_index]);

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

  const getCategoryGridList = () => {
    return (
      <CategoryGridList
        setDropdownData={setDropdownData}
        data={dropdownData.children}
      />
    );
  };

  const handleListCard = (e: any) => {
    console.log(inputEl);
  };

  const getCategoryRows = () => {
    const catRows = [];
    let index = 0;

    for (let i = 0; i < categoryData.children.length; i += parseInt(cols)) {
      catRows.push(
        <div className={`grid grid-cols-${cols} gap-4`}>
          {categoryData.children.slice(i, i + cols).map((category, j) => {
            return (
              <>
                <CategoryListCard
                  row={i}
                  setActiveRow={setActiveRow}
                  categoryData={categoryData}
                  setDropdownData={setDropdownData}
                  dropdownData={dropdownData?.children}
                  key={category.name}
                  category={category}
                  href={{
                    query: { category: category.slug },
                  }}
                  className="rounded-md text-brand-light shadow-category"
                />
              </>
            );
          })}
          {dropdownData?.children?.length > 0 && (
            <CategoryGridList
              row={i}
              activeRow={activeRow}
              className={`col-span-full`}
              setDropdownData={setDropdownData}
              data={dropdownData.children}
            />
          )}
        </div>
      );
      index++;
    }

    return catRows;
  };

  return (
    <>
      <BundleHeroSection
        heroData={heroData}
        backgroundThumbnail={backgroundThumbnail}
      />
      <Container>
        {/* <CategoryDropdownSidebar className="shrink-0 ltr:pr-8 rtl:pl-8 hidden lg:block w-80 xl:w-[370px] lg:sticky lg:top-20" /> */}
        <div>
          {/* {categoryData && categoryData?.children.map((category) => {
                          return (
                            <>
                              <CategoryListCard
                                setDropdownData={setDropdownData}
                                dropdownData={dropdownData?.children}
                                key={category.name}
                                category={category}
                                href={{
                                  query: { category: category.slug },
                                }}
                                className="rounded-md text-brand-light shadow-category"
                              />
                            </>
                          );
                    })} */}
          {categoryData?.children?.length > 0 && getCategoryRows()}
        </div>
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
