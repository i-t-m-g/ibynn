import Heading from '@components/ui/heading';

const OrderItemCard: React.FC<any> = ({ product }) => {
  return (
    <tr className="font-normal border-b border-border-base last:border-b-0">
      <td className="p-4" style={{ color: 'blue' }}>
        <a href={product.link} target="_blank" rel="noreferrer">
          {product.name}
        </a>
      </td>
      <td className="p-4">
        <p className="text-xs m-1 text-green-700"><span className="font-bold">Item Price:</span> {product.base_price}</p>
        <p className="text-xs m-1"><span className="font-bold">Shipping:</span> {product.additional_price.shipping}</p>
        <p className="text-xs m-1"><span className="font-bold">Tax:</span> {product.additional_price.tax}</p>
        <p className="text-xs m-1"><span className="font-bold">Total Price:</span> {product.total_price}</p>
      
      </td>
    </tr>
  );
};

const ModalProductDetails: React.FC<any> = ({
  className = 'pt-10 lg:pt-12',
  product,
}) => {

  return (
    <div className={className}>
      <Heading variant="heading" className="mb-6 xl:mb-7">
        {product?.product_results?.title}
      </Heading>
      <table className="w-full text-sm font-semibold text-brand-dark lg:text-base">
        <thead>
          <tr>
            <th className="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">
              Store
            </th>
            <th className="w-1/2 p-4 bg-fill-secondary ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {product ? (
            product.sellers_results?.online_sellers?.map((product: any, index: number) => (
              <OrderItemCard key={index} product={product} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ModalProductDetails;
