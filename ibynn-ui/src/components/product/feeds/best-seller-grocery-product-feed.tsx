import type { FC } from 'react';
import { useBestSellerGroceryProductsQuery } from '@framework/product/get-all-best-seller-grocery-products';
import ProductsGridBlock from '../products-grid-block';
import { LIMITS } from '@framework/utils/limits';

interface ProductFeedProps {
  className?: string;
}

const BestSellerGroceryProductFeed: FC<ProductFeedProps> = ({ className }) => {
  return (
    <ProductsGridBlock
      sectionHeading="text-best-grocery-near-you"
      sectionSubHeading="text-fresh-grocery-items"
      className={className}
    />
  );
};
export default BestSellerGroceryProductFeed;
