import globe from "../../Images/globe.png"
import { motion } from "framer-motion";

const HeroSection = () => {

  return (
    <div className="px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 items-center">
      <motion.div
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{type: "spring", duration:0.5, stiffness:120}}
      className="p-0 md:p-10 order-2 md:order1 my-5 space-y-3">
        <p className="w-full md:w-2/3 text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#9747FF] text-center md:text-left">
          Providing High Quality and Cost Effective Fintech Solutions.
        </p>
        
        <p className="leading-7 text-center md:text-left">
          A Fin-Tech firm dedicated to providing partner a neutral solution that
          bring industry best practices with latest technology and addressing
          customers need through digitalization of products and services.
        </p>
      </motion.div>
      <motion.div
        initial={{opacity:0, x:+100}}
        animate={{opacity:1, x:0}}
        transition={{type: "spring", duration:0.5, stiffness:120, delay:1}}
      className="order-1 md:order-2 p-0 md:p-10">
        <img src={globe} alt="" className=" h-96 w-full object-cover"/>
      </motion.div>
    </div>
  );
};

export default HeroSection;
