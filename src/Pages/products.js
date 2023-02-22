import UssdProduct from "../Components/USSD";
import Zippyworld from "../Components/zippyCard";
import Noor from "../Components/noorCard";
import pic1 from "../Images/pension.jpg";
import pic2 from "../Images/insurance.jpg";
import pic3 from "../Images/invest.jpg";

import "animate.css";

const Products = () => {
  document.title = "Products";

  return (
    <div className="mt-10 mb-20 px-4 md:px-16">
      <div className="grid justify-items-center">
        <p className="animate__animated animate__bounce w-full md:w-1/2 text-center text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#9747FF] mb-5">
          Our products are tailored towards our customer needs to drive business
          productivity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="animate__animated animate__backInLeft">
          <Zippyworld />
        </div>
        <div className="animate__animated animate__backInRight">
          <Noor />
        </div>
      </div>
      <div className="bg-mesh rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 rounded-md items-start mt-5 py-16 px-8 bg-white/60">
          <UssdProduct
            pic={pic1}
            title={"USSD Pension"}
            description={
              "CPS and MPS customers of ARM can now interact with their pension account using *597#"
            }
          />

          <UssdProduct
            pic={pic2}
            title={"USSD Insurance"}
            description={
              "Nigerians can now buy general insurance such as third-party Insurance, comprehensive Insurance, and family insurance such as travel insurance, savings and so much more with Allianz on *1016# or STI on *1015#"
            }
          />

          <UssdProduct
            pic={pic3}
            title={"USSD Investment"}
            description={
              "You can invest with ARM Investment as low as N5,000 on varieties of investment on *597#"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
