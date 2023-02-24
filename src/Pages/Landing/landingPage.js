import HeroSection from "./heroSection";
import Ctx from "./ctx";
import Features from "./features";
import Testimonial from "./testimonial";

import Navbar from '../../Components/navBar';


const LandingPage = () => {

    document.title="Home"

    return ( 
        <div>
            <Navbar />
        <div className="grid gap-20 mt-10 mb-20">
            <HeroSection/>
            <Ctx/>
            <Features/>
            <Testimonial/>
        </div>
        </div>
     );
}
 
export default LandingPage;