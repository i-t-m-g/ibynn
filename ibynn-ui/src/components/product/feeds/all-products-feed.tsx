import { Fragment, useEffect, useState } from 'react';
import ProductCard from '@components/product/product-cards/product-card';
import type { FC } from 'react';
import { useProductsQuery } from '@framework/product/get-all-products';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import SectionHeader from '@components/common/section-header';
import { useModalAction } from '@components/common/modal/modal.context';
import slice from 'lodash/slice';
import Alert from '@components/ui/alert';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { LIMITS } from '@framework/utils/limits';
import { Product } from '@framework/types';
import { searchForProduct } from 'src/framework/ibynn-api/product';
import { Products } from 'src/framework/ibynn-api/entities/product';
interface ProductFeedProps {
  element?: any;
  className?: string;
}
const AllProductFeed: FC<ProductFeedProps> = ({ element, className = '' }) => {
  const [data, setData] = useState<Products>();
  const { t } = useTranslation('common');

  const { query } = useRouter();
  const {
    isFetching: isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    // data,
    error,
  } = useProductsQuery({ limit: LIMITS.PRODUCTS_LIMITS, ...query });

  useEffect(() => {
    searchForProduct('skin+lotion').then((res) => setData(res));
  }, [query]);

  const { openModal } = useModalAction();

  function handleCategoryPopup() {
    openModal('CATEGORY_VIEW');
  }

  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-between pb-0.5 mb-4 lg:mb-5 xl:mb-6">
        <SectionHeader sectionHeading="Our Top Picks" className="mb-0" />
        <div
          className="lg:hidden transition-all text-brand -mt-1.5 font-semibold text-2xl md:text-20px hover:text-brand-dark"
          role="button"
          onClick={handleCategoryPopup}
        >
          {t('text-all-categories')}
        </div>
      </div>

      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 md:gap-4 2xl:gap-5">
          {isLoading && !data?.results?.length ? (
            Array.from({ length: LIMITS.PRODUCTS_LIMITS }).map((_, idx) => (
              <ProductCardLoader
                key={`product--key-${idx}`}
                uniqueKey={`product--key-${idx}`}
              />
            ))
          ) : (
            <>
              {data?.results?.map((product: any, index) => {
                return (
                  <Fragment key={index}>
                    {/* {page?.data?.slice(0, 18)?.map((product: Products) => ( */}
                    <ProductCard
                      key={`product--key${product.id}`}
                      product={product}
                    />
                    {/* ))} */}
                  </Fragment>
                );
              })}
              {element && <div className="col-span-full">{element}</div>}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AllProductFeed;
