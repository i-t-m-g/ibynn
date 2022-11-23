import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@utils/routes';
import { useTranslation } from 'next-i18next';
import useWindowSize from '@utils/use-window-size';
import {
  useModalAction,
  useModalState,
} from '@components/common/modal/modal.context';
import CloseButton from '@components/ui/close-button';
import ModalProductDetails from './modal-product-details';
import axios from 'axios';

export default function ProductPopup() {
  const { data } = useModalState();
  const { closeModal } = useModalAction();
  const { slug, title } = data;
  const productUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}${ROUTES.PRODUCT}/${slug}`;
  const url = `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/compare?product_id=${data.product_id}`;
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    const response = axios.get(url).then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="md:w-[600px] lg:w-[940px] xl:w-[1180px] 2xl:w-[1360px] mx-auto p-1 lg:p-0 xl:p-3 bg-brand-light rounded-md">
      <CloseButton onClick={closeModal} />
      <div className="overflow-hidden">
        <div className="px-4 pt-4 md:px-6 lg:p-8 2xl:p-10 mb-9 lg:mb-2 md:pt-7 2xl:pt-10">
          <div className="items-start justify-between lg:flex">
            <div className="items-center justify-center mb-6 overflow-hidden xl:flex md:mb-8 lg:mb-0">
              {
                <div className="flex items-center justify-center w-auto">
                  <img
                    style={{ width: '150px' }}
                    src={data.thumbnail}
                    alt={title}
                  />
                </div>
              }
              <ModalProductDetails product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
