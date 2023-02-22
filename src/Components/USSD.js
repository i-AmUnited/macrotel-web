
const UssdProduct = ({pic, title, description}) => {
    return (
        <div className="grid justify-items-center text-center">
            <div className="w-28 h-28 bg-slate-800 rounded-full">
            <img src={pic} alt="" className="w-28 h-28 rounded-full object-cover opacity-80"/>
            </div>
            <p className="mt-5 mb-3">{title}</p>
            <p className="text-sm leading-6">{description}</p>
        </div>
      );
}
 
export default UssdProduct;