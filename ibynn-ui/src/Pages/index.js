import Footer from "../Components/Footer";
import ScrollSection from "../Components/ScrollScetion";
import PreLoader from "../Components/PreLoader";
import TopBar from "../Components/TopBar";
import Hero from "../Components/Hero";
import MoreAbout from "../Components/MoreAbout";
import SubscribeSection from "../Components/SubsribeSection";

function Index() {
    return ( 
        <div>
            <TopBar />
            <ScrollSection />
            <PreLoader />
            <Hero />
            <MoreAbout />
            <SubscribeSection />
            <Footer />
        </div>
     );
}

export default Index;