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
import CategoryGridListBlock from '@components/common/category-grid-list-block';
import CategoryGridList from '@components/common/category-grid-list';

interface Props {
  category: Category;
  href: LinkProps['href'];
  className?: string;
  variant?: 'default' | 'small';
  style?: any;
  setDropdownData: any;
  dropdownData: any;
  ref?: any;
}

const CategoryListCard: React.FC<any> = ({
  category,
  setDropdownData,
  dropdownData,
  row,
  categoryData,
  setActiveRow
}) => {
  const { icon } = category;
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const { closeModal } = useModalAction();
  const { displaySidebar, closeSidebar } = useUI();

  function toggleCollapse() {
    setOpen((prevValue) => !prevValue);
  }
  
  function onClick() {
    if (Array.isArray(category.children) && category.children.length > 0) {
      if (dropdownData?.length > 0) {
        console.log(dropdownData[0].parent, category.name)
        if (dropdownData[0].parent === category.name) {
          setDropdownData([]);
        }
        else {
          setDropdownData(category);
        }
      }
      else {
        setDropdownData(category);
      }

      // toggleCollapse();
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
      <div
        onClick={onClick}
        className="flex items-center justify-around flex-col shadow-xl shadow-blue-300 border-solid border-2 border-blue-900 rounded-lg"
        style={{
          width: '100%',
          minHeight: '160px',
          cursor: 'pointer',
          margin: '5px',
          padding: '10px',
        }}
      >
        <span className="text-sm text-brand-dark capitalize">{category.name}</span>
        <Image
          src={icon ?? '/assets/placeholder/category-small.svg'}
          alt={category.name}
          width={120}
          height={120}
        />
        {category.children && category.children.length > 0 && (
          <div className="flex items-center transition-all transform group-hover:translate-x-1">
            <IoIosArrowDown className="text-lg text-brand-dark" />
          </div>
        )}
      </div>
  );
};

export const LongCategoryListCard: React.FC<any> = ({
  category,
  className,
  href,
  setDropdownData,
  variant = 'default',
}) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { name, icon, slug } = category;
  const [showDrop, setShowDrop] = useState(false);

  const handleClick = () => {
    if (category.children?.length > 0) {
      setShowDrop(!showDrop)
    }
    else {
      router.push(slug)
    }
  }
  
  return (
    <div
      onClick={handleClick}
      style={{ width: '100%' }}
      className="cursor-pointer	border-t border-border-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3"
    >
      <div>
        <div
          className={cn(
            'group flex justify-between items-center px-3.5 2xl:px-4 transition',
            {
              'py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3': variant === 'default',
              'py-2 3xl:py-3': variant === 'small',
            },
            className
          )}
        >
          <div className="flex items-center">
            <div
              className={cn('inline-flex shrink-0 w-9 h-9', {
                '2xl:w-12 3xl:w-auto 2xl:h-12 3xl:h-auto':
                  variant === 'default',
              })}
            >
              <Image
                src={icon ?? '/assets/placeholder/category-small.svg'}
                alt={name || t('text-category-thumbnail')}
                width={40}
                height={40}
              />
            </div>
            <h3 className="cursor-pointer	text-15px text-brand-dark capitalize ltr:pl-2.5 rtl:pr-2.5  md:ltr:pl-4 md:rtl:pr-4 2xl:ltr:pl-3 2xl:rtl:pr-3 3xl:ltr:pl-4 3xl:rtl:pr-5">
              {name}
            </h3>
          </div>
          <div className="flex items-center transition-all transform group-hover:translate-x-1">
            {category.children && category.children.length > 0 ? (
              <IoIosArrowDown className="text-base text-brand-dark text-opacity-40" />
            ) : (
              <IoIosArrowForward className="text-base text-brand-dark text-opacity-40" />
            )}
          </div>
        </div>
      </div>
      {showDrop && <CategoryGridList data={category.children} />}
    </div>
  );
};

export default CategoryListCard;
