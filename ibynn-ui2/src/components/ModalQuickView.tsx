import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import CategoryQuickView from "./CategoryQuickView";
import ProductQuickView from "./ProductQuickView";
import ProductQuickView2 from "./ProductQuickView2";

export interface ModalQuickViewProps {
  show: boolean;
  onCloseModalQuickView: () => void;
  product?:any;
  category?:any;
  type: 'product' | 'category';
  extracted_price?: any;
}

const ModalQuickView: FC<ModalQuickViewProps> = ({
  show,
  onCloseModalQuickView,
  product,
  category,
  type,
  extracted_price
}) => {
  const location = useLocation();

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50"
        onClose={onCloseModalQuickView}
      >
        <div className="flex items-stretch md:items-center justify-center h-full text-center md:px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/40 dark:bg-black/70" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-flex xl:py-8 place-self-center w-5/6 h-5/6 lg:w-full lg:max-w-5xl lg:max-h-full">
              <div
                className="flex-1 rounded-2xl flex overflow-hidden max-h-full p-8 w-full text-left align-middle transition-all transform lg:rounded-2xl bg-white 
              dark:bg-neutral-900 dark:border dark:border-slate-700 dark:text-slate-100 shadow-xl"
              >
                <span className="absolute right-3 top-3 z-50">
                  <ButtonClose onClick={onCloseModalQuickView} />
                </span>

                <div className="flex-1 flex justify-center overflow-y-auto rounded-xl hiddenScrollbar">
                  {!product && !category ? (<ButtonPrimary className="place-self-center" loading>Loading...</ButtonPrimary>) : ''}
                  {product && type === 'product' && <ProductQuickView extracted_price={extracted_price} product={product} />}
                  {category && type === 'category' && <CategoryQuickView category={category} />}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalQuickView;
