import Yes from "../Images/Pattern.jpg";
import pic1 from "../Images/one.jpg"
import pic2 from "../Images/Taofeek.jpg"
// import pic2 from "../Images/two.jpg"

const About = () => {
  return (
    <div className="w-full px-4 md:px-16">
      <div className="w-full md:w-1/2 lg:w-1/3 text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#9747FF] mb-2">
        Committed to delivering neutral solutions to our partners
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div><img src={pic1} alt="" className="border h-80 w-full object-cover rounded-md"/></div>
        <div><img src={pic2} alt="" className="border h-80 w-full object-cover hidden md:block rounded-md"/></div>
        <div><img src={Yes} alt="" className="border h-80 w-full object-cover hidden md:hidden lg:block rounded-md"/></div>
        <div><img src={Yes} alt="" className="border h-80 w-full object-cover hidden md:hidden lg:block rounded-md"/></div>
      </div>
    </div>
  );
};

export default About;
