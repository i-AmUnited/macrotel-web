import HeroSection from "./heroSection";
import Ctx from "./ctx";
import Features from "./features";
import Testimonial from "./testimonial";

const LandingPage = () => {

    document.title="Home"

    return ( 
        <div className="grid gap-20 mt-10 mb-20">
            <HeroSection/>
            <Ctx/>
            <Features/>
            <Testimonial/>
        </div>
     );
}
 
export default LandingPage;