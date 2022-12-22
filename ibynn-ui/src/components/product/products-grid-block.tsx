import SectionHeader from '@components/common/section-header';
import ProductCard from '@components/product/product-cards/product-card';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import { Product } from '@framework/types';
import { ShoppingResult, Products } from 'src/framework/ibynn-api/entities/product';
import { useState, useEffect } from 'react';
import { parse } from "querystring";
import { searchForProduct } from 'src/framework/ibynn-api/product';

interface ProductsProps {
  sectionHeading: string;
  sectionSubHeading?: string;
  headingPosition?: 'left' | 'center';
  className?: string;
}

const ProductsGridBlock: React.FC<ProductsProps> = ({
  sectionHeading,
  sectionSubHeading,
  headingPosition = 'center',
  className = 'mb-12 lg:mb-14 xl:mb-16',
}) => {
  const [shoppingResult, setShoppingResult] = useState<any>();
  const [x, setX] = useState(0);

  useEffect(() => {
    setShoppingResult(new Products());
    searchForProduct(parse("q=products")).then((res) => setShoppingResult(res.shopping_results.splice(0,20)));
  }, []);

  return (
    <div className={`${className}`}>
      <SectionHeader
        sectionHeading={"Our Best Selling Items"}
        sectionSubHeading={sectionSubHeading}
        headingPosition={headingPosition}
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 md:gap-4 2xl:gap-5">
        {shoppingResult?.length > 0 && shoppingResult.map((product: any) => (
            <ProductCard key={`${product.id}`} product={product} />))}
      </div>
    </div>
  );
};

export default ProductsGridBlock;
