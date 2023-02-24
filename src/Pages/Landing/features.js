import ServiceCard from "../../Components/serviceCard";
import Image1 from "../../Images/Img_1.png"
import Image2 from "../../Images/Img_2.jpg"
import Image3 from "../../Images/Img_3.jpg"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";


const Features = () => {

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const drop = useAnimation();

  const bounce = useAnimation();

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

  // bounce animation
  useEffect(() => {
    if (inView) {
      bounce.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          stiffness: 120,
        },
      });
    }
    if (!inView) {
      bounce.start({
        opacity: 0,
      });
    }
    console.log("useEffect hook, inView = ", inView);
  }, [inView]);

  return (
    <div ref={ref} className="px-4 md:px-16 grid gap-8">
      <motion.div
        animate={bounce}
      className="grid justify-center">
        <p className="text-center mb-5">Who are we</p>
        <p className="text-2xl px-5 md:px-20 lg:px-40 text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#9747FF] text-center">
          A financial technology company committed to offering partners a
          neutral solution that combines cutting-edge technology and industry
          best practices.
        </p>
      </motion.div>
      <motion.div
        animate={drop}
      className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ServiceCard
        ServiceImage={Image1}
        ServiceName={"Bespoke Software"}
        ServiceDescription={"We provide a custom-made software that can be adjust, modify and adapt to fit the demands andrequirements of your business."}
        />
        <ServiceCard
        ServiceImage={Image2}
        ServiceName={"API Business"}
        ServiceDescription={"We provide Application Programming Interface for business that put data to use to cut cost, improve efficiency and generate a massive amounts of value."}
        />
        <ServiceCard
        ServiceImage={Image3}
        ServiceName={"Mobile and Digital Payment"}
        ServiceDescription={"We provide secure cutting-edge technology for digital transactions, allowing customers to make online payments and mobile contactless payments."}
        />
      </motion.div>
    </div>
  );
};

export default Features;
