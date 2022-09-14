import Link from 'next/link';
import squiggly from '../cards/squiggly.svg';
import Image from '@components/ui/image';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { Category } from '@framework/types';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { LinkProps } from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useModalAction } from '@components/common/modal/modal.context';
import { useUI } from '@contexts/ui.context';
import React, { useRef, useEffect } from 'react';
import ReactLogo from './squiggly.svg';

interface Props {
  category: Category;
  href: LinkProps['href'];
  className?: string;
  variant?: 'default' | 'small';
  style?: any;
}

const CategoryListCard: React.FC<Props> = ({
  category,
  className,
  href,
  variant = 'default',
}) => {
  const { icon } = category;
  let name: string =
    category?.name.length > 20
      ? category.name.substring(0, 20) + '...'
      : category.name;
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const { closeModal } = useModalAction();
  const { displaySidebar, closeSidebar } = useUI();

  function toggleCollapse() {
    setOpen((prevValue) => !prevValue);
  }

  function onClick() {
    if (Array.isArray(category.children) && category.children.length > 1) {
      toggleCollapse();
    } else {
      const pathname = '/search';
      const { query } = router;
      const { type, ...rest } = query;
      closeModal();
      router.push(category.slug);
      displaySidebar && closeSidebar();
    }
  }

  return (
    <>
      <div
        className="flex items-center justify-around flex-col shadow-xl shadow-blue-300 border-solid border-2 border-blue-900 rounded-lg"
        onClick={onClick}
        style={{
          width: '100%',
          minHeight: '150px',
          cursor: 'pointer',
          margin: '5px',
          padding: '10px',
        }}
      >
        <span className="text-lg text-brand-dark capitalize">{name}</span>
        {/* <div
          className={cn('inline-flex shrink-0 w-9 h-9', {
            '2xl:w-12 3xl:w-auto 2xl:h-12 3xl:h-auto': variant === 'default',
          })}
        > */}
        <Image
          src={icon ?? '/assets/placeholder/category-small.svg'}
          alt={name || t('text-category-thumbnail')}
          width={80}
          height={80}
        />
        {/* </div> */}
        {/* {category.children && category.children.length > 0 && <div className="flex items-center transition-all transform group-hover:translate-x-1"> */}
        {/* <IoIosArrowDown className="text-lg text-brand-dark" /> */}
        {/* </div>} */}
      </div>
      {Array.isArray(category.children) && isOpen ? (
        <li className="list-none">
          <ul
            key="content"
            className="py-3 text-xs border-t border-border-base"
          >
            {category.children?.map((currentItem) => {
              // const childDepth = depth + 1;
              return (
                <CategoryListCard
                  key={`${currentItem.name}${currentItem.slug}`}
                  category={currentItem}
                  href={'/'}
                  // depth={childDepth}
                  className={cn(
                    'text-sm ltr:pl-14 rtl:pr-14 py-2.5 ltr:pr-4 rtl:pl-4'
                  )}
                />
              );
            })}
          </ul>
        </li>
      ) : null}
    </>
  );
};

export default CategoryListCard;
