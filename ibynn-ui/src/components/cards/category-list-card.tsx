import Link from 'next/link';
import Image from '@components/ui/image';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { Category } from '@framework/types';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { LinkProps } from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router';
import { useModalAction } from '@components/common/modal/modal.context';
import { useUI } from '@contexts/ui.context';

interface Props {
  category: Category;
  href: LinkProps['href'];
  className?: string;
  variant?: 'default' | 'small';
}

const CategoryListCard: React.FC<Props> = ({
  category,
  className,
  href,
  variant = 'default',
}) => {
  const { name, icon } = category;
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
      console.log(category)
      toggleCollapse();
    } 
    else {
      const pathname = '/search';
      const { query } = router;
      const { type, ...rest } = query;
      closeModal();
      router.push(category.slug);
      displaySidebar && closeSidebar();
    }
  }


  return (
    <div onClick={onClick} rel={''}>
      <a
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
              '2xl:w-12 3xl:w-auto 2xl:h-12 3xl:h-auto': variant === 'default',
            })}
          >
            <Image
              src={icon ?? '/assets/placeholder/category-small.svg'}
              alt={name || t('text-category-thumbnail')}
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-15px text-brand-dark capitalize ltr:pl-2.5 rtl:pr-2.5  md:ltr:pl-4 md:rtl:pr-4 2xl:ltr:pl-3 2xl:rtl:pr-3 3xl:ltr:pl-4 3xl:rtl:pr-5">
            {name}
          </h3>
        </div>
        <div className="flex items-center transition-all transform group-hover:translate-x-1">
          <IoIosArrowDown className="text-base text-brand-dark text-opacity-40" />
        </div>
      </a>
      {Array.isArray(category.children) && isOpen ? (
        <li className='list-none'>
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
                  href={"/"}
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
    </div>
  );
};

export default CategoryListCard;
