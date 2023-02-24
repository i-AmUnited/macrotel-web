import UssdProduct from "../Components/USSD";
import Zippyworld from "../Components/zippyCard";
import Noor from "../Components/noorCard";
import pic1 from "../Images/pension.png";
import pic2 from "../Images/insurance.jpg";
import pic3 from "../Images/invest.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import Navbar from '../Components/navBar';

const Products = () => {
  document.title = "Products";

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const drop = useAnimation();

  // drop from top animation
  useEffect(() => {
    if (inView) {
      drop.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          stiffness: 120,
        },
      });
    }
    if (!inView) {
      drop.start({
        opacity: 0,
        y: -80,
      });
    }
    console.log("useEffect hook, inView = ", inView);
  }, [inView]);


  return (
    <div>
      <Navbar/>
      <div className="mt-10 mb-20 px-4 md:px-16">
      <div className="grid justify-items-center">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1,  y: 0, }}
          transition={{ type: "spring", duration: 0.5, stiffness: 120 }}
          className="w-full md:w-1/2 text-center text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#9747FF] mb-5"
        >
          Our products are tailored towards our customer needs to drive business
          productivity.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1,  x: 0, }}
          transition={{ type: "spring", duration: 0.5, stiffness: 120 }}
        >
          <Zippyworld />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: +100 }}
          animate={{ opacity: 1,  x: 0, }}
          transition={{ type: "spring", duration: 0.5, stiffness: 120 }}
        >
          <Noor />
        </motion.div>
      </div>
      <div ref={ref} className="bg-mesh rounded-md">
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 rounded-md items-start mt-5 py-16 px-8 bg-white/60">
          <motion.div animate={drop}>
            <UssdProduct
              pic={pic1}
              title={"USSD Pension"}
              description={
                "CPS and MPS customers of ARM can now interact with their pension account using *597#"
              }
            />
          </motion.div>

          <motion.div animate={drop}>
            <UssdProduct
              pic={pic2}
              title={"USSD Insurance"}
              description={
                "Nigerians can now buy general insurance such as third-party Insurance, comprehensive Insurance, and family insurance such as travel insurance, savings and so much more with Allianz on *1016# or STI on *1015#"
              }
            />
          </motion.div>

          <motion.div animate={drop}>
            <UssdProduct
              pic={pic3}
              title={"USSD Investment"}
              description={
                "You can invest with ARM Investment as low as N5,000 on varieties of investment on *597#"
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Products;
