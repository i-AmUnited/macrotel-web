import Team from "../Components/team";
import Testimonial from "./Landing/testimonial";
import Features from "./Landing/features";

import Navbar from '../Components/navBar';

import pic1 from "../Images/one.jpg";
import pic2 from "../Images/Taofeek.jpg";
import pic3 from "../Images/Quad.jpg";

import { motion } from "framer-motion";

const AboutUs = () => {
  document.title = "About us";

  return (
    <div>
    <Navbar />
    <div className="grid gap-20 mt-10 mb-20">
      <div>
      <div className="grid justify-items-center">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1,  y: 0, }}
          transition={{ type: "spring", duration: 0.5, stiffness: 120 }}
          className="w-full md:w-1/2 text-center text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#9747FF] mb-5"
        >
           Committed to delivering neutral solutions to our partners
        </motion.p>
      </div>
      <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{type:'spring', duration:0.5, stiffness:120, delay:0.5}}
      className="flex gap-5 overflow-x-scroll mx-4 md:mx-16 justify-between">
        <img
          src={pic1}
          alt=""
          className="border h-80 w-96 object-cover rounded-md"
        />
        <img
          src={pic2}
          alt=""
          className="border h-80 w-96 object-cover rounded-md"
        />
        <img
          src={pic3}
          alt=""
          className="border h-80 w-96 object-cover rounded-md"
        />
      </motion.div>
      </div>
      <Features />
      <Team />
      <Testimonial />
    </div>
    </div>
  );
};

export default AboutUs;
