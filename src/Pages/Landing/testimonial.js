const Testimonial = () => {
  return (
    
    <div className="px-4 md:px-16">
      <div className="bg-purple-pattern text-white rounded-md overflow-hidden py-10">
        <div className="container flex flex-col-reverse mx-auto text-white text-md md:rounded md:flex-col lg:flex-row items-center">
          <div className="basis-2/5 p-10">
            <p className="text-[18px] mb-6">
              We believe that enhancing buisness perfomance is a contest and
              should be tracked as interplay of these seven buisness levers
            </p>
            <div className="flex flex-row space-x-2  basis-3/5 ">
              <div className="basis-1/2 space-y-3 text-sm">
                <li>
                  <span>People</span>
                </li>
                <li>
                  <span>Strategy</span>
                </li>
                <li>
                  <span>Application</span>
                </li>
                <li>
                  <span>Process</span>
                </li>
              </div>
              <div className="basis-1/2 space-y-3 text-sm">
                <li>
                  <span>Architecture</span>
                </li>
                <li>
                  <span>Metrics</span>
                </li>
                <li>
                  <span>Data</span>
                </li>
                <div>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-3/5 text-center">
            <div className="flex flex-col md:flex-row px-9  md:pl-12 md:space-x-10">
              <div className="basis-1/3 mb-5">
                <h3 className="text-3xl font-bold pb-2 opacity-75">3,000</h3>
                <p className="text-sm">
                  POS Agents enabled accross Nigeria
                </p>
              </div>
              <div className="basis-1/3 mb-5 ">
                <h3 className="text-3xl font-bold pb-2 opacity-75">25,000,000</h3>
                <p className="text-sm">Total daily transaction volume</p>
              </div>
              <div className="basis-1/3 mb-5">
                <h3 className="text-3xl font-bold pb-2 opacity-75">50,000</h3>
                <p className="text-sm">Active business transactions daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
