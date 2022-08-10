import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';

export const siteSettings = {
  name: ' IBYNN',
  description: 'Find Cheap Deals And Compare Prices From Top Brands',
  author: {
    name: 'ITMG Inc.',
    websiteUrl: 'https://ITMG.io',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.svg',
    alt: ' IBYNN',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      // Categories Tab
      {
        id: 2,
        path: '/search',
        label: 'menu-categories',
        subMenu: [
          {
            id: 1,
            path: '/search?q=Household+Items',
            label: 'Household Items',
            subMenu: [
              {
                id: 1,
                path: '/search?q=Air+Freshener',
                label: 'Air Freshener',
                subMenu: [
                  {
                    id: 1,
                    path: '/search?q=air+refreshener+refils',
                    label: 'Refils',
                  },
                ],
              },

              {
                id: 2,
                path: '/search?q=bleach',
                label: 'Bleach',
              },

              {
                id: 3,
                path: '/search?q=dishwasher+detergent',
                label: 'Dishwasher Detergent',
              },

              {
                id: 4,
                path: '/search?q=dishwashing+Soap',
                label: 'Dishwashing Soap',
              },

              {
                id: 5,
                path: '/search?q=dryer+sheets',
                label: 'Dryer Sheets',
              },

              {
                id: 6,
                path: '/search?q=Glass+Cleaner',
                label: 'Glass Cleaner',
              },

              {
                id: 7,
                path: '/search?q=laundry+detergent',
                label: 'Laundry Detergent',
              },

              {
                id: 8,
                path: '/search?q=Sponge',
                label: 'Sponge',
              },

              {
                id: 9,
                path: '/search?q=stain+remover',
                label: 'Stain Remover',
              },

              {
                id: 10,
                path: '/search?q=Tub+Tile+Cleaner',
                label: 'Tub & Tile Cleaner',
              },

              {
                id: 11,
                path: '/search?q=vaccum+bags',
                label: 'Vaccum Bags',
              },

              {
                id: 12,
                path: '/search?q=wipes',
                label: 'Wipes',
              },
            ],
          },
          {
            id: 2,
            path: '/search?q=Personal+Care',
            label: 'Personal Care',
            subMenu: [
              {
                id: 1,
                path: '/search?q=Skin+Lotion',
                label: 'Skin Lotion',
              },

              {
                id: 2,
                path: '/search?q=Bath+&+Body',
                label: 'Bath & Body',
              },

              {
                id: 3,
                path: '/search?q=Baby+Care',
                label: 'Baby Care',
              },
              {
                id: 4,
                path: '/search?q=Cotton+Balls+Pads+&+Swabs',
                label: 'Cotton Balls, Pads & Swabs',
              },

              {
                id: 5,
                path: '/search?q=Deodorants',
                label: 'Deodorants',
              },

              {
                id: 6,
                path: '/search?q=Facial+Tissue',
                label: 'Facial Tissue',
              },

              {
                id: 7,
                path: '/search?q=Feminine+Products',
                label: 'Feminine Products',
              },

              {
                id: 8,
                path: '/search?q=Hair+Removal+&+Shaving+Tools',
                label: 'Hair Removal & Shaving Tools',
              },

              {
                id: 9,
                path: '/search?q=Hand+Soap+&+Refills',
                label: 'Hand Soap & Refills',
              },

              {
                id: 10,
                path: '/search?q=Nail+Care',
                label: 'Nail Care',
              },

              {
                id: 11,
                path: '/search?q=Orale+Care',
                label: 'Orale Care',
              },
            ],
          },
          {
            id: 3,
            path: '/search?q=Fresh+Fruits',
            label: 'Fresh Fruit',
            subMenu: [
              {
                id: 1,
                path: '/search?q=fresh+apples',
                label: 'Apples',
                subMenu: [
                  {
                    id: 1,
                    path: '/search?q=fuji+apples',
                    label: 'Fuji Apples',
                  },

                  {
                    id: 2,
                    path: '/search?q=granny+smith+apples',
                    label: 'Granny Smith Apples',
                  },

                  {
                    id: 3,
                    path: '/search?q=empire+apples',
                    label: 'Empire Apples',
                  },

                  {
                    id: 4,
                    path: '/search?q=gala+apples',
                    label: 'Gala Apples',
                  },

                  {
                    id: 5,
                    path: '/search?q=honey+crisp+apples',
                    label: 'Honey Crisp Apples',
                  },

                  {
                    id: 6,
                    path: '/search?q=McIntosh+apples',
                    label: 'McIntosh Apples',
                  },

                  {
                    id: 7,
                    path: '/search?q=golden+delicious+apples',
                    label: 'Golden Delicous Apples',
                  },

                  {
                    id: 8,
                    path: '/search?q=cripps+pink+apples',
                    label: 'Cripps Pink Apples',
                  },
                ],
              },

              {
                id: 2,
                path: '/search?q=fresh+pears',
                label: 'Pears',
              },

              {
                id: 3,
                path: '/search?q=fresh+peaches',
                label: 'Peaches',
              },

              {
                id: 4,
                path: '/search?q=fresh+strawberries',
                label: 'Strawberries',
              },

              {
                id: 5,
                path: '/search?q=Mango',
                label: 'Mango',
              },

              {
                id: 6,
                path: '/search?q=Watermelon',
                label: 'Watermelon',
              },
            ],
          },
        ],
      },

      // Search Tab
      // {
      //   id: 4,
      //   path: '/search/',
      //   label: 'menu-search',
      // },

      // About Us Tab and Template to add other Tabs on Nav Bar
      {
        id: 7,
        path: '/about-us',
        label: 'menu-about-us',
      },
    ],

    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag />,
      },
    ],
  },
};
