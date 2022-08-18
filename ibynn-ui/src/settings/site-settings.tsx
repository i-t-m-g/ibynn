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
        children: []
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

