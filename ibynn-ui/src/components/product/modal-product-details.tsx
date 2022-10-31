import { useOrderQuery } from '@framework/order/get-order';
import usePrice from '@framework/product/use-price';
import { OrderItem } from '@framework/types';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Heading from '@components/ui/heading';

const OrderItemCard: any = ({ product }) => {
  return (
    <tr
      className="font-normal border-b border-border-base last:border-b-0"
    >
      <td className="p-4" style={{color: 'blue'}}>
        <a href={product?.link} target="_blank" rel="noreferrer">{product?.title}</a>
      </td>
      <td className="p-4">
        ${product?.extracted_price}
      </td>
      <td className="p-4">
        {product?.source}
      </td>
    </tr>
  );
};

const ModalProductDetails: React.FC<any> = ({className = 'pt-10 lg:pt-12', product}) => {
  console.log("this is it: -----",product);
  const { t } = useTranslation('common');

  return (
    <div className={className}>
      <Heading variant="heading" className="mb-6 xl:mb-7">
        {t('text-order-details')}:
      </Heading>
      <table className="w-full text-sm font-semibold text-brand-dark lg:text-base">
        <thead>
          <tr>
            <th className="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">
              Product
            </th>
            <th className="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md">
              Price
            </th>
            <th className="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md">
              Store
            </th>
          </tr>
        </thead>
        <tbody>
          {product?.length > 0 ? product.map((product: any, index: number) => (
            <OrderItemCard key={index} product={product} />
          )): <p>Loading...</p>}
        </tbody>
      </table>
    </div>
  );
};

export default ModalProductDetails;
