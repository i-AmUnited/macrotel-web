
import ConnectSide from "../Components/connectSide";
import ConnectForm from "../Components/connectForm";
// import Pattern from "../Images/Pattern.jpg"

const Connect = () => {

  document.title="Connect with us"

  return (
    <div className="grid md:grid-cols-4">
      <div className="md:col-span-1">
        <ConnectSide />
      </div>
      <div className="md:col-span-3">
        <ConnectForm />
      </div>
    </div>
  );
};

export default Connect;
