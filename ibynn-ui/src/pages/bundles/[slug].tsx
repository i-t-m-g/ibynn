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
  const cols = windowSize.width < 900 ? '3' : '3';
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

    for (let i = 0; i < categoryData.children.length; i+=3) {
      catRows.push(
        <div className={`grid grid-cols-3 gap-4`}>
          {categoryData.children.slice(i, i + 3).map((category) => {
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
        <div>
          
        <div className="w-full">
          {categoryData?.children?.length > 0 && categoryData?.children.map((cat) => {
            return (
              <>
                <div key={cat.id}>
                  <h2 className="font-extrabold text-2xl">{cat.name}</h2>
                  <Carousel
                    autoplay={false}
                    freemode={true}
                    breakpoints={breakpoints}
                  >
                    {cat?.children?.length > 0 &&
                      cat?.children?.map((category) => {
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
                      dropdownData.parent === cat.name &&
                      getCategoryGridList(cat)}
                  </Carousel>
                </div>
              </>
            );
          })}
          </div>
          {/* {categoryData?.children?.length > 0 && getCategoryRows()} */}
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
