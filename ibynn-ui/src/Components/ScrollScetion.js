function ScrollSection() {
    return ( 
        <div id="Scroll-Section" className="section haze wf-section">
            <div className="wrapper">
                {/* The Categories sction on the home page */}
                <div className="home-categories">
                {/* The first category box */}
                <div
                    data-w-id="79f09a57-05ab-ed81-c059-4d50244b2341"
                    style={{ opacity: 0 }}
                    className="home-category-card"
                >
                    <div className="home-category-info-1">
                    <h3>
                        Home <br />
                        Products
                    </h3>
                    <a href="catalog.html" className="button small white w-button">
                        Shop Now
                    </a>
                    </div>
                </div>
                {/* The second category box */}
                <div
                    data-w-id="b498480a-a03d-afff-8227-912980ab2a0a"
                    style={{ opacity: 0 }}
                    className="home-category-card red"
                >
                    <div className="home-category-info-2">
                    <h3>
                        Personal
                        <br />
                        Care
                    </h3>
                    <a href="catalog.html" className="button small white w-button">
                        Shop Now
                    </a>
                    </div>
                </div>
                <br />
                {/* The third category box */}
                {/* <div data-w-id="b498480a-a03d-afff-8227-912980ab2a0a" style="opacity:0" class="home-category-card green">
                <div class="home-category-info-3">
                    <h3>Baby<br>Care</h3>
                    <a href="catalog.html" class="button small white w-button">Shop Now</a>
                </div>
                </div> */}
                </div>
            </div>
        </div>
);
}

export default ScrollSection;