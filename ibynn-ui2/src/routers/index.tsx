import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import AccountPage from "containers/AccountPage/AccountPage";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import SiteHeader from "containers/SiteHeader";
import PageCollection from "containers/PageCollection";
import PageSearch from "containers/PageSearch";
import ProductDetailPage from "containers/ProductDetailPage/ProductDetailPage";
import ProductDetailPage2 from "containers/ProductDetailPage/ProductDetailPage2";
import AccountSavelists from "containers/AccountPage/AccountSavelists";
import AccountPass from "containers/AccountPage/AccountPass";
import AccountBilling from "containers/AccountPage/AccountBilling";
import AccountOrder from "containers/AccountPage/AccountOrder";
import CartPage from "containers/ProductDetailPage/CartPage";
import CheckoutPage from "containers/PageCheckout/CheckoutPage";
import PageCollection2 from "containers/PageCollection2";
import { createContext } from "vm";
import { DataContextProvider } from "context/DataContext/DataContext";
import ProductCollection from "containers/ProductCollection";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/#", exact: true, component: PageHome },
  //
  { path: "/home-header-2", exact: true, component: PageHome },
  { path: "/product-detail", component: ProductDetailPage },
  { path: "/product-detail-2", component: ProductDetailPage2 },
  //
  { path: "/product-collection", component: ProductCollection },
  { path: "/page-search", component: PageSearch },
  //
  { path: "/account", component: AccountPage },
  { path: "/account-savelists", component: AccountSavelists },
  { path: "/account-change-password", component: AccountPass },
  { path: "/account-billing", component: AccountBilling },
  { path: "/account-my-order", component: AccountOrder },
  //
  { path: "/cart", component: CartPage },
  { path: "/checkout", component: CheckoutPage },
  //
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
];

const Routes = () => {

  return (
    <BrowserRouter basename="/">
      <DataContextProvider>
        <ScrollToTop />
        <SiteHeader />
        <Switch>
          {pages.map(({ component, path, exact }) => {
            return (
              <Route
                key={path}
                component={component}
                exact={!!exact}
                path={path}
              />
            );
          })}
          <Route path="/page-collection">
            <Route path="/:id" component={PageCollection} />

          </Route>
          <Route component={Page404} />
        </Switch>
        <Footer />
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
