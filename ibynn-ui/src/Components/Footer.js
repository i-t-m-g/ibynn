function Footer() {
    return ( 
        <div className="section color no-padding-vertical wf-section">
            <div className="wrapper text-white">
                <div className="footer">
                    <div className="footer-left">
                    <a
                        href="index.html"
                        aria-current="page"
                        className="footer-brand w-nav-brand w--current"
                    >
                        <div>IBYNN</div>
                    </a>
                    </div>
                    <div className="footer-nav">
                    <a
                        href="index.html"
                        aria-current="page"
                        className="footer-link w--current"
                    >
                        Home
                    </a>
                    <a href="catalog.html" className="footer-link">
                        Catalog
                    </a>
                    <a href="delivery.html" className="footer-link">
                        Delivery
                    </a>
                    <a href="about.html" className="footer-link">
                        About
                    </a>
                    <a href="contacts.html" className="footer-link">
                        Contacts
                    </a>
                    </div>
                    <div className="footer-social">
                    <a
                        href="https://elasticthemes.com"
                        target="_blank"
                        className="footer-social-link w-inline-block"
                    >
                        <img src="images/twitter-icon-white.svg" alt="" />
                    </a>
                    <a
                        href="https://elasticthemes.com"
                        target="_blank"
                        className="footer-social-link w-inline-block"
                    >
                        <img src="images/facebook-icon-white.svg" alt="" />
                    </a>
                    <a
                        href="https://elasticthemes.com"
                        target="_blank"
                        className="footer-social-link w-inline-block"
                    >
                        <img src="images/instagram-icon-white.svg" alt="" />
                    </a>
                    <a
                        href="https://elasticthemes.com"
                        target="_blank"
                        className="footer-social-link w-inline-block"
                    >
                        <img src="images/pinterest-icon-white.svg" alt="" />
                    </a>
                    <a
                        href="https://elasticthemes.com"
                        target="_blank"
                        className="footer-social-link w-inline-block"
                    >
                        <img src="images/youtube-icon.svg" alt="" />
                    </a>
                    </div>
                    <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <div>
                        Created with love by{" "}
                        <a
                            href="https://elasticthemes.com"
                            target="_blank"
                            className="link-white"
                        >
                            I.T.M.G
                        </a>
                        </div>
                    </div>
                        <div className="footer-bottom-right">
                            <div>
                            Powered by{" "}
                            <a
                                href="https://webflow.com/"
                                target="_blank"
                                className="link-white"
                            >
                                I.T.M.G
                            </a>
                            </div>
                            <div className="footer-bottom-divider" />
                            <a href="template/licensing.html" className="link-white">
                            Licensing
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

     );
}

export default Footer;