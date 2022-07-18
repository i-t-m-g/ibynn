import Checkout from "../Components/checkout";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import PreLoader from "../Components/PreLoader";
import TopBar from "../Components/TopBar";




function Index() {
    return ( 
        <div className="page-wrapper">

            <PreLoader />
            <Footer />
            <TopBar />
            <Hero />
            <Checkout />


        </div>
     );
}
