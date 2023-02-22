import ServiceCard from "./serviceCard";
import Image1 from "../Images/Img_1.jpg"
import Image2 from "../Images/Img_2.jpg"
import Image3 from "../Images/Img_3.jpg"

const WhoAreWe = () => {
  return (
    <div className="px-4 md:px-16">
      <p className="text-center justify-center">Who Are We?</p>
      <div className="flex justify-center">
        <p className="w-full md:w-3/4 text-center text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#9747FF] mb-2">
          A financial technology company committed to offering partners a
          neutral solution that combines cutting-edge technology and industry
          best practices.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
      </div>
    </div>
  );
};

export default WhoAreWe;
