import Team from "../Components/team";
import About from "../Components/aboutUs";
import WhoAreWe from "../Components/whoAreWe";
import Testimonial from "./Landing/testimonial";

const AboutUs = () => {

    document.title="About us"

    return ( 
        <div className="grid gap-20 mt-10 mb-20">
            <About />
            <WhoAreWe />
            <Team />
            <Testimonial />
        </div>
     );
}
 
export default AboutUs;