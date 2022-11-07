import cn from 'classnames';
import Image from '@components/ui/image';
import usePrice from '@framework/product/use-price';
import { Product } from '@framework/types';
import { useModalAction } from '@components/common/modal/modal.context';
import useWindowSize from '@utils/use-window-size';
import PlusIcon from '@components/icons/plus-icon';
import { useCart } from '@contexts/cart/cart.context';
// import { AddToCart } from '@components/product/add-to-cart';
import { useTranslation } from 'next-i18next';
import { productPlaceholder } from '@assets/placeholders';
import dynamic from 'next/dynamic';
import {
  Result,
  ShoppingResult,
} from 'src/framework/ibynn-api/entities/product';
import { useEffect } from 'react';
import Link from 'next/link';
const AddToCart = dynamic(() => import('@components/product/add-to-cart'), {
  ssr: false,
});

interface ProductProps {
  product: ShoppingResult;
  className?: string;
}

const ProductCard: React.FC<ProductProps> = ({ product, className }) => {
  const { title, thumbnail, position, link, icon } = product ?? {};
  const product_type = '';
  // const { name, image, unit, product_type } = product ?? {};
  const { openModal } = useModalAction();
  const { t } = useTranslation('common');
  const { price, basePrice, discount } = usePrice({
    amount: product?.price,
    // baseAmount: product?.price,
    currencyCode: 'USD',
  });

  function handlePopupView() {
    openModal('PRODUCT_VIEW', product);
  }
  return (
    <div>
      <article
        style={{height: '90%'}}
        className={cn(
          'flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative',
          className
        )}
        onClick={handlePopupView}
        title={title}
      >
        <div className="relative shrink-0">
          <div className="flex place-content-center overflow-hidden max-w-[230px] mx-auto">
            <Image
              src={thumbnail ?? productPlaceholder}
              alt={title || 'Product Image'}
              width={92}
              height={92}
              quality={92}
              className="object-cover z-10 bg-fill-thumbnail"
            />
          </div>
          <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
            {discount && (
              <span className="text-[11px] md:text-xs font-bold text-brand-light uppercase inline-block bg-brand rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                {t('text-on-sale')}
              </span>
            )}
            <div className="block product-count-button-position">
              {/* <RenderPopupOrAddToCart data={product} /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between px-3 md:px-4 lg:px-[18px] lg:pt-1.5 h-60">
          <div className="mb-1 lg:mb-1.5 -mx-1">
            <span className="inline-block mx-1 z-0 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
              ${product.extracted_price?.toFixed(2)}
            </span>
            <span className="text-sm font-medium md:text-15px ml-2">
              {product.unit_price_displayed}
            </span>
            <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
              {title}
            </h2>
          </div>

          <div className="flex flex-col mb-2">
            {/* <img alt={product.source} className="w-16 place-self-center" src={icon} /> */}
            <button
              style={buttonStyles.button}
              className="text-white font-bold py-2 px-4 rounded-full"
            >
              Compare Stores
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

const buttonStyles = {
  button: {
    backgroundColor: '#02B290',
    '&:hover': {
      backgroundColor: '#02B29f',
    },
    fontSize: '12px'
  },
};

export default ProductCard;
