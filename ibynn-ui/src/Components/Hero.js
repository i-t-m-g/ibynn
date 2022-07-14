function Hero() {
    return ( 
     <div className="section hero-section wf-section">
            <div className="wrapper text-white">
                <div
                style={{
                    WebkitTransform:
                    "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                    "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                    "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                    "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 0
                }}
                className="hero-intro"
                >
                <div className="title">Say Hello to IBYNN!</div>
                <h1>The Best For Less</h1>
                <a href="catalog.html" className="button w-button">
                    Open Catalog
                </a>
                </div>
            </div>
                 <a
                        href="#Scroll-Section"
                        style={{
                        opacity: 0,
                        WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="scroll-mouse-link w-inline-block"
                    >
                        <div className="mouse-icon">
                        <div className="mouse-wheel-icon" />
                        </div>
                </a>
     </div>


     );
}

export default Hero;
    

