import arm from '../../Images/arm.png';
import noor from '../../Images/noor.png';
import allianz from '../../Images/allianz.png';
import svt from '../../Images/svt2.png'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";



const Ctx = () => {

    const { ref, inView } = useInView({
        threshold: 0.2,
      });
    
      const drop = useAnimation();
    
      // drop from top animation
      useEffect(() => {
        if (inView) {
          drop.start({
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.5,
              stiffness: 120,
              delay:0.5
            },
          });
        }
        if (!inView) {
          drop.start({
            opacity: 0,
          });
        }
        console.log("useEffect hook, inView = ", inView);
      }, [inView]);
    

    return (
        <div ref={ref} className="px-4 md:px-32 text-center">
            <p className="className='font-bold mb-12">Trusted by some leading brands</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                <motion.div 
                  animate={drop}
                >
                    <div className='grid justify-center mb-4'>
                    <img alt="wilmar.png" src={arm} className=" h-8" />
                    </div>
                    <p className='md:px-10 text-xs opacity-50'>Assets & Resource Management Holding Company</p>
                </motion.div>
                <motion.div 
                  animate={drop}
                >
                    <div className='grid justify-center mb-4'>
                    <img alt="wilmar.png" src={noor} className="h-8" />
                    </div>
                    <p className='md:px-10 text-xs opacity-50'>Noor Takaful Insurance Limited</p>
                </motion.div>
                <motion.div 
                  animate={drop}
                >
                    <div className='grid justify-center mb-4'>
                    <img alt="wilmar.png" src={allianz} className="h-8" />
                    </div>
                    <p className='md:px-10 text-xs opacity-50'>Alliance Nigeria PLC</p>
                </motion.div>
                <motion.div 
                  animate={drop}
                >
                    <div className='grid justify-center mb-4'>
                    <img alt="wilmar.png" src={svt} className="h-16" />
                    </div>
                    <p className='md:px-10 text-xs opacity-50'>Sovereign Trust Insurance PLC</p>
                </motion.div>
            </div>
        </div>
    )
}
export default Ctx;