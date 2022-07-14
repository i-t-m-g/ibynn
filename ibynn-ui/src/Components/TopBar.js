function TopBar() {
    return (  
        <div
        data-collapse="medium"
        data-animation="default"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="nav-bar w-nav"
      >
                <div className="nav-top">
                <div className="wrapper nav-top-wrapper">
                    <div className="nav-top-info">
                    <div className="nav-top-text">Call Us: +1 111 222-3456</div>
                    <div className="w-hidden-tiny">
                        Email:{" "}
                        <a href="#" className="link-white">
                        ibynn@gmail.com
                        </a>
                    </div>
                    </div>
                    <div className="nav-top-social">
                    <a
                        href="http://"
                        target="_blank"
                        className="social-link w-inline-block"
                    >
                        <img src="images/twitter-icon-white.svg" alt="" />
                    </a>
                    <a
                        href="http://Lorem Ipsum"
                        target="_blank"
                        className="social-link w-inline-block"
                    >
                        <img src="images/facebook-icon-white.svg" alt="" />
                    </a>
                    <a
                        href="http://Lorem Ipsum"
                        target="_blank"
                        className="social-link w-inline-block"
                    >
                        <img src="images/instagram-icon-white.svg" alt="" />
                    </a>
                    <a
                        href="http://Lorem Ipsum"
                        target="_blank"
                        className="social-link w-inline-block"
                    >
                        <img src="images/pinterest-icon-white.svg" alt="" />
                    </a>
                    <a
                        href="http://Lorem Ipsum"
                        target="_blank"
                        className="social-link w-inline-block"
                    >
                        <img src="images/youtube-icon.svg" alt="" />
                    </a>
                    </div>
                </div>
                </div>
                        <div className="nav-main">
                        <div className="wrapper nav-bar-wrapper">
                            <a
                            href="index.html"
                            aria-current="page"
                            className="brand w-nav-brand w--current"
                            >
                            <div>IBYNN</div>
                            </a>
                            <div className="navigation">
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <a href="catalog.html" className="nav-link w-nav-link">
                                Catalog
                                </a>
                                <a href="delivery.html" className="nav-link w-nav-link">
                                Delivery
                                </a>
                                <a href="about.html" className="nav-link w-nav-link">
                                About
                                </a>
                                <a href="contacts.html" className="nav-link w-nav-link">
                                Contacts
                                </a>
                            </nav>
                            <div className="menu-button w-nav-button">
                                <div className="w-icon-nav-menu" />
                            </div>
                            <div
                                data-node-type="commerce-cart-wrapper"
                                data-open-product=""
                                data-wf-cart-type="modal"
                                data-wf-cart-query=""
                                data-wf-page-link-href-prefix=""
                                className="w-commerce-commercecartwrapper"
                            >
                                <a
                                href="#"
                                data-node-type="commerce-cart-open-link"
                                className="w-commerce-commercecartopenlink cart-button w-inline-block"
                                >
                                <div className="w-inline-block">Cart</div>
                                <img src="images/cart-icon.svg" alt="" className="cart-icon" />
                                <div className="w-commerce-commercecartopenlinkcount item-count">
                                    0
                                </div>
                                </a>
                                <div
                                data-node-type="commerce-cart-container-wrapper"
                                style={{ display: "none" }}
                                className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
                                >
                                <div
                                    data-node-type="commerce-cart-container"
                                    className="w-commerce-commercecartcontainer cart-container"
                                >
                                    <div className="w-commerce-commercecartheader cart-header">
                                    <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                                    <a
                                        href="#"
                                        data-node-type="commerce-cart-close-link"
                                        className="w-commerce-commercecartcloselink w-inline-block"
                                    >
                                        <svg width="16px" height="16px" viewBox="0 0 16 16">
                                        <g
                                            stroke="none"
                                            strokeWidth={1}
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <g fillRule="nonzero" fill="#333333">
                                            <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                                            </g>
                                        </g>
                                        </svg>
                                    </a>
                                    </div>
                                    <div className="w-commerce-commercecartformwrapper">
                                    <form
                                        data-node-type="commerce-cart-form"
                                        style={{ display: "none" }}
                                        className="w-commerce-commercecartform"
                                    >
                                        <div
                                        className="w-commerce-commercecartlist cart-list"
                                        data-wf-collection="database.commerceOrder.userItems"
                                        data-wf-template-id="wf-template-9336d8a7-ba52-2880-0c69-78271ccadf80"
                                        />
                                        <div className="w-commerce-commercecartfooter cart-footer">
                                        <div className="w-commerce-commercecartlineitem">
                                            <div>Subtotal</div>
                                            <div className="w-commerce-commercecartordervalue" />
                                        </div>
                                        <div>
                                            <div data-node-type="commerce-cart-quick-checkout-actions">
                                            <a
                                                data-node-type="commerce-cart-apple-pay-button"
                                                role="button"
                                                tabIndex={0}
                                                aria-haspopup="dialog"
                                                aria-label="Apple Pay"
                                                style={{
                                                backgroundImage:
                                                    "-webkit-named-image(apple-pay-logo-white)",
                                                backgroundSize: "100% 50%",
                                                backgroundPosition: "50% 50%",
                                                backgroundRepeat: "no-repeat"
                                                }}
                                                className="w-commerce-commercecartapplepaybutton cart-pay-button"
                                            >
                                                <div />
                                            </a>
                                            <a
                                                data-node-type="commerce-cart-quick-checkout-button"
                                                role="button"
                                                tabIndex={0}
                                                aria-haspopup="dialog"
                                                style={{ display: "none" }}
                                                className="w-commerce-commercecartquickcheckoutbutton cart-pay-button"
                                            >
                                                <svg
                                                className="w-commerce-commercequickcheckoutgoogleicon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                >
                                                <defs>
                                                    <polygon
                                                    id="google-mark-a"
                                                    points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                                    />
                                                    <polygon
                                                    id="google-mark-c"
                                                    points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                                    />
                                                </defs>
                                                <g fill="none" fillRule="evenodd">
                                                    <path
                                                    fill="#4285F4"
                                                    d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                                    />
                                                    <path
                                                    fill="#34A853"
                                                    d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                                    />
                                                    <g transform="translate(0 4)">
                                                    <mask id="google-mark-b" fill="#fff">
                                                        <use xlinkHref="#google-mark-a" />
                                                    </mask>
                                                    <path
                                                        fill="#FBBC04"
                                                        d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                                        mask="url(#google-mark-b)"
                                                    />
                                                    </g>
                                                    <mask id="google-mark-d" fill="#fff">
                                                    <use xlinkHref="#google-mark-c" />
                                                    </mask>
                                                    <path
                                                    fill="#EA4335"
                                                    d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                                    mask="url(#google-mark-d)"
                                                    />
                                                </g>
                                                </svg>
                                                <svg
                                                className="w-commerce-commercequickcheckoutmicrosofticon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                >
                                                <g fill="none" fillRule="evenodd">
                                                    <polygon
                                                    fill="#F05022"
                                                    points="7 7 1 7 1 1 7 1"
                                                    />
                                                    <polygon
                                                    fill="#7DB902"
                                                    points="15 7 9 7 9 1 15 1"
                                                    />
                                                    <polygon
                                                    fill="#00A4EE"
                                                    points="7 15 1 15 1 9 7 9"
                                                    />
                                                    <polygon
                                                    fill="#FFB700"
                                                    points="15 15 9 15 9 9 15 9"
                                                    />
                                                </g>
                                                </svg>
                                                <div>Pay with browser.</div>
                                            </a>
                                            </div>
                                            <div
                                            style={{ position: "relative" }}
                                            data-wf-paypal-button='{"layout":"horizontal","color":"blue","shape":"pill","label":"paypal","tagline":false,"note":false}'
                                            className="cart-pay-button"
                                            >
                                            <div
                                                style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                opacity: 0,
                                                zIndex: 999,
                                                cursor: "auto"
                                                }}
                                            />
                                            </div>
                                            <a
                                            href="checkout.html"
                                            value="Continue to Checkout"
                                            data-node-type="cart-checkout-button"
                                            className="w-commerce-commercecartcheckoutbutton button"
                                            data-loading-text="Hang Tight..."
                                            >
                                            Continue to Checkout
                                            </a>
                                        </div>
                                        </div>
                                    </form>
                                    <div className="w-commerce-commercecartemptystate">
                                        <div>No items found.</div>
                                    </div>
                                    <div
                                        style={{ display: "none" }}
                                        data-node-type="commerce-cart-error"
                                        className="w-commerce-commercecarterrorstate form-error"
                                    >
                                        <div
                                        className="w-cart-error-msg"
                                        data-w-cart-quantity-error="Product is not available in this quantity."
                                        data-w-cart-general-error="Something went wrong when adding this item to the cart."
                                        data-w-cart-checkout-error="Checkout is disabled on this site."
                                        data-w-cart-cart_order_min-error="Cart failed."
                                        data-w-cart-subscription_error-error="Cart failed."
                                        >
                                        Product is not available in this quantity.
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
        </div>
      
    );
}

export default TopBar;