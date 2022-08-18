import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


export const siteSettings: SiteSettings = {
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
        slug: '/',
        name: 'menu-categories',
        children: [
          {
            id: 1,
            slug: '/search?q=Household+Items',
            name: 'Household Items',
            children: [
              {
                id: 1,
                slug: '/search?q=Air+Freshener',
                name: 'Air Freshener',
                children: [
                  {
                    id: 1,
                    slug: '/search?q=air+refreshener+refils',
                    name: 'Refils',
                  },
                ],
              },

              {
                id: 2,
                slug: '/search?q=bleach',
                name: 'Bleach',
              },

              {
                id: 3,
                slug: '/search?q=dishwasher+detergent',
                name: 'Dishwasher Detergent',
              },

              {
                id: 4,
                slug: '/search?q=dishwashing+Soap',
                name: 'Dishwashing Soap',
              },

              {
                id: 5,
                slug: '/search?q=dryer+sheets',
                name: 'Dryer Sheets',
              },

              {
                id: 6,
                slug: '/search?q=Glass+Cleaner',
                name: 'Glass Cleaner',
              },

              {
                id: 7,
                slug: '/search?q=laundry+detergent',
                name: 'Laundry Detergent',
              },

              {
                id: 8,
                slug: '/search?q=Sponge',
                name: 'Sponge',
              },

              {
                id: 9,
                slug: '/search?q=stain+remover',
                name: 'Stain Remover',
              },

              {
                id: 10,
                slug: '/search?q=Tub+Tile+Cleaner',
                name: 'Tub & Tile Cleaner',
              },

              {
                id: 11,
                slug: '/search?q=vaccum+bags',
                name: 'Vaccum Bags',
              },

              {
                id: 12,
                slug: '/search?q=wipes',
                name: 'Wipes',
              },
            ],
          },
          {
            id: 2,
            slug: '/search?q=Personal+Care',
            name: 'Personal Care',
            children: [
              {
                id: 1,
                slug: '/search?q=Skin+Lotion',
                name: 'Skin Lotion',
              },

              {
                id: 2,
                slug: '/search?q=Bath+&+Body',
                name: 'Bath & Body',
              },

              {
                id: 3,
                slug: '/search?q=Baby+Care',
                name: 'Baby Care',
              },
              {
                id: 4,
                slug: '/search?q=Cotton+Balls+Pads+&+Swabs',
                name: 'Cotton Balls, Pads & Swabs',
              },

              {
                id: 5,
                slug: '/search?q=Deodorants',
                name: 'Deodorants',
              },

              {
                id: 6,
                slug: '/search?q=Facial+Tissue',
                name: 'Facial Tissue',
              },

              {
                id: 7,
                slug: '/search?q=Feminine+Products',
                name: 'Feminine Products',
              },

              {
                id: 8,
                slug: '/search?q=Hair+Removal+&+Shaving+Tools',
                name: 'Hair Removal & Shaving Tools',
              },

              {
                id: 9,
                slug: '/search?q=Hand+Soap+&+Refills',
                name: 'Hand Soap & Refills',
              },

              {
                id: 10,
                slug: '/search?q=Nail+Care',
                name: 'Nail Care',
              },

              {
                id: 11,
                slug: '/search?q=Orale+Care',
                name: 'Orale Care',
              },
            ],
          },
          {
            id: 3,
            slug: '/search?q=Fresh+Fruits',
            name: 'Fresh Fruit',
            children: [
              {
                id: 1,
                slug: '/search?q=fresh+apples',
                name: 'Apples',
                children: [
                  {
                    id: 1,
                    slug: '/search?q=fuji+apples',
                    name: 'Fuji Apples',
                  },

                  {
                    id: 2,
                    slug: '/search?q=granny+smith+apples',
                    name: 'Granny Smith Apples',
                  },

                  {
                    id: 3,
                    slug: '/search?q=empire+apples',
                    name: 'Empire Apples',
                  },

                  {
                    id: 4,
                    slug: '/search?q=gala+apples',
                    name: 'Gala Apples',
                  },

                  {
                    id: 5,
                    slug: '/search?q=honey+crisp+apples',
                    name: 'Honey Crisp Apples',
                  },

                  {
                    id: 6,
                    slug: '/search?q=McIntosh+apples',
                    name: 'McIntosh Apples',
                  },

                  {
                    id: 7,
                    slug: '/search?q=golden+delicious+apples',
                    name: 'Golden Delicous Apples',
                  },

                  {
                    id: 8,
                    slug: '/search?q=cripps+pink+apples',
                    name: 'Cripps Pink Apples',
                  },
                ],
              },
              {
                id: 2,
                slug: '/search?q=fresh+pears',
                name: 'Pears',
              },
              {
                id: 3,
                slug: '/search?q=fresh+peaches',
                name: 'Peaches',
              },
              {
                id: 4,
                slug: '/search?q=fresh+strawberries',
                name: 'Strawberries',
              },
              {
                id: 5,
                slug: '/search?q=Mango',
                name: 'Mango',
              },
              {
                id: 6,
                slug: '/search?q=Watermelon',
                name: 'Watermelon',
              },
            ],
          },
        ],
      },

      // Search Tab
      // {
      //   id: 4,
      //   slug: '/search/',
      //   name: 'menu-search',
      // },

      // About Us Tab and Template to add other Tabs on Nav Bar
      {
        id: 7,
        slug: '/about-us',
        name: 'menu-about-us',
      },
    ]
  },
};


(async function getData() {
  const {data: { data }} = await http.get(API_ENDPOINTS.CATEGORIES);
  siteSettings.site_header.menu[0].children = [...data];
})();

  export interface Author {
      name: string;
      websiteUrl: string;
      address: string;
  }

  export interface Logo {
      url: string;
      alt: string;
      href: string;
      width: number;
      height: number;
  }

  export interface Child {
      id: number;
      slug: string;
      name: string;
      children?: Child[];
  }

  export interface Menu {
      id: number;
      slug: string;
      name: string;
      children?: Child[];
  }

  export interface SiteHeader {
      menu: Menu[];
  }

  export interface SiteSettings {
      name: string;
      description: string;
      author: Author;
      logo: Logo;
      defaultLanguage: string;
      currencyCode: string;
      site_header: SiteHeader;
  }

