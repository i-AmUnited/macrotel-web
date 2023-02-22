import video from "../../Images/video.png";

const HeroSection = () => {
  return (
    <div className="px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="p-0 md:p-10 order-2 md:order1 my-5 space-y-3">
        <p className="w-full md:w-2/3 text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#9747FF] text-center md:text-left">
          Providing High Quality and Cost Effective Fintech solutions.
        </p>
        
        <p className="leading-7 text-center md:text-left">
          A Fin-Tech firm dedicated to providing partner a neutral solution that
          bring industry best practices with latest technology and addressing
          customers need through digitalization of products and services.
        </p>
      </div>
      <div className="order-1 md:order-2 p-0 md:p-10">
        <img src={video} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
