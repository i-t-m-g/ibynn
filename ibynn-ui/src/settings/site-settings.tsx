import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';

export const siteSettings = {
  name: ' IBYNN',
  description:
    'food & groceries haah',
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
        subMenu:[
                
                {
                  id: 1,
                  path: '/search',
                  label: 'Home Goods',
                  subMenu: 
                          [

                            {
                              id: 1,
                              path: '/search',
                              label: 'Home & Kitchen',
                            },

                            {
                              id: 2,
                              path: '/search',
                              label: 'Appliances',
                            },
                            
                            {
                              id: 3,
                              path: '/search',
                              label: 'Tools & Supplies',
                            },

                            {
                              id: 4,
                              path: '/search',
                              label: 'Health & Households',
                            },

                          
                          ],
                },


                {
                  id: 2,
                  path: '/search',
                  label: 'Personal Care',
                  subMenu: 
                          [

                            {
                              id: 1,
                              path: '/search',
                              label: 'Skin Lotion',
                            },

                            {
                              id: 2,
                              path: '/search',
                              label: 'Bath & Body',
                            },

                            {
                              id: 3,
                              path: '/search',
                              label: 'Baby Care',
                            },
                            {
                              id: 4,
                              path: '/search',
                              label: 'Cotton Balls, Pads & Swabs',
                            },

                            {
                              id: 5,
                              path: '/search',
                              label: 'Deodorants',
                            },

                            {
                              id: 6,
                              path: '/search',
                              label: 'Facial Tissue',
                            },

                            {
                              id: 7,
                              path: '/search',
                              label: 'Feminine Products',
                            },

                            {
                              id: 8,
                              path: '/search',
                              label: 'Hair Removal & Shaving Tools',
                            },
                             
                            {
                              id: 9,
                              path: '/search',
                              label: 'Hand Soap & Refills',
                            },

                            {
                              id: 10,
                              path: '/search',
                              label: 'Nail Care',
                            },

                            {
                              id: 11,
                              path: '/search',
                              label: 'Orale Care',
                            },

                          ],
                },
                
                ],
      },


 
      // Search Tab
      {
        id: 4,
        path: '/search/',
        label: 'menu-search',
      },
    

      // About Us Tab and Template to add other Tabs on Nav Bar
          {
            id:7,
            path: '/about-us',
            label: 'menu-about-us',
          }
          


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
