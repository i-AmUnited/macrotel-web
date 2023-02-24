import Back from "../Images/back arrow.svg";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const ConnectSide = () => {

  const navigate = useNavigate();

  return (
    <div className=" h-[100px] md:h-screen p-2 md:p-0">
      <div className="h-full bg-gradient-to-br from-[#6F3E95] to-[#8A4FFF] text-white grid content-center md:content-between rounded md:rounded-none">
        <img src={Back} alt="Back" className='cursor-pointer p-5' onClick={() => navigate(-1)} />
        <motion.p
        initial={{y: -50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{type:'spring', duration:0.5, stiffness:120, delay:2}}
        className="hidden md:block text-center p-3 text-[14px] leading-7">
          “Innovation is the unrelenting drive to break the status quo and
          develop anew where few have dared to go.“
          <br />
          <span className="opacity-50">
            - <br /> Stephen Jeffes
          </span>
        </motion.p>
        <div className="pattern hidden md:block m-2"></div>
      </div>
    </div>
  );
};

export default ConnectSide;
