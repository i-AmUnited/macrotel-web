
const ServiceCard = ({ServiceImage, ServiceName, ServiceDescription}) => {
    return ( 
        <div className="bg-white rounded-md overflow-hidden border">
         <img src={ServiceImage} alt="" className="h-56 w-full object-cover"/>
         <div className="p-5">
            <p className="text-sm font-bold text-[#00000050] mb-3">{ServiceName}</p>
            <p className="text-sm leading-6">{ServiceDescription}</p>
         </div>
        </div>
     );
}
export default ServiceCard;
