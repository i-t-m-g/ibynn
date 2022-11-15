import { FC, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Alert from '@components/ui/alert';
import Button from '@components/ui/button';
import ProductCard from '@components/product/product-cards/product-card';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import cn from 'classnames';
import { useProductsQuery } from '@framework/product/get-all-products';
import { LIMITS } from '@framework/utils/limits';
import { Product } from '@framework/types';
import { searchForProduct } from 'src/framework/ibynn-api/product';
import { Products } from '../../framework/ibynn-api/entities/product';

interface ProductGridProps {
  className?: string;
}

export const ProductGrid: FC<ProductGridProps> = ({ className = '' }) => {
  const [data, setData] = useState<Products>(new Products());
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation('common');
  const { query } = useRouter();

  const {
    // isFetching: isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    //data,
    error,
  } = useProductsQuery({ limit: LIMITS.PRODUCTS_LIMITS, ...query });

  const handleit = () => {
    setData(new Products());
    setIsLoading(true);
  };

  useEffect(() => {
    setIsLoading(data?.shopping_results?.length < 1);
  }, [data]);

  useEffect(() => {
    if (query.q) {
      setData(new Products());
      searchForProduct(query).then((res) => setData(res));
    }
  }, [query]);

  return (
    <>
      <div
        className={cn(
          'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5',
          className
        )}
      >
        {error ? (
          <div className="col-span-full">
            <Alert message={error?.message} />
          </div>
        ) : isLoading && !data?.shopping_results?.length ? (
          Array.from({ length: 30 }).map((_, idx) => (
            <ProductCardLoader
              key={`product--key-${idx}`}
              uniqueKey={`product--key-${idx}`}
            />
          ))
        ) : (
          data?.shopping_results?.map((product, index) => {
            if (product) {
              return (
                <ProductCard key={`product--key-${index}`} product={product} />
              );
            }
          })
        )}
      </div>
    </>
  );
};
