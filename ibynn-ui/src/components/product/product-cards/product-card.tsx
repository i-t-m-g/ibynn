import cn from 'classnames';
import Image from '@components/ui/image';
import usePrice from '@framework/product/use-price';
import { useModalAction } from '@components/common/modal/modal.context';
import { useTranslation } from 'next-i18next';
import { productPlaceholder } from '@assets/placeholders';
import dynamic from 'next/dynamic';
import {
  ShoppingResult,
} from 'src/framework/ibynn-api/entities/product';

interface ProductProps {
  product: ShoppingResult;
  className?: string;
}

const ProductCard: React.FC<ProductProps> = ({ product, className }) => {
  const { title, thumbnail, position, link, icon } = product ?? {};
  const { openModal } = useModalAction();
  
  const handlePopupView = () => {
    openModal('PRODUCT_VIEW', product);
  }

  return (
    <div onClick={handlePopupView}>
      <article
        style={{height: '275px'}}
        className={cn(
          'flex flex-col justify-between group overflow-hidden rounded-md transition-all duration-300 shadow-card hover:shadow-cardHover',
          className
        )}
        title={title}
      >
        <div className="">
          <div className="flex place-content-center cursor-pointer overflow-hidden max-w-[230px] mx-auto">
            <Image
              src={product.thumbnail ?? productPlaceholder}
              alt={product.title || 'Product Image'}
              width={92}
              height={92}
              quality={92}
              className="object-cover z-10 bg-fill-thumbnail"
            />
          </div>
        </div>

        <div className="flex justify-between flex-col" style={{height: '100%', padding: '10px'}}>
          <div className="mb-1 lg:mb-1.5 -mx-1">
            <span className="inline-block mx-1 z-0 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
              ${product.extracted_price?.toFixed(2)}
            </span>
            <span className="text-sm font-medium md:text-15px ml-2">
              {product.unit_price_displayed}
            </span>
            <h2 className="text-brand-dark cursor-pointer text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
              {product.title}
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
